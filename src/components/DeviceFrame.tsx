import React from 'react';
import { ScreenId } from '../types';
import {
  Smartphone,
  Maximize2,
  Minimize2,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  MapPin,
  Calendar,
  Compass,
  Award,
  Bell,
} from 'lucide-react';

interface DeviceFrameProps {
  currentScreen: ScreenId;
  onSelectScreen: (screenId: ScreenId) => void;
  children: React.ReactNode;
}

export const screenRegistry: { id: ScreenId; num: string; label: string; flow: string }[] = [
  { id: 'screen_01_welcome', num: '01', label: 'Welcome & Splash', flow: 'Onboarding' },
  { id: 'screen_02_interests', num: '02', label: 'Select Interests (1/3)', flow: 'Onboarding' },
  { id: 'screen_03_preferences', num: '03', label: 'Wander Preferences (2/3)', flow: 'Onboarding' },
  { id: 'screen_04_location', num: '04', label: 'Location Setup (3/3)', flow: 'Onboarding' },
  { id: 'screen_05_discover_home', num: '05', label: 'Discover Home', flow: 'Discovery' },
  { id: 'screen_06_swipe_discovery', num: '06', label: 'Swipe Discovery Cards', flow: 'Discovery' },
  { id: 'screen_07_match_result', num: '07', label: 'Group Match Result', flow: 'Discovery' },
  { id: 'screen_08_activity_details', num: '08', label: 'Activity Details (Clay)', flow: 'Discovery' },
  { id: 'screen_09_saved_discoveries', num: '09', label: 'Saved Discoveries', flow: 'Discovery' },
  { id: 'screen_10_import_discovery', num: '10', label: 'Import from Instagram', flow: 'Discovery' },
  { id: 'screen_11_create_meetup', num: '11', label: 'Plan a New Meetup', flow: 'Squad Meetup' },
  { id: 'screen_12_invite_friends', num: '12', label: 'Invite Squad & RSVPN', flow: 'Squad Meetup' },
  { id: 'screen_13_group_preferences', num: '13', label: 'Group Vibe & Budget', flow: 'Squad Meetup' },
  { id: 'screen_14_group_matches', num: '14', label: 'Squad Recommendations', flow: 'Squad Meetup' },
  { id: 'screen_15_voting_shortlist', num: '15', label: 'Squad Voting Poll', flow: 'Squad Meetup' },
  { id: 'screen_16_itinerary_map', num: '16', label: 'Outing Itinerary & Map', flow: 'Squad Meetup' },
  { id: 'screen_17_confirmed_plan', num: '17', label: 'Confirmed Adventure Pass', flow: 'Squad Meetup' },
  { id: 'screen_18_active_adventure_board', num: '18', label: 'Active Adventure Board', flow: 'Live Trail Quests' },
  { id: 'screen_19_location_mission', num: '19', label: 'Active Mission Viewfinder', flow: 'Live Trail Quests' },
  { id: 'screen_20_mission_hint', num: '20', label: 'Squad Hint Vault', flow: 'Live Trail Quests' },
  { id: 'screen_21_mission_completed', num: '21', label: 'Mission Accomplished!', flow: 'Live Trail Quests' },
  { id: 'screen_22_checkpoint_map', num: '22', label: 'Next Checkpoint Map', flow: 'Live Trail Quests' },
  { id: 'screen_23_adventure_completion', num: '23', label: 'Adventure Wrap-Up', flow: 'Live Trail Quests' },
  { id: 'screen_24_city_passport_overview', num: '24', label: 'City Passport Overview', flow: 'Passport & Scrapbook' },
  { id: 'screen_25_stamp_badge_collection', num: '25', label: 'Stamps & Badges Inked', flow: 'Passport & Scrapbook' },
  { id: 'screen_26_experience_memory', num: '26', label: 'Experience Memory Roll', flow: 'Passport & Scrapbook' },
  { id: 'screen_27_notifications_pings', num: '27', label: 'Activity & Squad Pings', flow: 'Drops & Social' },
  { id: 'screen_28_mystery_weekend_drop', num: '28', label: 'Mystery Weekend Drop', flow: 'Drops & Social' },
  { id: 'screen_29_explorer_profile', num: '29', label: 'Explorer Profile', flow: 'Drops & Social' },
  { id: 'screen_30_app_settings', num: '30', label: 'Settings & Preferences', flow: 'Drops & Social' },
];

export const DeviceFrame: React.FC<DeviceFrameProps> = ({
  currentScreen,
  onSelectScreen,
  children,
}) => {
  const [isFramed, setIsFramed] = React.useState(true);
  const [activeFlowFilter, setActiveFlowFilter] = React.useState<string>('All');
  const [showDirectory, setShowDirectory] = React.useState(false);

  const currentIndex = screenRegistry.findIndex((s) => s.id === currentScreen);
  const currentItem = screenRegistry[currentIndex] || screenRegistry[0];

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectScreen(screenRegistry[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < screenRegistry.length - 1) {
      onSelectScreen(screenRegistry[currentIndex + 1].id);
    }
  };

  const flows = ['All', 'Onboarding', 'Discovery', 'Squad Meetup', 'Live Trail Quests', 'Passport & Scrapbook', 'Drops & Social'];

  const filteredScreens = activeFlowFilter === 'All'
    ? screenRegistry
    : screenRegistry.filter((s) => s.flow === activeFlowFilter);

  return (
    <div className="min-h-screen bg-[#111317] text-stone-200 flex flex-col font-sans selection:bg-amber-300 selection:text-stone-900">
      {/* Top Prototype Director Bar */}
      <header className="sticky top-0 z-50 bg-[#1A1D23] border-b border-stone-800/80 px-4 py-2.5 shadow-lg backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Brand & Active Screen Pill */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-stone-900 text-xs font-bold shadow-sm">
                EP
              </span>
              <span className="font-bold text-white text-sm tracking-tight hidden sm:inline">
                Explore & Play
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 font-medium border border-amber-400/20">
                Bengaluru Prototype
              </span>
            </div>

            <div className="h-4 w-px bg-stone-700 hidden md:block" />

            {/* Quick Screen Title indicator */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-stone-400 font-mono">Screen {currentItem.num}:</span>
              <span className="font-semibold text-stone-100 max-w-[150px] sm:max-w-[220px] truncate">
                {currentItem.label}
              </span>
            </div>
          </div>

          {/* Quick Flow Jump Shortcuts */}
          <div className="hidden lg:flex items-center gap-1 text-xs">
            <button
              onClick={() => onSelectScreen('screen_01_welcome')}
              className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 ${
                currentScreen === 'screen_01_welcome' ? 'bg-amber-500 text-stone-950 font-semibold' : 'text-stone-400 hover:text-white hover:bg-stone-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" /> Welcome
            </button>
            <button
              onClick={() => onSelectScreen('screen_05_discover_home')}
              className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 ${
                currentScreen === 'screen_05_discover_home' ? 'bg-amber-500 text-stone-950 font-semibold' : 'text-stone-400 hover:text-white hover:bg-stone-800'
              }`}
            >
              <Compass className="w-3.5 h-3.5" /> Discover
            </button>
            <button
              onClick={() => onSelectScreen('screen_11_create_meetup')}
              className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 ${
                currentScreen === 'screen_11_create_meetup' ? 'bg-amber-500 text-stone-950 font-semibold' : 'text-stone-400 hover:text-white hover:bg-stone-800'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" /> Meetups
            </button>
            <button
              onClick={() => onSelectScreen('screen_18_active_adventure_board')}
              className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 ${
                currentScreen === 'screen_18_active_adventure_board' ? 'bg-amber-500 text-stone-950 font-semibold' : 'text-stone-400 hover:text-white hover:bg-stone-800'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" /> Live Quest
            </button>
            <button
              onClick={() => onSelectScreen('screen_24_city_passport_overview')}
              className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 ${
                currentScreen === 'screen_24_city_passport_overview' ? 'bg-amber-500 text-stone-950 font-semibold' : 'text-stone-400 hover:text-white hover:bg-stone-800'
              }`}
            >
              <Award className="w-3.5 h-3.5" /> Passport
            </button>
            <button
              onClick={() => onSelectScreen('screen_28_mystery_weekend_drop')}
              className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 ${
                currentScreen === 'screen_28_mystery_weekend_drop' ? 'bg-amber-500 text-stone-950 font-semibold' : 'text-stone-400 hover:text-white hover:bg-stone-800'
              }`}
            >
              <Bell className="w-3.5 h-3.5" /> Drops
            </button>
          </div>

          {/* Stepper & Controls */}
          <div className="flex items-center gap-2">
            {/* Screen Dropdown Launcher */}
            <button
              onClick={() => setShowDirectory(!showDirectory)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium border transition-colors flex items-center gap-1.5 ${
                showDirectory
                  ? 'bg-amber-400 text-stone-900 border-amber-400'
                  : 'bg-stone-800 text-stone-200 border-stone-700 hover:bg-stone-700'
              }`}
              title="Browse all 30 screens"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Screens (30)</span>
            </button>

            {/* Prev / Next controls */}
            <div className="flex items-center bg-stone-800 rounded-md border border-stone-700 p-0.5">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="p-1 rounded hover:bg-stone-700 disabled:opacity-30 disabled:hover:bg-transparent text-stone-300"
                title="Previous screen"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-2 text-xs font-mono text-stone-400">
                {currentIndex + 1}/30
              </span>
              <button
                onClick={handleNext}
                disabled={currentIndex === screenRegistry.length - 1}
                className="p-1 rounded hover:bg-stone-700 disabled:opacity-30 disabled:hover:bg-transparent text-stone-300"
                title="Next screen"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Frame View Toggle */}
            <button
              onClick={() => setIsFramed(!isFramed)}
              className="p-1.5 rounded-md bg-stone-800 text-stone-300 border border-stone-700 hover:bg-stone-700 transition-colors hidden sm:flex items-center"
              title={isFramed ? 'Switch to Full Width Mode' : 'Switch to Phone Chassis Frame'}
            >
              {isFramed ? <Maximize2 className="w-4 h-4" /> : <Smartphone className="w-4 h-4" />}
            </button>

            {/* Reset to Start */}
            <button
              onClick={() => onSelectScreen('screen_01_welcome')}
              className="p-1.5 rounded-md bg-stone-800 text-stone-300 border border-stone-700 hover:bg-stone-700 transition-colors"
              title="Reset to Splash Screen"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Expandable Screen Grid Directory */}
        {showDirectory && (
          <div className="mt-3 pt-3 border-t border-stone-800/80 animate-in fade-in slide-in-from-top-2 duration-150">
            {/* Flow Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 text-xs no-scrollbar">
              <span className="text-stone-400 shrink-0 font-medium pr-1">Filter Flow:</span>
              {flows.map((flow) => (
                <button
                  key={flow}
                  onClick={() => setActiveFlowFilter(flow)}
                  className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                    activeFlowFilter === flow
                      ? 'bg-amber-400 text-stone-900 font-semibold'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  {flow}
                </button>
              ))}
            </div>

            {/* Screens Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 max-h-72 overflow-y-auto p-1 text-xs">
              {filteredScreens.map((screen) => {
                const isActive = screen.id === currentScreen;
                return (
                  <button
                    key={screen.id}
                    onClick={() => {
                      onSelectScreen(screen.id);
                      setShowDirectory(false);
                    }}
                    className={`p-2 rounded-lg text-left border transition-all ${
                      isActive
                        ? 'bg-amber-500/20 border-amber-400 text-amber-200 shadow-sm'
                        : 'bg-stone-800/60 border-stone-700/60 text-stone-300 hover:bg-stone-800 hover:border-stone-600'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] text-stone-400 mb-1">
                      <span>Screen {screen.num}</span>
                      <span className="text-[9px] uppercase px-1 py-0.2 rounded bg-stone-700/60 text-stone-300 truncate max-w-[60px]">
                        {screen.flow.split(' ')[0]}
                      </span>
                    </div>
                    <div className="font-medium text-stone-100 line-clamp-2 leading-tight">
                      {screen.label}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Prototype Viewport */}
      <main className="flex-1 flex items-center justify-center p-0 sm:p-4 md:p-6 lg:p-8 bg-radial from-[#1A1D24] to-[#0E1013] overflow-x-hidden">
        {isFramed ? (
          /* Realistic Titanium Mobile Device Chassis */
          <div className="relative w-full max-w-[430px] my-auto">
            {/* Device Outer Chassis */}
            <div className="relative rounded-[50px] p-[10px] bg-gradient-to-b from-[#383C45] via-[#1E2128] to-[#121418] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.12)] border border-[#484E5B]/40">
              {/* Dynamic Island / Top Speaker */}
              <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-40 flex items-center justify-between px-2 shadow-inner">
                <div className="w-2.5 h-2.5 rounded-full bg-[#181B22] border border-[#2A2E39]" />
                <div className="w-2 h-2 rounded-full bg-[#0D243A] opacity-70" />
              </div>

              {/* Side Physical Button Accents */}
              <div className="absolute -left-[13px] top-28 w-[3px] h-9 bg-[#3A3E47] rounded-l" />
              <div className="absolute -left-[13px] top-40 w-[3px] h-12 bg-[#3A3E47] rounded-l" />
              <div className="absolute -left-[13px] top-56 w-[3px] h-12 bg-[#3A3E47] rounded-l" />
              <div className="absolute -right-[13px] top-36 w-[3px] h-16 bg-[#3A3E47] rounded-r" />

              {/* Screen Bezel & Canvas */}
              <div className="relative rounded-[42px] overflow-hidden bg-[#FFFDF9] text-[#1E1E1E] shadow-inner h-[870px] flex flex-col">
                {/* Mobile Status Bar */}
                <div className="h-10 pt-2 px-6 flex items-center justify-between text-[11px] font-semibold text-stone-800 shrink-0 z-30 select-none bg-transparent">
                  <span>11:09</span>
                  <div className="flex items-center gap-1.5 text-stone-700">
                    <span className="text-[10px] tracking-tight">5G</span>
                    <div className="w-4 h-2.5 border border-stone-800 rounded-sm p-0.5 flex items-center">
                      <div className="w-full h-full bg-stone-800 rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* Actual Screen Content Area (Scrollable with hidden scrollbar) */}
                <div className="flex-1 overflow-y-auto no-scrollbar relative flex flex-col">
                  {children}
                </div>

                {/* iOS Home Indicator Bar */}
                <div className="h-5 bg-[#FFFDF9] flex items-center justify-center shrink-0 z-30">
                  <div className="w-32 h-1 bg-stone-400/50 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Full Expanded View */
          <div className="w-full max-w-xl mx-auto bg-[#FFFDF9] text-[#1E1E1E] rounded-3xl shadow-2xl overflow-hidden border border-stone-800/20 my-4 min-h-[900px] flex flex-col">
            {children}
          </div>
        )}
      </main>
    </div>
  );
};
