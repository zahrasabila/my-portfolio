"use client";
import { useCallback, useRef } from "react";
import { useMousePosition } from "@/components/hooks/useMousePosition";
import { cn } from "@/lib/utils";

export default function GithubCardShiny({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const update = useCallback(({ x, y }: { x: number; y: number }) => {
    if (!overlayRef.current) {
      return;
    }

    const { width, height } = overlayRef.current?.getBoundingClientRect() ?? {};
    const xOffset = x - width / 2;
    const yOffset = y - height / 2;

    overlayRef.current?.style.setProperty("--x", `${xOffset}px`);
    overlayRef.current?.style.setProperty("--y", `${yOffset}px`);
  }, []);

  useMousePosition(containerRef, update);

  return (
    <div ref={containerRef} className={cn("group relative ", className)}>
      <div
        ref={overlayRef}
        className="hidden md:block github-card-shiny -z-10 absolute min-h-80 w-80 rounded-full opacity-0 bg-blend-soft-light blur-3xl transition-opacity group-hover:opacity-90"
        style={{
          transform: "translate(var(--x), var(--y))",
        }}
      />
      {children}
    </div>
  );
}
