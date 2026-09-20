"use client";

import React, { useEffect, useState } from "react";

// Target Date: December 17, 2026, 9:00 AM Nepal time
const TARGET_DATE = new Date("2026-12-17T09:00:00+05:45").getTime();

interface TimeUnitProps {
  value: number;
  label: string;
  isMounted: boolean;
}

function TimeUnit({ value, label, isMounted }: TimeUnitProps) {
  const formattedValue = isMounted ? String(value).padStart(2, "0") : "00";

  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-700 leading-none tabular-nums tracking-tight">
        {formattedValue}
      </span>
      <span className="mt-2 sm:mt-3 text-[10px] sm:text-sm md:text-base font-medium uppercase tracking-wider text-gray-400">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer2026() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const updateTimer = () => {
      const diff = TARGET_DATE - Date.now();

      if (diff <= 0) {
        setHasStarted(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setHasStarted(false);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-full container mx-auto px-4 md:px-8 py-8 sm:py-12 text-center"
      aria-label="Birat Expo 2026 countdown"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600 tracking-tight">
        {hasStarted ? "Birat Expo is now live" : "Birat Expo starts in"}
      </h2>

      {!hasStarted && (
        <div
          role="timer"
          className="mt-8 sm:mt-10 grid grid-cols-4 gap-2 sm:gap-6 md:gap-10 max-w-4xl mx-auto"
        >
          <TimeUnit value={timeLeft.days} label="Days" isMounted={isMounted} />
          <TimeUnit
            value={timeLeft.hours}
            label="Hours"
            isMounted={isMounted}
          />
          <TimeUnit
            value={timeLeft.minutes}
            label="Minutes"
            isMounted={isMounted}
          />
          <TimeUnit
            value={timeLeft.seconds}
            label="Seconds"
            isMounted={isMounted}
          />
        </div>
      )}
    </section>
  );
}
