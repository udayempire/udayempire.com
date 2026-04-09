"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useMemo,
} from "react";

export type NowPlayingData = {
  songName: string;
  artistName: string;
  imageUrl: string;
  isSourcePlaying: boolean;
  positionSec?: number;
  durationSec?: number;
  musicUrl?: string;
};

type MusicContextType = {
  data: NowPlayingData | null;
  isPlayerReady: boolean;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playerElementId: string;
  togglePlayback: () => void;
  progressPercent: number;
};

const MusicContext = createContext<MusicContextType | null>(null);

export function useMusicContext() {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error("useMusicContext must be used inside MusicProvider");
  return ctx;
}

type NowPlayingApiPayload = {
  title: string;
  artists: string;
  coverUrl: string;
  songUrl?: string;
  musicUrl?: string;
  isPlaying: boolean;
  positionSec: number;
  durationSec: number;
};

async function fetchNowPlaying(): Promise<NowPlayingData | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_EXTENSION_URL}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const payload = (await res.json()) as NowPlayingApiPayload;
    if (!payload?.title) return null;
    return {
      songName: payload.title,
      artistName: payload.artists,
      imageUrl: payload.coverUrl,
      isSourcePlaying: Boolean(payload.isPlaying),
      musicUrl: payload.songUrl || payload.musicUrl,
      positionSec: payload.positionSec,
      durationSec: payload.durationSec,
    };
  } catch {
    return null;
  }
}

function extractYouTubeVideoId(url?: string): string | null {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) return parsed.pathname.slice(1);
    if (
      parsed.hostname.includes("youtube.com") ||
      parsed.hostname.includes("music.youtube.com")
    ) {
      return parsed.searchParams.get("v");
    }
  } catch {
    /* ignore */
  }
  return null;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
type YTPlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
  loadVideoById: (videoId: string) => void;
  destroy: () => void;
  getCurrentTime: () => number;
  getDuration: () => number;
};

const YT_API_SRC = "https://www.youtube.com/iframe_api";
let apiPromise: Promise<void> | null = null;

function loadYouTubeAPI(): Promise<void> {
  if (typeof window === "undefined") return Promise.reject();
  if (apiPromise) return apiPromise;
  apiPromise = new Promise((resolve) => {
    if ((window as any).YT?.Player) return resolve();
    const script = document.createElement("script");
    script.src = YT_API_SRC;
    script.async = true;
    (window as any).onYouTubeIframeAPIReady = () => resolve();
    document.head.appendChild(script);
  });
  return apiPromise;
}

const PLAYER_ELEMENT_ID = "ue-persistent-yt-player";

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<NowPlayingData | null>(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const playerRef = useRef<YTPlayer | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const videoId = useMemo(
    () => extractYouTubeVideoId(data?.musicUrl),
    [data?.musicUrl]
  );

  // Poll now-playing API
  useEffect(() => {
    const load = async () => setData(await fetchNowPlaying());
    load();
    const id = setInterval(load, 10000);
    return () => clearInterval(id);
  }, []);

  // Init/update YouTube player when videoId changes
  useEffect(() => {
    if (!videoId) return;

    let cancelled = false;

    const init = async () => {
      await loadYouTubeAPI();
      if (cancelled) return;

      // If there's already a player for the same video, do nothing
      if (playerRef.current) {
        try {
          playerRef.current.loadVideoById(videoId);
        } catch {
          // player was destroyed externally; recreate
          playerRef.current = null;
        }
        return;
      }

      playerRef.current = new (window as any).YT.Player(PLAYER_ELEMENT_ID, {
        videoId,
        height: "1",
        width: "1",
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          rel: 0,
          modestbranding: 1,
        },
        events: {
          onReady: () => {
            setIsPlayerReady(true);
            setDuration(playerRef.current?.getDuration() ?? 0);
          },
          onStateChange: (e: any) => {
            if (e.data === (window as any).YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              setDuration(playerRef.current?.getDuration() ?? 0);
              progressIntervalRef.current = setInterval(() => {
                setCurrentTime(playerRef.current?.getCurrentTime() ?? 0);
              }, 500);
            } else {
              setIsPlaying(false);
              if (progressIntervalRef.current)
                clearInterval(progressIntervalRef.current);
            }
          },
        },
      });
    };

    init();
    return () => {
      cancelled = true;
    };
    // We intentionally do NOT destroy the player on cleanup so audio persists
  }, [videoId]);

  const togglePlayback = () => {
    if (isPlaying) {
      playerRef.current?.pauseVideo();
    } else {
      playerRef.current?.playVideo();
    }
  };

  const progressPercent = useMemo(() => {
    if (isPlaying) {
      if (duration === 0) return 0;
      return Math.min(100, (currentTime / duration) * 100);
    }
    const current = data?.positionSec ?? 0;
    const total = data?.durationSec ?? 1;
    if (total === 0) return 0;
    return Math.min(100, (current / total) * 100);
  }, [isPlaying, currentTime, duration, data]);

  return (
    <MusicContext.Provider
      value={{
        data,
        isPlayerReady,
        isPlaying,
        currentTime,
        duration,
        playerElementId: PLAYER_ELEMENT_ID,
        togglePlayback,
        progressPercent,
      }}
    >
      <div
        id={PLAYER_ELEMENT_ID}
        className="pointer-events-none absolute left-0 top-0 h-px w-px opacity-0"
        aria-hidden="true"
      />
      {children}
    </MusicContext.Provider>
  );
}
