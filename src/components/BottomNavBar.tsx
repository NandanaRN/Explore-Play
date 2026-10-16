import React from 'react';
import { MainTab, ScreenId } from '../types';
import { Compass, Bookmark, Users, Award, Smile } from 'lucide-react';

interface BottomNavBarProps {
  activeTab: MainTab;
  onSelectTab: (tab: MainTab) => void;
  onNavigateScreen?: (screenId: ScreenId) => void;
  onNavigate?: (screenId: ScreenId) => void;
  unreadNotifsCount?: number;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  activeTab,
  onSelectTab,
  onNavigateScreen,
  onNavigate,
}) => {
  const navFn = onNavigate || onNavigateScreen || (() => {});

  const tabs = [
    {
      id: 'discover' as MainTab,
      label: 'Discover',
      icon: Compass,
      targetScreen: 'screen_05_discover_home' as ScreenId,
    },
    {
      id: 'saved' as MainTab,
      label: 'Saved',
      icon: Bookmark,
      targetScreen: 'screen_09_saved_discoveries' as ScreenId,
    },
    {
      id: 'meetups' as MainTab,
      label: 'Meetups',
      icon: Users,
      targetScreen: 'screen_11_create_meetup' as ScreenId,
      badge: '4',
    },
    {
      id: 'passport' as MainTab,
      label: 'Passport',
      icon: Award,
      targetScreen: 'screen_24_city_passport_overview' as ScreenId,
    },
    {
      id: 'profile' as MainTab,
      label: 'Profile',
      icon: Smile,
      targetScreen: 'screen_29_explorer_profile' as ScreenId,
    },
  ];

  return (
    <nav className="sticky bottom-0 z-30 bg-[#FFFDF9]/95 backdrop-blur-md border-t border-[#F2ECE1] px-3 py-2 flex items-center justify-around shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => {
              onSelectTab(tab.id);
              navFn(tab.targetScreen);
            }}
            className={`flex flex-col items-center justify-center gap-0.5 py-1 px-2.5 rounded-xl transition-all relative ${

              isActive
                ? 'text-[#C84B31] font-semibold'
                : 'text-stone-500 hover:text-stone-800 font-medium'
            }`}
          >
            <div className="relative">
              <Icon
                className={`w-5 h-5 transition-transform ${
                  isActive ? 'scale-110 stroke-[2.4px]' : 'stroke-[1.8px]'
                }`}
              />
              {tab.badge && !isActive && (
                <span className="absolute -top-1 -right-2 bg-amber-400 text-stone-900 text-[9px] font-bold px-1 rounded-full border border-white">
                  {tab.badge}
                </span>
              )}
            </div>
            <span className="text-[11px] tracking-tight">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
