// components/hooks/use-youtube-player.ts

"use client";

import { useState, useEffect, useRef } from "react";

// (Keep the type definitions)
type YTPlayer = {
    playVideo: () => void;
    pauseVideo: () => void;
    loadVideoById: (videoId: string) => void;
    destroy: () => void;
    getCurrentTime: () => number;
    getDuration: () => number;
};

declare global {
    interface Window {
        YT?: {
            Player: new (elementId: string, options: any) => YTPlayer;
            PlayerState: { PLAYING: number; PAUSED: number; ENDED: number; };
        };
        onYouTubeIframeAPIReady?: () => void;
    }
}

const YT_API_SRC = "https://www.youtube.com/iframe_api";
let apiPromise: Promise<void> | null = null;

function loadYouTubeAPI(): Promise<void> {
    if (typeof window === 'undefined') {
        return Promise.reject(new Error("Cannot load YouTube API on the server."));
    }
    if (apiPromise) {
        return apiPromise;
    }
    apiPromise = new Promise((resolve) => {
        if (window.YT && window.YT.Player) {
            return resolve();
        }
        const script = document.createElement("script");
        script.src = YT_API_SRC;
        script.async = true;
        window.onYouTubeIframeAPIReady = () => {
            resolve();
        };
        document.head.appendChild(script);
    });
    return apiPromise;
}

export function useYouTubePlayer(videoId: string | null, playerElementId: string) {
    const playerRef = useRef<YTPlayer | null>(null);
    const [isPlayerReady, setIsPlayerReady] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        console.log(`[Hook Effect] Running for videoId: ${videoId}`);

        if (!videoId) {
            console.log("[Hook Effect] No videoId provided. Skipping player setup.");
            return;
        }

        let player: YTPlayer | null = null;
        let progressInterval: NodeJS.Timeout;

        const initPlayer = async () => {
            console.log(`[Hook initPlayer] Initializing player for videoId: ${videoId}`);
            await loadYouTubeAPI();
            
            player = new window.YT!.Player(playerElementId, {
                videoId,
                height: "1",
                width: "1",
                playerVars: { autoplay: 0, controls: 0, disablekb: 1, fs: 0, rel: 0, modestbranding: 1 },
                events: {
                    onReady: () => {
                        console.log(`[Player Event] Player is READY for videoId: ${videoId}`);
                        setIsPlayerReady(true);
                        setDuration(player?.getDuration() ?? 0);
                    },
                    onStateChange: (event) => {
                        if (event.data === window.YT!.PlayerState.PLAYING) {
                            console.log(`[Player Event] State changed to PLAYING for videoId: ${videoId}`);
                            setIsPlaying(true);
                            setDuration(player?.getDuration() ?? 0);
                            progressInterval = setInterval(() => {
                                setCurrentTime(player?.getCurrentTime() ?? 0);
                            }, 500);
                        } else {
                            console.log(`[Player Event] State changed to PAUSED/ENDED for videoId: ${videoId}`);
                            setIsPlaying(false);
                            clearInterval(progressInterval);
                        }
                    },
                },
            });
            playerRef.current = player;
        };

        initPlayer();

        return () => {
            console.log(`[Hook Cleanup] Cleaning up player for videoId: ${videoId}`);
            clearInterval(progressInterval);
            player?.destroy();
            playerRef.current = null;
            setIsPlayerReady(false);
            setIsPlaying(false);
        };
    }, [videoId, playerElementId]);

    const controls = {
        play: () => {
            console.log("[Controls] play() called.");
            playerRef.current?.playVideo();
        },
        pause: () => {
            console.log("[Controls] pause() called.");
            playerRef.current?.pauseVideo();
        },
    };
    return { isPlayerReady, isPlaying, currentTime, duration, controls };
}