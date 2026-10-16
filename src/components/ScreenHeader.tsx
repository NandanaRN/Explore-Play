import React from 'react';
import { ChevronLeft, Bell, Share2, Bookmark, Check } from 'lucide-react';
import { ScreenId } from '../types';

interface ScreenHeaderProps {
  title?: string;
  subtitle?: string;
  cityBadge?: string;
  onBack?: () => void;
  onNavigateScreen?: (screenId: ScreenId) => void;
  onNavigate?: (screenId: ScreenId) => void;
  showProfile?: boolean;
  showBell?: boolean;
  hasUnreadBell?: boolean;
  showShare?: boolean;
  showBookmark?: boolean;
  isBookmarked?: boolean;
  onToggleBookmark?: () => void;
  onShare?: () => void;
  rightAction?: React.ReactNode;
}

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  title,
  subtitle,
  cityBadge,
  onBack,
  onNavigateScreen,
  onNavigate,

  showProfile = true,
  showBell = false,
  hasUnreadBell = true,
  showShare = false,
  showBookmark = false,
  isBookmarked = false,
  onToggleBookmark,
  onShare,
  rightAction,
}) => {
  return (
    <header className="sticky top-0 z-20 bg-[#FFFDF9]/95 backdrop-blur-md px-4 py-2.5 flex items-center justify-between border-b border-[#F5EFE6]">
      <div className="flex items-center gap-2.5">
        {onBack ? (
          <button
            onClick={onBack}
            className="w-9 h-9 rounded-full bg-[#F4EFE6] hover:bg-[#EAE3D6] flex items-center justify-center text-stone-800 transition-colors shadow-sm active:scale-95"
            aria-label="Go back"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
        ) : cityBadge ? (
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFF1DE] border border-[#FDE3BE] text-xs font-semibold text-[#A03E2D]">
            <span className="w-2 h-2 rounded-full bg-[#E05A3E]" />
            <span>{cityBadge}</span>
          </div>
        ) : null}

        <div>
          {title && (
            <h1 className="font-bold text-stone-900 text-base leading-tight tracking-tight">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-[11px] text-stone-500 font-medium leading-none mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {cityBadge && onBack && (
          <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FFF1DE] text-[11px] font-medium text-[#A03E2D]">
            <span>{cityBadge}</span>
          </div>
        )}

        {showShare && (
          <button
            onClick={onShare}
            className="w-8 h-8 rounded-full bg-[#F4EFE6] hover:bg-[#EAE3D6] flex items-center justify-center text-stone-700 transition-colors"
            title="Share"
          >
            <Share2 className="w-4 h-4" />
          </button>
        )}

        {showBookmark && (
          <button
            onClick={onToggleBookmark}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isBookmarked
                ? 'bg-amber-100 text-amber-700'
                : 'bg-[#F4EFE6] hover:bg-[#EAE3D6] text-stone-700'
            }`}
            title="Bookmark"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
          </button>
        )}

        {showBell && (onNavigate || onNavigateScreen) && (
          <button
            onClick={() => (onNavigate || onNavigateScreen)!('screen_27_notifications_pings')}
            className="w-9 h-9 rounded-full bg-[#F4EFE6] hover:bg-[#EAE3D6] flex items-center justify-center text-stone-700 relative transition-colors shadow-sm"
            title="Activity & Squad Pings"
          >
            <Bell className="w-4 h-4 stroke-[2]" />
            {hasUnreadBell && (
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#C84B31] ring-2 ring-white" />
            )}
          </button>
        )}

        {showProfile && (onNavigate || onNavigateScreen) && (
          <button
            onClick={() => (onNavigate || onNavigateScreen)!('screen_29_explorer_profile')}
            className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-stone-300 hover:ring-amber-500 transition-all flex items-center justify-center bg-[#A03E2D] text-white text-xs font-bold"
            title="Explorer Profile"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
              alt="Kabir Das"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // fallback to initials
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="text-[11px]">KD</span>
          </button>
        )}


        {rightAction}
      </div>
    </header>
  );
};
