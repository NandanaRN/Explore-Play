import React, { useState } from 'react';
import { ScreenId, CheckpointStop } from '../types';
import { ScreenHeader } from '../components/ScreenHeader';
import { BottomNavBar } from '../components/BottomNavBar';
import { initialCheckpoints, initialSquadMembers } from '../mockData';
import {
  Camera,
  MapPin,
  HelpCircle,
  Check,
  CheckCircle2,
  Trophy,
  Award,
  ChevronRight,
  Sparkles,
  Compass,
  ArrowRight,
  Eye,
  Lock,
  Unlock,
  Share2,
  RotateCcw,
  Clock,
  Flame,
  Users,
} from 'lucide-react';


interface QuestScreensProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
  onOpenViewfinder: () => void;
}

export const QuestScreens: React.FC<QuestScreensProps> = ({
  currentScreen,
  onNavigate,
  onShowToast,
  onOpenViewfinder,
}) => {
  const [hintRevealed, setHintRevealed] = useState(false);
  const [questStep, setQuestStep] = useState(2); // stop 2 active
  const [userPhotos, setUserPhotos] = useState<string[]>([
    'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80',
  ]);

  /* -------------------------------------------------------------
     SCREEN 18: ACTIVE ADVENTURE BOARD
  ------------------------------------------------------------- */
  if (currentScreen === 'screen_18_active_board') {
    return (
      <div className="flex flex-col min-h-full bg-[#FAF7F2] text-[#1E1E1E]">
        <ScreenHeader
          title="Active Adventure"
          subtitle="Screen 18 · Koramangala Quest"
          onBack={() => onNavigate('screen_17_confirmed_plan')}
          onNavigate={onNavigate}
        />

        <div className="flex-1 p-5 space-y-4 pb-24 overflow-y-auto">
          {/* Quest Banner */}
          <div className="bg-gradient-to-br from-[#A03E2D] to-[#6E2A1E] text-white rounded-3xl p-5 shadow-md relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/20 text-white flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-300" />
                Live Quest in Progress
              </span>
              <span className="text-xs font-mono font-bold text-amber-200">Stop 2 of 4</span>
            </div>

            <h2 className="text-xl font-bold font-serif">Koramangala Artisan Scavenger</h2>
            <p className="text-xs text-amber-100/90 mt-1">
              Find hidden heritage tiles, handcraft a clay miniature, and discover Bangalore&apos;s best kept chai spot!
            </p>

            {/* Team progress bar */}
            <div className="mt-4 pt-3 border-t border-white/20">
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span>Squad Trail Progress</span>
                <span>50% Complete</span>
              </div>
              <div className="w-full h-2.5 bg-black/20 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full w-1/2 transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* Current Stop Mission Card */}
          <div className="bg-white rounded-2xl p-4 border-2 border-[#A03E2D]/40 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#A03E2D] uppercase tracking-wider flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                Current Active Checkpoint
              </span>
              <span className="text-xs font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                +250 XP
              </span>
            </div>

            <div className="flex gap-3 items-center">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-2xl shrink-0">
                🎨
              </div>
              <div>
                <h4 className="font-bold text-base text-stone-900">Pottery & Paint Studio</h4>
                <p className="text-xs text-stone-500">Koramangala 4th Block · 120m away</p>
              </div>
            </div>

            {/* Mission Clue Box */}
            <div className="bg-stone-50 rounded-xl p-3 border border-stone-200 text-xs">
              <p className="font-bold text-stone-800 mb-1">🎯 Mission Objective:</p>
              <p className="text-stone-600 italic">
                &ldquo;Locate the terracotta clay wheel in the central courtyard and snap a photo of the sunburst kiln stamp!&rdquo;
              </p>
            </div>

            {/* Trigger buttons */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={onOpenViewfinder}
                className="py-2.5 px-3 rounded-xl bg-[#A03E2D] hover:bg-[#833224] text-white font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                <Camera className="w-4 h-4" />
                <span>Snap Mission Photo</span>
              </button>

              <button
                onClick={() => onNavigate('screen_20_mission_hint')}
                className="py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <HelpCircle className="w-4 h-4 text-amber-600" />
                <span>Need a Hint?</span>
              </button>
            </div>
          </div>

          {/* Quick links to Map and Mission Details */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onNavigate('screen_19_location_mission')}
              className="p-3.5 bg-white rounded-2xl border border-stone-200 hover:border-stone-300 text-left shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                  Inspect Challenge
                </span>
                <p className="font-bold text-xs text-stone-800 mt-1">Location Mission Details</p>
              </div>
              <span className="text-xs font-bold text-[#2D6A4F] flex items-center gap-1 mt-2">
                <span>View Screen 19</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </button>

            <button
              onClick={() => onNavigate('screen_22_checkpoint_map')}
              className="p-3.5 bg-white rounded-2xl border border-stone-200 hover:border-stone-300 text-left shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                  Full GPS Trail
                </span>
                <p className="font-bold text-xs text-stone-800 mt-1">Checkpoint Map</p>
              </div>
              <span className="text-xs font-bold text-[#A03E2D] flex items-center gap-1 mt-2">
                <span>View Screen 22</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </button>
          </div>

          {/* Squad Live Status */}
          <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-2.5">
              Squad Real-Time Positions
            </span>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#A03E2D] text-white flex items-center justify-center font-bold text-[10px]">
                    K
                  </div>
                  <span className="font-bold text-stone-800">You (Kabir)</span>
                </div>
                <span className="text-emerald-700 font-bold">At Pottery Studio</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center font-bold text-[10px]">
                    R
                  </div>
                  <span className="font-bold text-stone-800">Riya Sharma</span>
                </div>
                <span className="text-emerald-700 font-bold">Photo Submitted ✓</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#D4A373] text-stone-900 flex items-center justify-center font-bold text-[10px]">
                    Ro
                  </div>
                  <span className="font-bold text-stone-800">Rohan V</span>
                </div>
                <span className="text-stone-500">Arriving in 2 min</span>
              </div>
            </div>
          </div>
        </div>

        <BottomNavBar activeTab="meetups" onSelectTab={() => {}} onNavigate={onNavigate} />
      </div>
    );
  }

  /* -------------------------------------------------------------
     SCREEN 19: LOCATION MISSION
  ------------------------------------------------------------- */
  if (currentScreen === 'screen_19_location_mission') {
    return (
      <div className="flex flex-col min-h-full bg-[#FAF7F2] text-[#1E1E1E]">
        <ScreenHeader
          title="Location Mission"
          subtitle="Screen 19 · Mission Brief"
          onBack={() => onNavigate('screen_18_active_board')}
          onNavigate={onNavigate}
        />

        <div className="flex-1 p-5 space-y-4 pb-24 overflow-y-auto">
          {/* Mission Details Hero */}
          <div className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm">
            <div className="relative h-44">
              <img
                src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=700&q=80"
                alt="Pottery Studio Courtyard"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#A03E2D] uppercase tracking-wider inline-block mb-1">
                  Checkpoint #2 Challenge
                </span>
                <h3 className="text-lg font-bold font-serif leading-tight">
                  The Potter&apos;s Hidden Artisan Stamp
                </h3>
                <p className="text-xs text-white/80">Koramangala 4th Block · Pottery & Paint Studio</p>
              </div>
            </div>

            <div className="p-4 space-y-3">
              <div>
                <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Objective Instructions
                </h4>
                <p className="text-xs text-stone-700 leading-relaxed mt-1">
                  Inside the central sunlit courtyard, look for the traditional wood-fired wheel. Embedded in the wooden table base is a vintage clay seal bearing the Mysore Craftsman insignia.
                </p>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <p className="text-xs font-bold text-stone-800">Rewards on Verification:</p>
                <div className="flex items-center gap-3 mt-1.5 text-xs text-stone-600 font-medium">
                  <span className="flex items-center gap-1 text-[#A03E2D] font-bold">
                    <Award className="w-4 h-4" />
                    Clay Artisan Stamp
                  </span>
                  <span>•</span>
                  <span className="text-[#2D6A4F] font-bold">+250 XP</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={onOpenViewfinder}
                  className="w-full py-3.5 rounded-xl bg-[#A03E2D] hover:bg-[#833224] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                  <Camera className="w-4 h-4" />
                  <span>Open Camera Viewfinder</span>
                </button>

                <button
                  onClick={() => onNavigate('screen_20_mission_hint')}
                  className="w-full py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <HelpCircle className="w-4 h-4 text-amber-600" />
                  <span>Reveal Mission Clue Parchment (Screen 20)</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <BottomNavBar activeTab="meetups" onSelectTab={() => {}} onNavigate={onNavigate} />
      </div>
    );
  }

  /* -------------------------------------------------------------
     SCREEN 20: MISSION HINT
  ------------------------------------------------------------- */
  if (currentScreen === 'screen_20_mission_hint') {
    return (
      <div className="flex flex-col min-h-full bg-[#FAF7F2] text-[#1E1E1E]">
        <ScreenHeader
          title="Mission Clue"
          subtitle="Screen 20 · Parchment Hint"
          onBack={() => onNavigate('screen_19_location_mission')}
          onNavigate={onNavigate}
        />

        <div className="flex-1 p-5 space-y-4 pb-24 overflow-y-auto">
          {/* Parchment Clue Sheet */}
          <div className="bg-[#FFFDF7] rounded-3xl p-6 border-2 border-amber-200/80 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100/40 rounded-full blur-2xl pointer-events-none" />

            <div className="text-center mb-4">
              <span className="text-2xl">📜</span>
              <h3 className="font-serif font-bold text-base text-stone-900 mt-1">
                Field Scout Clue Parchment
              </h3>
              <p className="text-xs text-stone-500">Koramangala Checkpoint #2 Clue</p>
            </div>

            {/* Hint Box */}
            <div className="bg-amber-50/80 rounded-2xl p-4 border border-amber-300/60 relative">
              <p className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">
                Scout Note #4
              </p>

              {hintRevealed ? (
                <div className="space-y-2 animate-fadeIn">
                  <p className="text-sm font-serif text-stone-800 leading-relaxed font-semibold">
                    &ldquo;Don&apos;t look on the clay shelves! Walk past the red brick archway into the open kiln shed. The seal is carved onto the third support beam right next to the brass watering pitcher.&rdquo;
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold pt-2 border-t border-amber-200">
                    <Check className="w-3.5 h-3.5" />
                    <span>Clue unlocked (-10 XP penalty applied)</span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-5 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-amber-200/60 mx-auto flex items-center justify-center text-amber-800">
                    <Lock className="w-6 h-6" />
                  </div>
                  <p className="text-xs text-stone-600 max-w-xs mx-auto">
                    This detailed clue is sealed. Unlocking will deduct 10 XP from your final quest score.
                  </p>
                  <button
                    onClick={() => {
                      setHintRevealed(true);
                      onShowToast('Hint unlocked! -10 XP penalty applied.');
                    }}
                    className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs active:scale-95 transition-transform inline-flex items-center gap-1.5"
                  >
                    <Unlock className="w-3.5 h-3.5" />
                    <span>Tap to Break Seal & Reveal Hint</span>
                  </button>
                </div>
              )}
            </div>

            {/* Bangalore Trivia */}
            <div className="mt-4 pt-3 border-t border-amber-200 text-xs text-stone-600 space-y-1">
              <p className="font-bold text-stone-800">💡 Bengaluru Heritage Trivia:</p>
              <p className="italic text-[11px] leading-relaxed">
                Koramangala was once dotted with red terracotta tile kilns in the late 19th century before transforming into South Bangalore’s creative startup hotspot.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('screen_19_location_mission')}
            className="w-full py-3.5 px-4 rounded-xl bg-[#2D6A4F] hover:bg-[#23533e] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 active:scale-[0.99] transition-transform"
          >
            <span>Return to Mission Brief</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <BottomNavBar activeTab="meetups" onSelectTab={() => {}} onNavigate={onNavigate} />
      </div>
    );
  }

  /* -------------------------------------------------------------
     SCREEN 21: MISSION COMPLETED
  ------------------------------------------------------------- */
  if (currentScreen === 'screen_21_mission_completed') {
    return (
      <div className="flex flex-col min-h-full bg-[#FAF7F2] text-[#1E1E1E]">
        <ScreenHeader
          title="Mission Complete!"
          subtitle="Screen 21 · Victory & Reward"
          onBack={() => onNavigate('screen_18_active_board')}
          onNavigate={onNavigate}
        />

        <div className="flex-1 p-5 space-y-5 pb-24 overflow-y-auto text-center">
          {/* Stamp Inking Animation Container */}
          <div className="relative py-6">
            <div className="w-32 h-32 mx-auto rounded-3xl bg-white border-4 border-[#A03E2D] p-3 shadow-xl transform rotate-3 relative flex flex-col items-center justify-center">
              <div className="w-full h-full border-2 border-dashed border-[#A03E2D]/60 rounded-2xl flex flex-col items-center justify-center p-2 bg-[#FAF7F2]">
                <span className="text-3xl">🏺</span>
                <span className="text-[10px] font-black uppercase text-[#A03E2D] tracking-wider mt-1">
                  Clay Artisan
                </span>
                <span className="text-[8px] font-bold text-stone-500">Koramangala · 2026</span>
              </div>

              {/* Verified Badge */}
              <div className="absolute -bottom-3 -right-3 bg-emerald-600 text-white rounded-full p-1.5 shadow-md">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Checkpoint Verified!
            </div>
            <h2 className="text-2xl font-bold font-serif text-stone-900">
              You Inked the Clay Artisan Stamp!
            </h2>
            <p className="text-xs text-stone-600 max-w-xs mx-auto mt-1">
              Your photo match score was 99%. The stamp has been stamped permanently into your City Passport scrapbook!
            </p>
          </div>

          {/* XP & Score Card */}
          <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs grid grid-cols-2 gap-3">
            <div className="p-3 bg-emerald-50 rounded-xl text-center">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                XP Earned
              </span>
              <span className="text-xl font-black text-emerald-800">+250 XP</span>
            </div>
            <div className="p-3 bg-amber-50 rounded-xl text-center">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                Passport Total
              </span>
              <span className="text-xl font-black text-amber-800">4 / 12 Stamps</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-2 pt-2">
            <button
              onClick={() => onNavigate('screen_22_checkpoint_map')}
              className="w-full py-3.5 rounded-xl bg-[#2D6A4F] hover:bg-[#23533e] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              <span>Continue to Next Checkpoint (Screen 22)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('screen_24_passport_overview')}
              className="w-full py-3 rounded-xl bg-white border border-stone-300 hover:bg-stone-50 text-stone-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Award className="w-4 h-4 text-[#A03E2D]" />
              <span>Inspect in City Passport (Screen 24)</span>
            </button>
          </div>
        </div>

        <BottomNavBar activeTab="passport" onSelectTab={() => {}} onNavigate={onNavigate} />
      </div>
    );
  }

  /* -------------------------------------------------------------
     SCREEN 22: CHECKPOINT MAP
  ------------------------------------------------------------- */
  if (currentScreen === 'screen_22_checkpoint_map') {
    return (
      <div className="flex flex-col min-h-full bg-[#FAF7F2] text-[#1E1E1E]">
        <ScreenHeader
          title="Checkpoint Map"
          subtitle="Screen 22 · GPS Trail Progress"
          onBack={() => onNavigate('screen_18_active_board')}
          onNavigate={onNavigate}
        />

        <div className="flex-1 p-5 space-y-4 pb-24 overflow-y-auto">
          {/* Simulated Trail Map */}
          <div className="relative h-64 rounded-3xl overflow-hidden border border-stone-300 shadow-inner bg-[#EFE9DF]">
            {/* SVG Trail curve */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 256">
              <path
                d="M 50 190 Q 120 180 160 130 T 260 60"
                fill="none"
                stroke="#2D6A4F"
                strokeWidth="4"
                strokeDasharray="6 6"
              />
            </svg>

            {/* Checkpoint Pins */}
            {initialCheckpoints.map((cp, idx) => {
              const positions = [
                { top: '170px', left: '35px' },
                { top: '110px', left: '145px' },
                { top: '40px', left: '240px' },
              ][idx] || { top: '100px', left: '100px' };

              return (
                <div
                  key={cp.id}
                  style={positions}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer group"
                  onClick={() => {
                    if (cp.status === 'completed') {
                      onShowToast(`Stop #${cp.order}: ${cp.name} is completed!`);
                    } else if (cp.status === 'active') {
                      onNavigate('screen_19_location_mission');
                    } else {
                      onShowToast(`Stop #${cp.order}: Locked until previous stops are cleared.`);
                    }
                  }}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shadow-md border-2 border-white transition-transform group-hover:scale-110 ${
                      cp.status === 'completed'
                        ? 'bg-[#2D6A4F] text-white'
                        : cp.status === 'active'
                        ? 'bg-[#A03E2D] text-white animate-bounce'
                        : 'bg-stone-400 text-white'
                    }`}
                  >
                    {cp.status === 'completed' ? '✓' : cp.order}
                  </div>
                  <span className="text-[10px] font-bold bg-white/95 px-2 py-0.5 rounded shadow-xs mt-1 whitespace-nowrap">
                    {cp.name}
                  </span>
                </div>
              );
            })}

            {/* Stats Pill */}
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-full text-xs font-bold text-stone-800 shadow-sm flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>2 of 3 Checkpoints Inked</span>
            </div>
          </div>

          {/* Checkpoint list */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Trail Stops Overview
            </h4>

            {initialCheckpoints.map((cp) => (
              <div
                key={cp.id}
                className="bg-white rounded-2xl p-3.5 border border-stone-200/90 shadow-xs flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                      cp.status === 'completed'
                        ? 'bg-emerald-100 text-emerald-800'
                        : cp.status === 'active'
                        ? 'bg-amber-100 text-[#A03E2D]'
                        : 'bg-stone-100 text-stone-500'
                    }`}
                  >
                    {cp.status === 'completed' ? '✓' : cp.order}
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-stone-900">{cp.name}</h5>
                    <p className="text-[11px] text-stone-500">{cp.challenge}</p>
                  </div>
                </div>

                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    cp.status === 'completed'
                      ? 'bg-emerald-100 text-emerald-800'
                      : cp.status === 'active'
                      ? 'bg-amber-100 text-[#A03E2D]'
                      : 'bg-stone-100 text-stone-500'
                  }`}
                >
                  {cp.status}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={() => onNavigate('screen_23_adventure_completion')}
            className="w-full py-3.5 px-4 rounded-xl bg-[#2D6A4F] hover:bg-[#23533e] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 active:scale-[0.99] transition-transform"
          >
            <span>Finish Trail & View Completion Certificate</span>
            <Trophy className="w-4 h-4 text-amber-300" />
          </button>
        </div>

        <BottomNavBar activeTab="meetups" onSelectTab={() => {}} onNavigate={onNavigate} />
      </div>
    );
  }

  /* -------------------------------------------------------------
     SCREEN 23: ADVENTURE COMPLETION
  ------------------------------------------------------------- */
  return (
    <div className="flex flex-col min-h-full bg-[#FAF7F2] text-[#1E1E1E]">
      <ScreenHeader
        title="Adventure Complete"
        subtitle="Screen 23 · Victory Recap"
        onBack={() => onNavigate('screen_22_checkpoint_map')}
        onNavigate={onNavigate}
      />

      <div className="flex-1 p-5 space-y-4 pb-24 overflow-y-auto">
        {/* Certificate Card */}
        <div className="bg-[#FFFDF7] rounded-3xl p-6 border-4 border-amber-300 shadow-lg text-center relative overflow-hidden">
          <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-700 mx-auto flex items-center justify-center mb-2">
            <Trophy className="w-8 h-8" />
          </div>

          <span className="text-[10px] font-black uppercase tracking-widest text-[#A03E2D]">
            Official Bengaluru Explorer Certificate
          </span>
          <h2 className="text-xl font-bold font-serif text-stone-900 mt-1">
            Koramangala Artisan Trail Conquered!
          </h2>
          <p className="text-xs text-stone-600 mt-1 max-w-xs mx-auto">
            Awarded to Kabir Das & The Koramangala Squad on Oct 24, 2026.
          </p>

          <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-amber-200">
            <div>
              <span className="text-[10px] text-stone-500 font-bold uppercase">Stamps Inked</span>
              <p className="text-base font-black text-[#A03E2D]">3 New</p>
            </div>
            <div>
              <span className="text-[10px] text-stone-500 font-bold uppercase">XP Gained</span>
              <p className="text-base font-black text-[#2D6A4F]">+750 XP</p>
            </div>
            <div>
              <span className="text-[10px] text-stone-500 font-bold uppercase">Trail Length</span>
              <p className="text-base font-black text-stone-800">3.8 km</p>
            </div>
          </div>
        </div>

        {/* Squad Photo Memories Preview */}
        <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-stone-700">Squad Memories Captured (4)</span>
            <button
              onClick={() => onNavigate('screen_26_experience_memory')}
              className="text-xs font-bold text-[#2D6A4F] hover:underline"
            >
              Open Scrapbook
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <img
              src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=300&q=80"
              alt="Memory 1"
              className="h-20 w-full object-cover rounded-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=300&q=80"
              alt="Memory 2"
              className="h-20 w-full object-cover rounded-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=300&q=80"
              alt="Memory 3"
              className="h-20 w-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Next step buttons */}
        <div className="space-y-2 pt-2">
          <button
            onClick={() => onNavigate('screen_24_passport_overview')}
            className="w-full py-3.5 rounded-xl bg-[#2D6A4F] hover:bg-[#23533e] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <Award className="w-4 h-4 text-amber-300" />
            <span>Open City Passport & Stamp Grid (Screen 24)</span>
          </button>

          <button
            onClick={() => onNavigate('screen_26_experience_memory')}
            className="w-full py-3 rounded-xl bg-white border border-stone-300 hover:bg-stone-50 text-stone-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <span>View Polaroid Scrapbook Memory (Screen 26)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <BottomNavBar activeTab="passport" onSelectTab={() => {}} onNavigate={onNavigate} />
    </div>
  );
};
