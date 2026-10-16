import React, { useState, useEffect, useCallback } from 'react';
import { ScreenId, PassportStamp, SpotItem, ViewMode } from './types';
import { initialPassportStamps, curatedSpots } from './mockData';
import { DeviceFrame } from './components/DeviceFrame';
import { TactileStampModal } from './components/TactileStampModal';
import { CameraViewfinderModal } from './components/CameraViewfinderModal';
import { OnboardingScreens } from './screens/OnboardingScreens';
import { DiscoveryScreens } from './screens/DiscoveryScreens';
import { MeetupScreens } from './screens/MeetupScreens';
import { QuestScreens } from './screens/QuestScreens';
import { PassportProfileScreens } from './screens/PassportProfileScreens';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('screen_01_welcome');
  const [screenHistory, setScreenHistory] = useState<ScreenId[]>(['screen_01_welcome']);
  const [viewMode, setViewMode] = useState<ViewMode>('mobile');

  // Modals & Overlays
  const [inspectingStamp, setInspectingStamp] = useState<PassportStamp | null>(null);
  const [isViewfinderOpen, setIsViewfinderOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // App persistent state
  const [savedSpots, setSavedSpots] = useState<SpotItem[]>([
    curatedSpots[0], // Pottery & Paint Studio
    curatedSpots[2], // Church Street Secondhand Bookshops
  ]);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
  }, []);

  const handleNavigate = useCallback(
    (screen: ScreenId) => {
      setCurrentScreen(screen);
      setScreenHistory((prev) => [...prev, screen]);
    },
    []
  );

  const handleBack = useCallback(() => {
    setScreenHistory((prev) => {
      if (prev.length <= 1) return prev;
      const newHistory = [...prev];
      newHistory.pop(); // remove current
      const prevScreen = newHistory[newHistory.length - 1];
      setCurrentScreen(prevScreen);
      return newHistory;
    });
  }, []);

  const handleResetPrototype = useCallback(() => {
    setCurrentScreen('screen_01_welcome');
    setScreenHistory(['screen_01_welcome']);
    showToast('Reset prototype to Screen 01: Welcome');
  }, [showToast]);

  const handleToggleSaveSpot = useCallback((spot: SpotItem) => {
    setSavedSpots((prev) => {
      const exists = prev.some((s) => s.id === spot.id);
      if (exists) {
        return prev.filter((s) => s.id !== spot.id);
      } else {
        return [...prev, spot];
      }
    });
  }, []);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === 'Escape') {
        if (inspectingStamp) setInspectingStamp(null);
        if (isViewfinderOpen) setIsViewfinderOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inspectingStamp, isViewfinderOpen]);

  // Determine which screen component group to render
  const renderCurrentScreen = () => {
    // Group 1: Onboarding (Screens 01 - 04)
    if (
      currentScreen === 'screen_01_welcome' ||
      currentScreen === 'screen_02_interests' ||
      currentScreen === 'screen_03_preferences' ||
      currentScreen === 'screen_04_location'
    ) {
      return (
        <OnboardingScreens
          currentScreen={currentScreen}
          onNavigate={handleNavigate}
          onShowToast={showToast}
        />
      );
    }

    // Group 2: Discovery & Match (Screens 05 - 10)
    if (
      currentScreen === 'screen_05_discover_home' ||
      currentScreen === 'screen_06_swipe_discovery' ||
      currentScreen === 'screen_07_match_result' ||
      currentScreen === 'screen_08_activity_details' ||
      currentScreen === 'screen_09_saved_discoveries' ||
      currentScreen === 'screen_10_import_discovery'
    ) {
      return (
        <DiscoveryScreens
          currentScreen={currentScreen}
          onNavigate={handleNavigate}
          onShowToast={showToast}
          savedSpots={savedSpots}
          onToggleSaveSpot={handleToggleSaveSpot}
        />
      );
    }

    // Group 3: Squad & Meetup Planning (Screens 11 - 17)
    if (
      currentScreen === 'screen_11_create_meetup' ||
      currentScreen === 'screen_12_invite_friends' ||
      currentScreen === 'screen_13_group_preferences' ||
      currentScreen === 'screen_14_group_matches' ||
      currentScreen === 'screen_15_voting_shortlist' ||
      currentScreen === 'screen_16_itinerary_map' ||
      currentScreen === 'screen_17_confirmed_plan'
    ) {
      return (
        <MeetupScreens
          currentScreen={currentScreen}
          onNavigate={handleNavigate}
          onShowToast={showToast}
          savedSpots={savedSpots}
        />
      );
    }

    // Group 4: Live Quest Adventure (Screens 18 - 23)
    if (
      currentScreen === 'screen_18_active_adventure_board' ||
      currentScreen === 'screen_18_active_board' ||
      currentScreen === 'screen_19_location_mission' ||
      currentScreen === 'screen_20_mission_hint' ||
      currentScreen === 'screen_21_mission_completed' ||
      currentScreen === 'screen_22_checkpoint_map' ||
      currentScreen === 'screen_23_adventure_completion'
    ) {
      return (
        <QuestScreens
          currentScreen={
            currentScreen === 'screen_18_active_adventure_board'
              ? 'screen_18_active_board'
              : currentScreen
          }
          onNavigate={handleNavigate}
          onShowToast={showToast}
          onOpenViewfinder={() => setIsViewfinderOpen(true)}
        />
      );
    }

    // Group 5: City Passport & Profile (Screens 24 - 30)
    const normalizedScreen: ScreenId =
      currentScreen === 'screen_24_city_passport_overview'
        ? 'screen_24_passport_overview'
        : currentScreen === 'screen_25_stamp_badge_collection'
        ? 'screen_25_stamp_collection'
        : currentScreen === 'screen_27_notifications_pings'
        ? 'screen_27_notifications'
        : currentScreen === 'screen_28_mystery_weekend_drop'
        ? 'screen_28_mystery_drop'
        : currentScreen === 'screen_29_explorer_profile'
        ? 'screen_29_profile'
        : currentScreen === 'screen_30_app_settings'
        ? 'screen_30_settings'
        : currentScreen;

    return (
      <PassportProfileScreens
        currentScreen={normalizedScreen}
        onNavigate={handleNavigate}
        onShowToast={showToast}
        onSelectStamp={(stamp) => setInspectingStamp(stamp)}
      />
    );
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-stone-900 font-sans antialiased relative">
      <DeviceFrame
        currentScreen={currentScreen}
        onSelectScreen={handleNavigate}
      >
        {renderCurrentScreen()}
      </DeviceFrame>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-sm px-4 py-2.5 rounded-2xl bg-stone-900/95 text-stone-100 text-xs font-semibold shadow-2xl border border-stone-700/60 backdrop-blur-md flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="ml-2 text-stone-400 hover:text-stone-200 text-xs font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {/* Tactile Stamp Inspector Modal */}
      <TactileStampModal
        stamp={inspectingStamp}
        onClose={() => setInspectingStamp(null)}
        onViewScrapbook={() => {
          setInspectingStamp(null);
          handleNavigate('screen_26_experience_memory');
        }}
      />

      {/* Camera Quest Viewfinder Challenge Modal */}
      <CameraViewfinderModal
        isOpen={isViewfinderOpen}
        onClose={() => setIsViewfinderOpen(false)}
        onCaptureSuccess={() => {
          setIsViewfinderOpen(false);
          showToast('Photo verified! 99% match with artisan courtyard seal!');
          handleNavigate('screen_21_mission_completed');
        }}
        missionName="Pottery & Paint Studio Courtyard Kiln Challenge"
        hint="Point camera towards the terracotta clay seal on the courtyard beam"
      />
    </div>
  );
}

