"use client";

import React, { useState, useRef } from "react";
import { X, Download, MapPin, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

export default function FloorPlan2026() {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleOpen = () => {
    setZoom(1.2);
    setPosition({ x: 0, y: 0 });
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.3, 4));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.3, 0.8));
  const handleReset = () => {
    setZoom(1.2);
    setPosition({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 0.15 : -0.15;
    setZoom((prev) => Math.min(Math.max(prev + zoomFactor, 0.8), 4));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <section className="py-12 md:py-16 border-t border-gray-100 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
              Proposed <span className="text-blue-600">Floor Plan</span>
            </h2>
          </div>

          <a
            href="/birat-expo-2026/Birat20Expo20Floor20plan202026-04.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition shadow-sm self-start sm:self-auto"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>

        {/* Clickable Image Preview Card */}
        <div
          onClick={handleOpen}
          className="group relative w-full bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden cursor-pointer hover:border-blue-400 hover:shadow-md transition-all duration-300 p-3 md:p-6"
        >
          <div className="relative w-full flex items-center justify-center overflow-hidden rounded-xl bg-gray-50/80">
            <img
              src="/birat-expo-2026/floorplan.jpg"
              alt="Birat Expo 2026 Floor Plan"
              className="max-h-[500px] md:max-h-[600px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
            />

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-gray-900 font-semibold text-sm">
              <span className="bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full border border-gray-200 flex items-center gap-2 shadow-lg text-xs sm:text-sm">
                <ZoomIn className="w-4 h-4 text-blue-600" />
                Click to open interactive floor plan
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Light Theme Interactive Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="relative max-w-6xl w-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xl flex flex-col h-[90vh]">
            {/* Modal Header Toolbar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-white border-b border-gray-200 text-gray-900 select-none">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Birat Expo 2026 — Master Floor Plan
                </h3>
                <span className="hidden md:inline text-xs text-gray-400 border-l border-gray-200 pl-2">
                  Scroll to zoom • Drag to pan
                </span>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-gray-100 rounded-lg p-0.5 border border-gray-200">
                  <button
                    onClick={handleZoomOut}
                    disabled={zoom <= 0.8}
                    className="p-1.5 text-gray-600 hover:text-gray-900 disabled:opacity-30 transition"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="px-2 text-xs font-mono font-medium text-gray-700 min-w-[48px] text-center">
                    {Math.round(zoom * 100)}%
                  </span>
                  <button
                    onClick={handleZoomIn}
                    disabled={zoom >= 4}
                    className="p-1.5 text-gray-600 hover:text-gray-900 disabled:opacity-30 transition"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleReset}
                    className="p-1.5 text-gray-500 hover:text-gray-900 border-l border-gray-200 ml-0.5 transition"
                    title="Reset View"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <a
                  href="/birat-expo-2026/Birat20Expo20Floor20plan202026-04.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition border border-gray-200 hidden sm:flex"
                  title="Download PDF"
                >
                  <Download className="w-4 h-4" />
                </a>

                <button
                  onClick={handleClose}
                  className="p-2 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition border border-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Free Interactive Canvas (Drag to Pan & Scroll to Zoom) */}
            <div
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className={`flex-1 relative w-full overflow-hidden bg-gray-100 flex items-center justify-center select-none ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
            >
              <div
                className="transition-transform duration-75 ease-out origin-center"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                }}
              >
                <img
                  src="/birat-expo-2026/floorplan.jpg"
                  alt="Birat Expo 2026 Interactive Floor Plan"
                  className="max-h-[80vh] w-auto object-contain rounded border border-gray-200 shadow-xl bg-white"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
