"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

type NowPlayingApiPayload = {
    channelId: string;
    title: string;
    artists: string;
    coverUrl: string;
    songUrl?: string;
    musicUrl?: string;
    isPlaying: boolean;
    positionSec: number;
    durationSec: number;
    playedAt: number;
};

type MusicCardData = {
    songName: string;
    artistName: string;
    imageUrl: string;
    isPlaying: boolean;
    positionSec?: number;
    durationSec?: number;
    musicUrl?: string;
};

export async function fetchNowPlaying(): Promise<MusicCardData | null> {
    try {
        const res = await fetch("http://localhost:4000/api/now-playing/uday-portfolio");
        const raw = await res.json();
        const payload = "data" in raw && raw.data ? raw.data : (raw as NowPlayingApiPayload);

        if (!payload?.title || !payload?.artists || !payload?.coverUrl) {
            return null;
        }

        return {
            songName: payload.title,
            artistName: payload.artists,
            imageUrl: payload.coverUrl,
            isPlaying: Boolean(payload.isPlaying),
            musicUrl: payload.songUrl || payload.musicUrl,
            positionSec: payload.positionSec,
            durationSec: payload.durationSec,
        };
    } catch (error) {
        console.error("fetchNowPlaying failed:", error);
        return null;
    }
}

export const MusicCard = () => {
    const [data, setData] = useState<MusicCardData>({
        songName: "No song playing",
        artistName: "Waiting for data...",
        imageUrl: "https://via.placeholder.com/64x64?text=♪",
        isPlaying: false,
        musicUrl: undefined,
        positionSec: undefined,
        durationSec: undefined,
    });

    useEffect(() => {
        let mounted = true;

        const load = async () => {
            const nowPlaying = await fetchNowPlaying();
            if (mounted && nowPlaying) setData(nowPlaying);
        };

        load();
        const id = setInterval(load, 10000);

        return () => {
            mounted = false;
            clearInterval(id);
        };
    }, []);

    const label = useMemo(() => `${data.artistName}`, [data.artistName]);

    const progressPercent = data.positionSec && data.durationSec 
        ? Math.min(100, Math.max(0, (data.positionSec / data.durationSec) * 100))
        : 0;

    return (
        <Link
            href={data.musicUrl || "#"}
            target={data.musicUrl ? "_blank" : undefined}
            rel={data.musicUrl ? "noopener noreferrer" : undefined}
            className="group relative flex w-full max-w-[480px]  items-center gap-4 rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900 dark:hover:border-zinc-700"
        >
            {/* Album Art & Equalizer */}
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg shadow-sm">
                <img
                    src={data.imageUrl}
                    alt={`${data.songName} cover`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 dark:ring-white/10" />

                {/* Animated Equalizer Overlay (Only shows when playing) */}
                {data.isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
                        <div className="flex h-3 items-end gap-[2px]">
                            <span className="w-1 animate-[pulse_0.8s_ease-in-out_infinite] rounded-full bg-white" style={{ height: '60%' }} />
                            <span className="w-1 animate-[pulse_1.2s_ease-in-out_infinite] rounded-full bg-white" style={{ height: '100%' }} />
                            <span className="w-1 animate-[pulse_0.6s_ease-in-out_infinite] rounded-full bg-white" style={{ height: '40%' }} />
                        </div>
                    </div>
                )}
            </div>

            {/* Typography & YT Music Context */}
            <div className="flex min-w-0 flex-1 flex-col justify-center">
                {/* Status Indicator */}
                <div className="mb-1.5 flex items-center gap-1.5">
                    {/* YouTube Music Icon Approximation */}
                    <svg className="h-3.5 w-3.5 text-[#FF0000]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                    </svg>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        {data.isPlaying ? "Now Playing" : "Recently Played"}
                    </span>
                </div>

                {/* Track Details */}
                <p className="truncate text-base font-bold leading-tight text-zinc-900 dark:text-zinc-50">
                    {data.songName}
                </p>
                <p className="mt-0.5 truncate text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    {label}
                </p>
            </div>

            {/* Play/Pause Button */}
            <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${data.isPlaying
                        ? "bg-[#FF0000] text-white shadow-lg shadow-red-500/20"
                        : "bg-zinc-100 text-zinc-900 group-hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:group-hover:bg-zinc-700"
                    }`}
                aria-label={data.isPlaying ? "Playing" : "Not playing"}
            >
                {data.isPlaying ? (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                ) : (
                    <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                )}
            </div>
            {/* Progress Playbar */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-zinc-100 dark:bg-zinc-800">
                <div 
                    className="h-full bg-[#FF0000] transition-all duration-1000 ease-linear"
                    style={{ width: `${progressPercent}%` }}
                />
            </div>
        </Link>
    );
};