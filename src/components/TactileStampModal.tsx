import React from 'react';
import { PassportStamp } from '../types';
import { X, Award, MapPin, Calendar, Share2, Sparkles, CheckCircle2 } from 'lucide-react';

interface TactileStampModalProps {
  stamp: PassportStamp | null;
  onClose: () => void;
  onViewScrapbook?: () => void;
}

export const TactileStampModal: React.FC<TactileStampModalProps> = ({
  stamp,
  onClose,
  onViewScrapbook,
}) => {
  if (!stamp) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm bg-[#FFFDF9] rounded-3xl p-6 shadow-2xl border border-[#F2ECE1] text-stone-900 overflow-hidden">
        {/* Washi tape accent on top */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-amber-200/70 rotate-[-1deg] shadow-xs pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Tactile Stamp Graphic */}
        <div className="flex flex-col items-center text-center mt-3 mb-5">
          <div className="relative mb-3">
            <div
              className={`w-28 h-28 rounded-full flex flex-col items-center justify-center p-3 border-4 border-dashed shadow-md transition-transform hover:rotate-3 ${
                stamp.colorScheme === 'terracotta'
                  ? 'border-[#C84B31] bg-[#FFF2EE] text-[#C84B31]'
                  : stamp.colorScheme === 'lavender'
                  ? 'border-[#7E57C2] bg-[#F3E5F5] text-[#7E57C2]'
                  : stamp.colorScheme === 'gold'
                  ? 'border-[#D97706] bg-[#FEF3C7] text-[#B45309]'
                  : stamp.colorScheme === 'yellow'
                  ? 'border-[#CA8A04] bg-[#FEF9C3] text-[#A16207]'
                  : stamp.colorScheme === 'sand'
                  ? 'border-[#92400E] bg-[#FEF3C7] text-[#78350F]'
                  : 'border-stone-400 bg-stone-100 text-stone-500'
              }`}
            >
              <span className="text-2xl mb-1">{stamp.stampSymbol}</span>
              <span className="text-[10px] font-black uppercase tracking-wider leading-none">
                {stamp.title}
              </span>
              <span className="text-[8px] font-semibold mt-1 opacity-80">
                {stamp.isLocked ? 'QUEST LOCKED' : 'VERIFIED INK'}
              </span>
            </div>
            {!stamp.isLocked && (
              <span className="absolute -bottom-1 -right-1 bg-emerald-600 text-white rounded-full p-1 shadow-sm">
                <CheckCircle2 className="w-4 h-4" />
              </span>
            )}
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>+{stamp.xpValue} Explorer XP</span>
          </div>

          <h3 className="text-xl font-bold text-stone-900 tracking-tight">
            {stamp.title}
          </h3>
          <p className="text-xs text-stone-500 font-medium flex items-center gap-1 mt-0.5">
            <MapPin className="w-3.5 h-3.5" /> {stamp.location}
          </p>
        </div>

        {/* Details Card */}
        <div className="bg-[#FAF6F0] rounded-2xl p-3.5 border border-[#EFE8DD] text-xs space-y-2 mb-5">
          <p className="text-stone-700 leading-relaxed font-serif-quote italic">
            "{stamp.description}"
          </p>
          <div className="pt-2 border-t border-[#E8DEC9] flex items-center justify-between text-[11px] text-stone-500 font-mono">
            <span>Inked: {stamp.dateInked}</span>
            <span className="font-semibold text-stone-700">Official BLR Stamp</span>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          {stamp.linkedMemory && onViewScrapbook && (
            <button
              onClick={() => {
                onClose();
                onViewScrapbook();
              }}
              className="w-full py-2.5 rounded-xl bg-[#C84B31] text-white font-semibold text-xs hover:bg-[#B33E26] transition-colors shadow-sm active:scale-[0.98]"
            >
              Flip open polaroid scrapbook 📖
            </button>
          )}
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-[#F0EAE1] text-stone-700 font-semibold text-xs hover:bg-[#E4DCCE] transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
