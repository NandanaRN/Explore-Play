import React, { useState } from 'react';
import { ScreenId, PassportStamp, NotificationItem } from '../types';
import { ScreenHeader } from '../components/ScreenHeader';
import { BottomNavBar } from '../components/BottomNavBar';
import { initialPassportStamps, initialNotifications, initialSquadMembers } from '../mockData';
import {
  Award,
  BookOpen,
  MapPin,
  Calendar,
  Share2,
  Sparkles,
  ChevronRight,
  Bell,
  Clock,
  Flame,
  CheckCircle2,
  User,
  Settings,
  Heart,
  MessageCircle,
  Play,
  Volume2,
  VolumeX,
  Compass,
  Lock,
  Layers,
  Shield,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';

interface PassportProfileScreensProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
  onSelectStamp: (stamp: PassportStamp) => void;
}

export const PassportProfileScreens: React.FC<PassportProfileScreensProps> = ({
  currentScreen,
  onNavigate,
  onShowToast,
  onSelectStamp,
}) => {
  // Screen 25 filter
  const [stampCategory, setStampCategory] = useState<'all' | 'craft' | 'beverage' | 'nature' | 'heritage'>('all');

  // Screen 26 audio playing state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Screen 27 notifications list
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications);

  // Screen 28 RSVP state
  const [dropRsvpState, setDropRsvpState] = useState(false);

  // Screen 30 Settings toggles
  const [pushPings, setPushPings] = useState(true);
  const [hapticFeedback, setHapticFeedback] = useState(true);
  const [highAccuracyGps, setHighAccuracyGps] = useState(true);
  const [autoSyncSquad, setAutoSyncSquad] = useState(true);

  const markAllNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
    onShowToast('All notifications marked as read.');
  };

  /* -------------------------------------------------------------
     SCREEN 24: CITY PASSPORT OVERVIEW
  ------------------------------------------------------------- */
  if (currentScreen === 'screen_24_passport_overview') {
    return (
      <div className="flex flex-col min-h-full bg-[#FAF7F2] text-[#1E1E1E]">
        <ScreenHeader
          title="City Passport"
          subtitle="Screen 24 · Urban Scrapbook"
          cityBadge="Bengaluru Edition"
          onNavigate={onNavigate}
        />

        <div className="flex-1 p-5 space-y-5 pb-24 overflow-y-auto">
          {/* Vintage Passport Booklet Cover / Card */}
          <div className="bg-[#2B1E1A] text-[#F3ECE2] rounded-3xl p-6 shadow-xl border-4 border-[#3F2E28] relative overflow-hidden">
            {/* Embossed gold foil seal */}
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-amber-300/40 flex items-center justify-center opacity-60">
              <span className="text-xl">🏛️</span>
            </div>

            <div className="flex items-center gap-2 text-amber-300/80 text-[10px] uppercase font-mono tracking-widest mb-3">
              <span>OFFICIAL EXPLORER PASSPORT</span>
              <span>•</span>
              <span>EST. 2026</span>
            </div>

            <h2 className="text-2xl font-serif font-black tracking-tight text-amber-200">
              BENGALURU
            </h2>
            <p className="text-xs text-amber-100/70 font-mono tracking-wide">
              PASSPORT NO. BLR-2026-KD-089
            </p>

            <div className="mt-6 pt-4 border-t border-amber-900/60 grid grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <span className="text-amber-400/60 block text-[10px]">EXPLORER</span>
                <span className="font-bold text-white text-sm">Kabir Das</span>
              </div>
              <div>
                <span className="text-amber-400/60 block text-[10px]">TIER LEVEL</span>
                <span className="font-bold text-amber-300 text-sm">Level 4 Artisan</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between bg-black/30 rounded-2xl p-3 border border-amber-900/40">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-bold font-sans">4 of 12 City Stamps Inked</span>
              </div>
              <span className="text-[11px] font-mono text-amber-300">33%</span>
            </div>
          </div>

          {/* Recent Inked Stamps Carousel */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                Recent Inked Stamps
              </h3>
              <button
                onClick={() => onNavigate('screen_25_stamp_collection')}
                className="text-xs font-bold text-[#A03E2D] hover:underline flex items-center gap-1"
              >
                <span>View Full Collection (Screen 25)</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {initialPassportStamps.slice(0, 4).map((stamp) => (
                <div
                  key={stamp.id}
                  onClick={() => onSelectStamp(stamp)}
                  className="bg-white rounded-2xl p-4 border border-stone-200/90 shadow-xs hover:border-[#A03E2D] cursor-pointer transition-all text-center relative group"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF7F2] border-2 border-dashed border-[#A03E2D]/50 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                    {stamp.icon}
                  </div>
                  <h4 className="font-bold text-xs text-stone-900 mt-2">{stamp.title}</h4>
                  <p className="text-[10px] text-stone-500">{stamp.neighborhood}</p>
                  <span className="text-[9px] font-mono text-stone-400 mt-1 block">
                    {stamp.unlockedDate || 'Inked Oct 2026'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Memory Scrapbook Card */}
          <div
            onClick={() => onNavigate('screen_26_experience_memory')}
            className="bg-white rounded-2xl p-4 border border-stone-200/90 shadow-xs hover:border-[#2D6A4F] cursor-pointer transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-xl shrink-0">
                📸
              </div>
              <div>
                <h4 className="font-bold text-xs text-stone-900">
                  Last Weekend Polaroid Memory
                </h4>
                <p className="text-[11px] text-stone-500">
                  Pottery Studio with Riya, Rohan & Ananya
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-stone-400" />
          </div>
        </div>

        <BottomNavBar activeTab="passport" onSelectTab={() => {}} onNavigate={onNavigate} />
      </div>
    );
  }

  /* -------------------------------------------------------------
     SCREEN 25: STAMP & BADGE COLLECTION
  ------------------------------------------------------------- */
  if (currentScreen === 'screen_25_stamp_collection') {
    const filteredStamps = initialPassportStamps.filter((s) => {
      if (stampCategory === 'all') return true;
      return s.category === stampCategory;
    });

    return (
      <div className="flex flex-col min-h-full bg-[#FAF7F2] text-[#1E1E1E]">
        <ScreenHeader
          title="Stamp Collection"
          subtitle="Screen 25 · Tactile Badges"
          onBack={() => onNavigate('screen_24_passport_overview')}
          onNavigate={onNavigate}
        />

        <div className="flex-1 p-5 space-y-4 pb-24 overflow-y-auto">
          {/* Category Filter Pills */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: 'all', label: 'All Stamps' },
              { id: 'craft', label: 'Craft & Art' },
              { id: 'beverage', label: 'Chai & Cafes' },
              { id: 'nature', label: 'Parks & Trails' },
              { id: 'heritage', label: 'Heritage Sites' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setStampCategory(cat.id as any)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  stampCategory === cat.id
                    ? 'bg-[#A03E2D] text-white shadow-xs'
                    : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Stamps Grid */}
          <div className="grid grid-cols-2 gap-3.5">
            {filteredStamps.map((stamp) => (
              <div
                key={stamp.id}
                onClick={() => onSelectStamp(stamp)}
                className="bg-white rounded-3xl p-4 border border-stone-200/90 shadow-xs hover:border-[#A03E2D] hover:shadow-md cursor-pointer transition-all flex flex-col items-center text-center relative group"
              >
                {/* Stamp visual */}
                <div className="w-20 h-20 rounded-full border-3 border-dashed border-[#A03E2D]/70 bg-[#FAF7F2] flex flex-col items-center justify-center p-2 group-hover:scale-105 transition-transform shadow-inner">
                  <span className="text-3xl">{stamp.icon}</span>
                </div>

                <h4 className="font-bold text-xs text-stone-900 mt-2.5">{stamp.title}</h4>
                <p className="text-[11px] text-stone-500">{stamp.neighborhood}</p>
                <span className="text-[9px] font-bold text-[#2D6A4F] bg-emerald-50 px-2 py-0.5 rounded-full mt-1.5">
                  Verified Inked ✓
                </span>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-center">
            <Sparkles className="w-5 h-5 text-amber-600 mx-auto mb-1" />
            <p className="text-xs font-bold text-amber-900">8 Secret Stamps Undiscovered</p>
            <p className="text-[11px] text-amber-700 mt-0.5">
              Explore Malleshwaram, Whitefield, and Lalbagh to complete your full 12-stamp Bengaluru set!
            </p>
          </div>
        </div>

        <BottomNavBar activeTab="passport" onSelectTab={() => {}} onNavigate={onNavigate} />
      </div>
    );
  }

  /* -------------------------------------------------------------
     SCREEN 26: EXPERIENCE MEMORY (SCRAPBOOK POLAROID)
  ------------------------------------------------------------- */
  if (currentScreen === 'screen_26_experience_memory') {
    return (
      <div className="flex flex-col min-h-full bg-[#FAF7F2] text-[#1E1E1E]">
        <ScreenHeader
          title="Memory Scrapbook"
          subtitle="Screen 26 · Polaroid Record"
          onBack={() => onNavigate('screen_24_passport_overview')}
          onNavigate={onNavigate}
        />

        <div className="flex-1 p-5 space-y-5 pb-24 overflow-y-auto">
          {/* Polaroid Frame */}
          <div className="bg-white rounded-3xl p-4 pb-6 border border-stone-300 shadow-md transform rotate-1 transition-transform hover:rotate-0">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=700&q=80"
                alt="Memory at Pottery Studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[10px] font-bold px-2 py-0.5 rounded-full text-stone-800 shadow">
                Oct 24, 2026
              </div>
            </div>

            {/* Handwritten style caption */}
            <div className="mt-4 px-1">
              <h3 className="font-serif font-bold text-base text-stone-900">
                &ldquo;Clay, laugh attacks, and masala chai in Koramangala!&rdquo;
              </h3>
              <p className="text-xs text-stone-500 font-sans mt-0.5">
                With Riya Sharma, Rohan V & Ananya Rao
              </p>
            </div>
          </div>

          {/* Audio snippet player */}
          <div className="bg-white rounded-2xl p-4 border border-stone-200/90 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setIsPlayingAudio(!isPlayingAudio);
                  onShowToast(isPlayingAudio ? 'Paused ambient audio' : 'Playing ambient cafe pottery soundbite!');
                }}
                className="w-10 h-10 rounded-full bg-[#A03E2D] text-white flex items-center justify-center shadow-xs active:scale-95 transition-transform"
              >
                {isPlayingAudio ? <VolumeX className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </button>
              <div>
                <p className="text-xs font-bold text-stone-900">Ambient Sound Clip</p>
                <p className="text-[11px] text-stone-500">Courtyard kiln & potter&apos;s wheel (0:24)</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <span className="w-1 h-3 bg-[#A03E2D] rounded-full animate-pulse" />
              <span className="w-1 h-5 bg-[#A03E2D] rounded-full animate-pulse delay-75" />
              <span className="w-1 h-2 bg-[#A03E2D] rounded-full animate-pulse delay-150" />
            </div>
          </div>

          {/* Squad Comments */}
          <div className="bg-white rounded-2xl p-4 border border-stone-200/90 shadow-xs space-y-3">
            <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Squad Comments
            </h4>

            <div className="space-y-2.5">
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                  R
                </div>
                <div className="bg-stone-50 rounded-2xl p-2.5 flex-1 text-xs">
                  <p className="font-bold text-stone-800">Riya Sharma</p>
                  <p className="text-stone-600">My terracotta mug actually survived the firing oven!! 😂🔥</p>
                </div>
              </div>

              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#D4A373] text-stone-900 flex items-center justify-center font-bold text-[10px] shrink-0">
                  Ro
                </div>
                <div className="bg-stone-50 rounded-2xl p-2.5 flex-1 text-xs">
                  <p className="font-bold text-stone-800">Rohan V</p>
                  <p className="text-stone-600">The filter coffee stop after this was peak perfection.</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => onShowToast('Memory polaroid shared to Instagram Stories!')}
            className="w-full py-3.5 px-4 rounded-xl bg-[#2D6A4F] hover:bg-[#23533e] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 active:scale-[0.99] transition-transform"
          >
            <Share2 className="w-4 h-4" />
            <span>Share Memory Polaroid</span>
          </button>
        </div>

        <BottomNavBar activeTab="passport" onSelectTab={() => {}} onNavigate={onNavigate} />
      </div>
    );
  }

  /* -------------------------------------------------------------
     SCREEN 27: NOTIFICATIONS & SQUAD PINGS
  ------------------------------------------------------------- */
  if (currentScreen === 'screen_27_notifications') {
    return (
      <div className="flex flex-col min-h-full bg-[#FAF7F2] text-[#1E1E1E]">
        <ScreenHeader
          title="Notifications"
          subtitle="Screen 27 · Squad Pings"
          onBack={() => onNavigate('screen_05_discover_home')}
          onNavigate={onNavigate}
        />

        <div className="flex-1 p-5 space-y-4 pb-24 overflow-y-auto">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Recent Alerts & Pokes
            </span>
            <button
              onClick={markAllNotificationsRead}
              className="text-xs font-bold text-[#2D6A4F] hover:underline"
            >
              Mark all read
            </button>
          </div>

          <div className="space-y-2.5">
            {notifications.map((n) => (
              <div
                key={n.id}
                onClick={() => {
                  if (n.screenLink) onNavigate(n.screenLink);
                }}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  n.unread
                    ? 'bg-white border-[#A03E2D]/40 shadow-xs ring-1 ring-[#A03E2D]/10'
                    : 'bg-white/80 border-stone-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-stone-100 flex items-center justify-center text-lg shrink-0">
                    {n.type === 'squad_ping'
                      ? '👋'
                      : n.type === 'mystery_drop'
                      ? '🎁'
                      : n.type === 'stamp_unlocked'
                      ? '🏺'
                      : '🧭'}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs text-stone-900 truncate">{n.title}</h4>
                      <span className="text-[10px] text-stone-400 font-medium">{n.timestamp}</span>
                    </div>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">{n.body}</p>
                    {n.screenLink && (
                      <span className="text-[11px] font-bold text-[#2D6A4F] flex items-center gap-1 mt-1.5">
                        <span>Tap to jump to screen</span>
                        <ChevronRight className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Direct link to Mystery Weekend Drop */}
          <button
            onClick={() => onNavigate('screen_28_mystery_drop')}
            className="w-full p-4 rounded-2xl bg-gradient-to-r from-purple-800 to-indigo-900 text-white font-bold text-xs flex items-center justify-between shadow-md"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">✨</span>
              <div className="text-left">
                <p className="font-bold text-xs">Mystery Weekend Drop Active!</p>
                <p className="text-[10px] text-purple-200">Malleshwaram Heritage Clue</p>
              </div>
            </div>
            <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full">Open Screen 28 →</span>
          </button>
        </div>

        <BottomNavBar activeTab="discover" onSelectTab={() => {}} onNavigate={onNavigate} />
      </div>
    );
  }

  /* -------------------------------------------------------------
     SCREEN 28: MYSTERY WEEKEND DROP
  ------------------------------------------------------------- */
  if (currentScreen === 'screen_28_mystery_drop') {
    return (
      <div className="flex flex-col min-h-full bg-[#1A162B] text-white">
        <ScreenHeader
          title="Secret Drop"
          subtitle="Screen 28 · 48h Mystery Drop"
          onBack={() => onNavigate('screen_27_notifications')}
          onNavigate={onNavigate}
        />

        <div className="flex-1 p-5 space-y-4 pb-24 overflow-y-auto">
          {/* Neon Purple Mystery Card */}
          <div className="bg-gradient-to-b from-purple-900/90 to-indigo-950 p-6 rounded-3xl border border-purple-500/30 shadow-2xl relative overflow-hidden text-center">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold mb-3 border border-purple-400/30">
              <Clock className="w-3.5 h-3.5" />
              <span>Expires in 18 hrs 42 mins</span>
            </div>

            <div className="w-20 h-20 mx-auto rounded-3xl bg-purple-600/30 border-2 border-purple-400 flex items-center justify-center text-4xl shadow-inner mb-3">
              🗝️
            </div>

            <h2 className="text-2xl font-serif font-black text-amber-200">
              Malleshwaram Rooftop Sitar & Kapi
            </h2>
            <p className="text-xs text-purple-200/80 max-w-xs mx-auto mt-1">
              A private 100-year-old heritage bungalow roof open only this Sunday sunrise for 20 explorers.
            </p>

            <div className="mt-4 pt-4 border-t border-purple-800/60 grid grid-cols-2 gap-3 text-xs">
              <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
                <span className="text-purple-300 text-[10px] block font-bold">REMAINING SLOTS</span>
                <span className="text-base font-black text-white">3 of 20 Left</span>
              </div>
              <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
                <span className="text-purple-300 text-[10px] block font-bold">STAMP VALUE</span>
                <span className="text-base font-black text-amber-300">Gold Inked Seal</span>
              </div>
            </div>
          </div>

          {/* Mystery Details */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-2 text-xs">
            <h4 className="font-bold text-purple-300 uppercase tracking-wider text-[11px]">
              Drop Criteria
            </h4>
            <p className="text-purple-100/90 leading-relaxed">
              • Must hold at least Level 3 Explorer Passport
            </p>
            <p className="text-purple-100/90 leading-relaxed">
              • Dress code: Traditional handloom or earthy pastels
            </p>
            <p className="text-purple-100/90 leading-relaxed">
              • Exact GPS coordinates released 2 hours before sunrise
            </p>
          </div>

          {/* Action RSVP */}
          <button
            onClick={() => {
              setDropRsvpState(!dropRsvpState);
              onShowToast(
                dropRsvpState
                  ? 'RSVP spot released.'
                  : 'Mystery Drop RSVP confirmed! GPS coordinates will unlock at 5:00 AM.'
              );
            }}
            className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform ${
              dropRsvpState
                ? 'bg-emerald-600 text-white'
                : 'bg-amber-400 hover:bg-amber-300 text-purple-950'
            }`}
          >
            {dropRsvpState ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>RSVP Reserved ✓ (Tap to Cancel)</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>RSVP Secret Spot (Free)</span>
              </>
            )}
          </button>
        </div>

        <BottomNavBar activeTab="discover" onSelectTab={() => {}} onNavigate={onNavigate} />
      </div>
    );
  }

  /* -------------------------------------------------------------
     SCREEN 29: EXPLORER PROFILE
  ------------------------------------------------------------- */
  if (currentScreen === 'screen_29_profile') {
    return (
      <div className="flex flex-col min-h-full bg-[#FAF7F2] text-[#1E1E1E]">
        <ScreenHeader
          title="Explorer Profile"
          subtitle="Screen 29 · Kabir Das"
          onBack={() => onNavigate('screen_24_passport_overview')}
          onNavigate={onNavigate}
        />

        <div className="flex-1 p-5 space-y-5 pb-24 overflow-y-auto">
          {/* User Card */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200/90 shadow-sm text-center relative">
            <div className="w-20 h-20 mx-auto rounded-full bg-[#A03E2D] text-white flex items-center justify-center text-3xl font-serif font-black shadow-md border-4 border-[#FAF7F2]">
              K
            </div>

            <h3 className="font-serif font-bold text-lg text-stone-900 mt-2">Kabir Das</h3>
            <p className="text-xs text-stone-500 font-mono">@kabir_explores · Bengaluru, KA</p>

            <p className="text-xs text-stone-600 mt-2 max-w-xs mx-auto italic">
              &ldquo;Curating weekend trails for pottery, artisanal brews, and Bangalore&apos;s heritage trees.&rdquo;
            </p>

            <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-stone-100">
              <div>
                <span className="text-[10px] font-bold text-stone-400 uppercase">Stamps</span>
                <p className="text-base font-black text-[#A03E2D]">4</p>
              </div>
              <div>
                <span className="text-[10px] font-bold text-stone-400 uppercase">Saved Spots</span>
                <p className="text-base font-black text-[#2D6A4F]">14</p>
              </div>
              <div>
                <span className="text-[10px] font-bold text-stone-400 uppercase">Squads</span>
                <p className="text-base font-black text-stone-800">3</p>
              </div>
            </div>
          </div>

          {/* Quick Shortcuts */}
          <div className="space-y-2">
            <button
              onClick={() => onNavigate('screen_24_passport_overview')}
              className="w-full p-3.5 bg-white rounded-2xl border border-stone-200 flex items-center justify-between text-xs font-bold text-stone-800 hover:bg-stone-50 shadow-xs"
            >
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-[#A03E2D]" />
                <span>Inspect City Passport Scrapbook</span>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </button>

            <button
              onClick={() => onNavigate('screen_09_saved_discoveries')}
              className="w-full p-3.5 bg-white rounded-2xl border border-stone-200 flex items-center justify-between text-xs font-bold text-stone-800 hover:bg-stone-50 shadow-xs"
            >
              <div className="flex items-center gap-2.5">
                <Heart className="w-4 h-4 text-[#A03E2D]" />
                <span>Saved Venues & Bucketlist</span>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </button>

            <button
              onClick={() => onNavigate('screen_30_settings')}
              className="w-full p-3.5 bg-white rounded-2xl border border-stone-200 flex items-center justify-between text-xs font-bold text-stone-800 hover:bg-stone-50 shadow-xs"
            >
              <div className="flex items-center gap-2.5">
                <Settings className="w-4 h-4 text-stone-600" />
                <span>App & Squad Settings (Screen 30)</span>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </button>
          </div>
        </div>

        <BottomNavBar activeTab="profile" onSelectTab={() => {}} onNavigate={onNavigate} />
      </div>
    );
  }

  /* -------------------------------------------------------------
     SCREEN 30: APP & SQUAD SETTINGS
  ------------------------------------------------------------- */
  return (
    <div className="flex flex-col min-h-full bg-[#FAF7F2] text-[#1E1E1E]">
      <ScreenHeader
        title="Settings"
        subtitle="Screen 30 · App Preferences"
        onBack={() => onNavigate('screen_29_profile')}
        onNavigate={onNavigate}
      />

      <div className="flex-1 p-5 space-y-5 pb-24 overflow-y-auto">
        {/* Toggle options */}
        <div className="bg-white rounded-3xl p-5 border border-stone-200/90 shadow-xs space-y-4">
          <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
            Exploration & Squad Controls
          </h4>

          {/* Toggle 1 */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-stone-900">Squad Pings & Pokes</p>
              <p className="text-[11px] text-stone-500">Allow friends to nudge you for voting</p>
            </div>
            <button
              onClick={() => {
                setPushPings(!pushPings);
                onShowToast(`Squad pings ${!pushPings ? 'enabled' : 'disabled'}`);
              }}
              className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                pushPings ? 'bg-[#2D6A4F]' : 'bg-stone-300'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-xs transition-transform ${
                  pushPings ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Toggle 2 */}
          <div className="flex items-center justify-between pt-2 border-t border-stone-100">
            <div>
              <p className="text-xs font-bold text-stone-900">Tactile Inked Stamp Haptics</p>
              <p className="text-[11px] text-stone-500">Simulate rubber stamp inking vibration</p>
            </div>
            <button
              onClick={() => {
                setHapticFeedback(!hapticFeedback);
                onShowToast(`Stamp haptics ${!hapticFeedback ? 'enabled' : 'disabled'}`);
              }}
              className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                hapticFeedback ? 'bg-[#2D6A4F]' : 'bg-stone-300'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-xs transition-transform ${
                  hapticFeedback ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Toggle 3 */}
          <div className="flex items-center justify-between pt-2 border-t border-stone-100">
            <div>
              <p className="text-xs font-bold text-stone-900">High-Precision Neighborhood GPS</p>
              <p className="text-[11px] text-stone-500">Auto-unlock missions when within 50m</p>
            </div>
            <button
              onClick={() => {
                setHighAccuracyGps(!highAccuracyGps);
                onShowToast(`High-accuracy GPS ${!highAccuracyGps ? 'enabled' : 'disabled'}`);
              }}
              className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                highAccuracyGps ? 'bg-[#2D6A4F]' : 'bg-stone-300'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-xs transition-transform ${
                  highAccuracyGps ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Prototype Reset / Data Controls */}
        <div className="bg-white rounded-3xl p-5 border border-stone-200/90 shadow-xs space-y-3">
          <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
            Prototype Demo Controls
          </h4>
          <p className="text-xs text-stone-600">
            Reset onboarding flow, clear simulated Instagram imported reels, or jump back to Screen 01 Welcome.
          </p>
          <button
            onClick={() => {
              onNavigate('screen_01_welcome');
              onShowToast('Prototype reset to Screen 01 Welcome!');
            }}
            className="w-full py-2.5 rounded-xl border border-stone-300 text-stone-700 font-bold text-xs hover:bg-stone-50 transition-colors"
          >
            Restart Prototype from Screen 01 (Welcome)
          </button>
        </div>

        <div className="text-center text-[11px] text-stone-400 font-mono">
          Explore & Play · Bengaluru Edition v1.0.4 Prototype
        </div>
      </div>

      <BottomNavBar activeTab="profile" onSelectTab={() => {}} onNavigate={onNavigate} />
    </div>
  );
};
