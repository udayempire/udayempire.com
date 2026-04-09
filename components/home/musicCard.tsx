"use client";

import Image from "next/image";
import Link from "next/link";
import { useMusicContext } from "@/components/global/MusicProvider";

export const MusicCard = () => {
  const {
    data,
    isPlayerReady,
    isPlaying,
    playerElementId,
    togglePlayback,
    progressPercent,
  } = useMusicContext();

  if (!data) return null;

  return (
    <div className="mt-8 group relative z-0 flex w-full max-w-[480px] items-center gap-3 overflow-hidden rounded-2xl border border-zinc-200/50 bg-white/70 p-3 shadow-sm backdrop-blur-xl transition-all sm:gap-4 sm:p-4 dark:border-zinc-800/50 dark:bg-zinc-900/70">
      {/* Dynamic Color Background Layer */}
      <div
        className="absolute inset-0 -z-10 scale-110 opacity-30 blur-2xl saturate-200 transition-all duration-700 dark:opacity-40"
        style={{
          backgroundImage: `url(${data.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* The persistent iframe lives in MusicProvider — this just marks where we used to put it */}
      {/* id={playerElementId} is already rendered in the layout via MusicProvider */}
      <div id={`${playerElementId}-ui-ref`} className="hidden" aria-hidden />

      {/* Album Art Container */}
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg shadow-sm sm:h-14 sm:w-14">
        <Link
          href={`${data.musicUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
        >
          <Image
            src={data.imageUrl}
            alt={data.songName}
            width={56}
            height={56}
            unoptimized
            className="h-full w-full object-cover"
          />
        </Link>
        {/* Animated Equalizer Overlay */}
        {isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
            <div className="flex h-3 items-end gap-[2px]">
              <span
                className="w-1 animate-[pulse_0.8s_ease-in-out_infinite] rounded-full bg-white"
                style={{ height: "60%" }}
              />
              <span
                className="w-1 animate-[pulse_1.2s_ease-in-out_infinite] rounded-full bg-white"
                style={{ height: "100%" }}
              />
              <span
                className="w-1 animate-[pulse_0.6s_ease-in-out_infinite] rounded-full bg-white"
                style={{ height: "40%" }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Typography */}
      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <div className="mb-1 sm:mb-1.5 flex items-center gap-1.5 pr-8 sm:pr-0">
          <svg
            className="h-3 w-3 shrink-0 text-[#FF0000] sm:h-3.5 sm:w-3.5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
          </svg>
          <span className="truncate text-[9px] font-bold uppercase tracking-wider text-zinc-600 sm:text-[10px] dark:text-zinc-300">
            {data.isSourcePlaying ? "UE is Currently Vibing On" : "Recently Played by UE"}
          </span>
        </div>
        <p className="truncate text-sm font-bold leading-tight text-zinc-900 sm:text-base dark:text-white">
          {data.songName}
        </p>
        <p className="mt-0.5 truncate text-xs font-medium text-zinc-600 sm:text-sm dark:text-zinc-300">
          {data.artistName}
        </p>
      </div>

      {/* Play/Pause Button */}
      <button
        type="button"
        onClick={togglePlayback}
        disabled={!isPlayerReady}
        className={`flex sm:mt-2 -mr-10 sm:h-8 h-8 w-8 sm:w-48 shrink-0 items-center justify-center rounded-full shadow-sm transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${
          isPlaying
            ? "text-zinc-900 dark:text-white"
            : "text-zinc-900 dark:text-white"
        }`}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <svg
            className="h-3.5 w-3.5 sm:h-10 sm:w-10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg
            className="ml-1 h-3.5 w-3.5 sm:h-10 sm:w-10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 sm:h-1.5 w-full bg-black/5 dark:bg-black/40">
        <div
          className="h-full rounded-r-full bg-black/50 backdrop-brightness-10 backdrop-saturate-150 transition-all duration-1000 ease-linear dark:bg-white/30 dark:backdrop-brightness-150"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
};