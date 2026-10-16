import React, { useState } from 'react';
import { Camera, X, Sparkles, Check, RefreshCw } from 'lucide-react';

interface CameraViewfinderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCaptureSuccess: () => void;
  missionName: string;
  hint?: string;
}

export const CameraViewfinderModal: React.FC<CameraViewfinderModalProps> = ({
  isOpen,
  onClose,
  onCaptureSuccess,
  missionName,
  hint,
}) => {

  const [isCapturing, setIsCapturing] = useState(false);
  const [hasFlashed, setHasFlashed] = useState(false);

  if (!isOpen) return null;

  const handleShutter = () => {
    setIsCapturing(true);
    setHasFlashed(true);
    setTimeout(() => {
      setHasFlashed(false);
      setTimeout(() => {
        setIsCapturing(false);
        onCaptureSuccess();
      }, 500);
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col justify-between text-white animate-in fade-in duration-150">
      {/* Flash overlay */}
      {hasFlashed && (
        <div className="absolute inset-0 bg-white z-50 animate-out fade-out duration-150" />
      )}

      {/* Top Controls */}
      <div className="p-4 flex items-center justify-between z-20 bg-gradient-to-b from-black/80 to-transparent">
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-stone-900/80 border border-stone-700 flex items-center justify-center text-white"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="text-center">
          <div className="text-[10px] font-mono uppercase tracking-wider text-amber-400">
            Mission Objective Scanner
          </div>
          <div className="text-xs font-semibold text-white truncate max-w-[200px]">
            {missionName}
          </div>
        </div>
        <div className="w-10 h-10 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-xs font-bold font-mono">
          98%
        </div>
      </div>

      {/* Viewfinder Main View */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        {/* Background scene simulation (mural alleyway) */}
        <img
          src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80"
          alt="Mural Street Scene"
          className="absolute inset-0 w-full h-full object-cover opacity-85 scale-105 filter brightness-95"
        />

        {/* Viewfinder Grid Overlay */}
        <div className="absolute inset-8 border border-white/30 rounded-2xl pointer-events-none flex flex-col justify-between p-4">
          {/* 4 Framing Corner brackets */}
          <div className="flex justify-between">
            <div className="w-6 h-6 border-t-2 border-l-2 border-amber-400" />
            <div className="w-6 h-6 border-t-2 border-r-2 border-amber-400" />
          </div>

          {/* Central Target Reticle */}
          <div className="self-center flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-amber-400 animate-spin flex items-center justify-center duration-1000">
              <div className="w-16 h-16 rounded-full border border-amber-300/60" />
            </div>
            <div className="mt-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-amber-400/50 text-[11px] font-semibold text-amber-300 flex items-center gap-1.5 shadow-lg">
              <Sparkles className="w-3.5 h-3.5" />
              <span>3 Shades of Yellow Detected</span>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="w-6 h-6 border-b-2 border-l-2 border-amber-400" />
            <div className="w-6 h-6 border-b-2 border-r-2 border-amber-400" />
          </div>
        </div>

        {/* Color Palette HUD */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-stone-900/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-700/80 text-[11px]">
          <span className="text-stone-300 font-mono">Matched:</span>
          <span className="w-3.5 h-3.5 rounded-full bg-[#FFD84D] border border-white/40" title="#FFD84D" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#F59E0B] border border-white/40" title="#F59E0B" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#FEF08A] border border-white/40" title="#FEF08A" />
          <span className="text-emerald-400 font-bold ml-1 flex items-center gap-0.5">
            <Check className="w-3 h-3 stroke-[3]" /> Locked
          </span>
        </div>
      </div>

      {/* Shutter Bottom Bar */}
      <div className="p-6 bg-gradient-to-t from-black via-black/90 to-transparent flex items-center justify-around z-20">
        <div className="w-12 text-center text-[10px] text-stone-400 font-mono">
          ISO 200
        </div>

        {/* Big Shutter Button */}
        <button
          onClick={handleShutter}
          disabled={isCapturing}
          className="w-20 h-20 rounded-full border-4 border-white/90 p-1.5 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
        >
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-stone-900 shadow-lg">
            {isCapturing ? (
              <RefreshCw className="w-6 h-6 animate-spin text-amber-600" />
            ) : (
              <Camera className="w-7 h-7 text-stone-900" />
            )}
          </div>
        </button>

        <div className="w-12 text-center text-[10px] text-stone-400 font-mono">
          1/250s
        </div>
      </div>
    </div>
  );
};
