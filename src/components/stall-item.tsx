import React, { useState } from "react";

export type StallProps = {
  id: string;
  xPct: number;
  yPct: number;
  wPct: number;
  hPct: number;
  label?: string;
  color: string;
  cursor: "pointer" | "not-allowed" | "normal" | "default";
  isClickable: boolean;
  tooltipContent?: string;
  onClick?: () => void;
  hoverOpacity?: number;
};

export const StallItem: React.FC<StallProps> = ({
  id,
  xPct,
  yPct,
  wPct,
  hPct,
  label,
  color,
  cursor,
  isClickable,
  tooltipContent,
  onClick,
  hoverOpacity = 0.6,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(
    null
  );

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    if (tooltipContent) {
      const rect = e.currentTarget.getBoundingClientRect();
      setTooltipPos({
        x: rect.left + rect.width / 2,
        y: rect.bottom + 6,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (tooltipContent) {
      const rect = e.currentTarget.getBoundingClientRect();
      setTooltipPos({
        x: rect.left + rect.width / 2,
        y: rect.bottom + 6,
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTooltipPos(null);
  };

  return (
    <>
      <div
        onClick={isClickable ? onClick : undefined}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "absolute",
          left: `${xPct}%`,
          top: `${yPct}%`,
          width: `${wPct}%`,
          height: `${hPct}%`,
          backgroundColor: color,
          cursor: cursor,
          opacity: isHovered && isClickable ? hoverOpacity : 1,
          transition: "opacity 0.15s ease, transform 0.15s ease",
          boxSizing: "border-box",
        }}
        className="border border-gray-900/40 flex items-center justify-center select-none font-bold text-[10px] sm:text-xs md:text-sm text-gray-950 shadow-sm"
      >
        <span>{label || id}</span>
      </div>

      {isHovered && tooltipContent && tooltipPos && (
        <div
          style={{
            position: "fixed",
            left: `${tooltipPos.x}px`,
            top: `${tooltipPos.y}px`,
            transform: "translateX(-50%)",
            zIndex: 9999,
          }}
          className="bg-gray-900/90 text-white text-xs px-2.5 py-1.5 rounded shadow-md pointer-events-none whitespace-pre-line text-center font-medium"
        >
          {tooltipContent}
        </div>
      )}
    </>
  );
};
