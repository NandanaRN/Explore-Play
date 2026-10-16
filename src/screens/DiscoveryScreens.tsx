import React, { useState } from 'react';
import { ScreenId, SpotItem } from '../types';
import { ScreenHeader } from '../components/ScreenHeader';
import { BottomNavBar } from '../components/BottomNavBar';
import { curatedSpots } from '../mockData';
import {
  Search,
  Sparkles,
  MapPin,
  Clock,
  Star,
  Heart,
  Share2,
  Bookmark,
  ChevronRight,
  Plus,
  Compass,
  Coffee,
  Palette,
  Music,
  CheckCircle2,
  Check,
  ExternalLink,
  ShieldCheck,
  Zap,
  Gift,
  X,
  SlidersHorizontal,
  Flame,
  Camera,
} from 'lucide-react';

interface DiscoveryProps {
  onNavigate: (screenId: ScreenId) => void;
  onSetToast: (msg: string) => void;
  savedSpots: string[];
  onToggleSaveSpot: (spotId: string) => void;
}

export const Screen05DiscoverHome: React.FC<DiscoveryProps> = ({
  onNavigate,
  onSetToast,
  savedSpots,
  onToggleSaveSpot,
}) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'All', label: 'All Vibes', icon: '✨' },
    { id: 'Food', label: 'Food & Cafés', icon: '☕' },
    { id: 'Craft', label: 'Art & Crafts', icon: '🎨' },
    { id: 'Music', label: 'Live Music', icon: '🎷' },
    { id: 'Trails', label: 'Secret Alleys', icon: '🌿' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#FFFDF9] text-stone-900 pb-0">
      <ScreenHeader
        cityBadge="Bengaluru"
        showBell={true}
        showProfile={true}
        onNavigateScreen={onNavigate}
      />

      <div className="flex-1 px-4 py-3 space-y-4 overflow-y-auto no-scrollbar">
        {/* Top Explorer Greeting Card */}
        <div className="bg-[#FAF5ED] rounded-3xl p-4 border border-[#ECE0D0] relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-200/70 px-2.5 py-0.5 rounded-full">
              Urban Scrapbook #42
            </span>
            <span className="text-[11px] font-bold text-[#E05A3E] bg-[#FFF0EB] border border-[#FCDCCE] px-2 py-0.5 rounded-full">
              NEW
            </span>
          </div>

          <h2 className="text-2xl font-extrabold text-stone-900 tracking-tight mt-2 leading-tight">
            Hey, adventurer! ☀️
          </h2>
          <p className="text-xs text-stone-600 font-medium">
            Ready for your next city quest?
          </p>

          <div className="mt-2.5 flex items-center gap-1.5 text-xs text-stone-700 font-semibold">
            <MapPin className="w-3.5 h-3.5 text-[#E05A3E]" />
            <span>Koramangala, Bengaluru</span>
            <span className="text-stone-400 font-normal">· 24 quests unlocked</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Find cafés, workshops, hidden gems..."
            className="w-full pl-10 pr-4 py-2.5 bg-white rounded-2xl border border-stone-200/90 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B4A]/30 focus:border-[#FF6B4A] shadow-xs"
          />
        </div>

        {/* AI City Scout Active Notification Banner */}
        <div className="bg-gradient-to-r from-[#EDE9FE] via-[#F5F3FF] to-[#FFF1F2] rounded-3xl p-4 border border-[#DDD6FE] shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between text-[11px] font-bold text-purple-900 mb-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              AI City Scout · Active
            </span>
            <span className="text-purple-700 font-mono text-[10px]">📍 Koramangala</span>
          </div>

          <h3 className="font-extrabold text-stone-900 text-sm mt-1">
            What's new around your spot?
          </h3>
          <p className="text-[11px] text-stone-600 mt-0.5 leading-relaxed">
            Found 4 creative pottery corners & cozy secret rooftop cafés matched to your crew's weekend vibe.
          </p>

          <div className="mt-3 flex items-center justify-between">
            <button
              onClick={() => onNavigate('screen_06_swipe_discovery')}
              className="px-3.5 py-1.5 rounded-xl bg-[#FF6B4A] hover:bg-[#E85533] text-white text-xs font-bold shadow-xs transition-transform active:scale-95"
            >
              Check for new finds →
            </button>
            <div className="flex -space-x-1.5">
              <span className="w-6 h-6 rounded-full bg-amber-300 border-2 border-white flex items-center justify-center text-[10px]">☕</span>
              <span className="w-6 h-6 rounded-full bg-purple-300 border-2 border-white flex items-center justify-center text-[10px]">🎨</span>
              <span className="w-6 h-6 rounded-full bg-emerald-300 border-2 border-white flex items-center justify-center text-[10px]">🌿</span>
            </div>
          </div>
        </div>

        {/* Quick Vibe Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 text-xs">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap font-bold transition-all flex items-center gap-1 ${
                activeCategory === c.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white border border-stone-200 text-stone-700 hover:border-stone-400'
              }`}
            >
              <span>{c.icon}</span>
              <span>{c.label}</span>
            </button>
          ))}
        </div>

        {/* Weekend Mystery Drop Teaser Banner */}
        <div className="bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] rounded-3xl p-4 border border-[#FCD34D] shadow-xs relative">
          <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-amber-900">
            <span>Weekend Mystery Drop</span>
            <span className="bg-amber-900 text-amber-100 px-2 py-0.5 rounded-full font-mono">
              02d : 14h
            </span>
          </div>

          <h3 className="font-extrabold text-stone-900 text-sm mt-1.5">
            Something unexpected is waiting...
          </h3>
          <p className="text-[11px] text-stone-700 mt-0.5 leading-relaxed">
            Solve the clue before Friday 6 PM to unlock 2x passport points & a secret café perk!
          </p>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-[11px] text-amber-900 font-semibold">
              Clue reveals in Koramangala
            </span>
            <button
              onClick={() => onNavigate('screen_28_mystery_weekend_drop')}
              className="px-3 py-1 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-300 text-xs font-bold transition-colors shadow-xs"
            >
              View Clue 🧭
            </button>
          </div>
        </div>

        {/* Main Spots Feed: This weekend around you */}
        <div className="space-y-3 pt-1">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-stone-900 text-base tracking-tight flex items-center gap-1.5">
              <span>This weekend around you</span>
              <span className="bg-[#FFF0EB] text-[#E05A3E] text-[10px] font-black px-1.5 py-0.5 rounded uppercase">
                Hot
              </span>
            </h3>
            <button
              onClick={() => onNavigate('screen_06_swipe_discovery')}
              className="text-xs font-bold text-[#E05A3E] hover:underline"
            >
              See all (18) →
            </button>
          </div>

          {/* Card 1: Pottery & Paint Studio */}
          <div className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="relative h-44">
              <img
                src={curatedSpots[0].imageUrl}
                alt={curatedSpots[0].title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-bold text-stone-900 shadow-xs">
                Popular this Sat
              </div>

              {/* Heart Button */}
              <button
                onClick={() => onToggleSaveSpot(curatedSpots[0].id)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-stone-700 shadow-xs hover:scale-105 active:scale-90 transition-transform"
              >
                <Heart
                  className={`w-4 h-4 ${
                    savedSpots.includes(curatedSpots[0].id)
                      ? 'fill-[#C84B31] text-[#C84B31]'
                      : 'text-stone-700'
                  }`}
                />
              </button>

              <div className="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur-xs text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold font-mono">
                {curatedSpots[0].spend} / person
              </div>
            </div>

            <div className="p-4 space-y-2.5">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 text-base leading-tight">
                    {curatedSpots[0].title}
                  </h4>
                  <p className="text-xs text-stone-500 font-medium mt-0.5">
                    {curatedSpots[0].area} · {curatedSpots[0].duration} quest
                  </p>
                </div>
                <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200 text-xs font-bold text-amber-900">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.9</span>
                  <span className="text-[10px] text-stone-400 font-normal">(128)</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-amber-700 font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-400" /> 6 spots remaining
                </span>

                <button
                  onClick={() => onNavigate('screen_08_activity_details')}
                  className="px-4 py-1.5 rounded-xl bg-[#FF6B4A] hover:bg-[#E85533] text-white text-xs font-bold shadow-xs transition-colors"
                >
                  Book Spot
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Hidden Heritage Courtyard */}
          <div className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="relative h-40">
              <img
                src={curatedSpots[1].imageUrl}
                alt={curatedSpots[1].title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-bold text-emerald-800 shadow-xs">
                Peaceful Gem
              </div>

              <button
                onClick={() => onToggleSaveSpot(curatedSpots[1].id)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-stone-700 shadow-xs hover:scale-105 active:scale-90 transition-transform"
              >
                <Heart
                  className={`w-4 h-4 ${
                    savedSpots.includes(curatedSpots[1].id)
                      ? 'fill-[#C84B31] text-[#C84B31]'
                      : 'text-stone-700'
                  }`}
                />
              </button>

              <div className="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur-xs text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold font-mono">
                {curatedSpots[1].spend}
              </div>
            </div>

            <div className="p-4 space-y-2.5">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 text-sm leading-tight">
                    {curatedSpots[1].title}
                  </h4>
                  <p className="text-xs text-stone-500 font-medium mt-0.5">
                    {curatedSpots[1].area}
                  </p>
                </div>
                <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200 text-xs font-bold text-amber-900">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.8</span>
                  <span className="text-[10px] text-stone-400 font-normal">(94)</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-stone-500 font-medium">
                  • Passport stamp ready
                </span>

                <button
                  onClick={() => onNavigate('screen_08_activity_details')}
                  className="px-4 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold shadow-xs transition-colors"
                >
                  Explore Trail
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info banner */}
        <div className="p-4 bg-[#FAF5EB] rounded-2xl border border-[#EBDCC8] text-center space-y-1 my-2">
          <div className="w-8 h-8 rounded-full bg-amber-400 text-stone-900 font-bold mx-auto flex items-center justify-center text-xs">
            ✨
          </div>
          <div className="font-bold text-xs text-stone-900">
            Keep exploring, keep playing!
          </div>
          <p className="text-[11px] text-stone-500">
            Your city scrapbook updates automatically with every verified stop and meetup.
          </p>
        </div>
      </div>

      <BottomNavBar
        activeTab="discover"
        onSelectTab={() => {}}
        onNavigateScreen={onNavigate}
      />
    </div>
  );
};

export const Screen06SwipeDiscovery: React.FC<DiscoveryProps> = ({
  onNavigate,
  onSetToast,
}) => {
  const [cardIndex, setCardIndex] = useState(0);

  const spot = curatedSpots[cardIndex % curatedSpots.length];

  const handlePass = () => {
    setCardIndex((prev) => prev + 1);
    onSetToast('Passed · Next suggestion queued');
  };

  const handleSurprise = () => {
    setCardIndex((prev) => (prev + 2) % curatedSpots.length);
    onSetToast('🎲 Surprise gem unlocked!');
  };

  const handleInterested = () => {
    // Triggers Match Result! (Screen 07)
    onNavigate('screen_07_match_result');
  };

  return (
    <div className="flex-1 flex flex-col bg-[#FFFDF9] text-stone-900 pb-0">
      <ScreenHeader
        title="Swipe Discovery"
        cityBadge="Bengaluru"
        onBack={() => onNavigate('screen_05_discover_home')}
        showBell={true}
        showProfile={true}
        onNavigateScreen={onNavigate}
      />

      <div className="flex-1 px-4 py-3 flex flex-col justify-between overflow-y-auto no-scrollbar">
        {/* Title & Curated text */}
        <div>
          <h2 className="text-2xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Your next little adventure
          </h2>
          <p className="text-xs text-stone-500 font-medium">
            Curated for sunny afternoons in Bengaluru
          </p>

          {/* Card Deck Progress indicators */}
          <div className="flex items-center gap-1.5 mt-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-1 rounded-full flex-1 transition-all ${
                  i === cardIndex % 5
                    ? 'bg-[#E05A3E]'
                    : i < cardIndex % 5
                    ? 'bg-amber-300'
                    : 'bg-stone-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Interactive Swipe Card */}
        <div className="my-3 bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md relative flex flex-col justify-between">
          {/* Card Hero Image */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={spot.imageUrl}
              alt={spot.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

            {/* Top Tag Badges */}
            <div className="absolute top-3 left-3 bg-purple-100/95 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-bold text-purple-900 shadow-xs">
              {spot.category}
            </div>

            <div className="absolute top-3 right-3 bg-amber-400 text-stone-950 px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wide shadow-xs">
              98% loved
            </div>

            {/* Info Overlay at Bottom of Photo */}
            <div className="absolute bottom-3 left-4 right-4 text-white">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight drop-shadow-md leading-tight">
                    {spot.title}
                  </h3>
                  <p className="text-xs text-stone-200 font-medium drop-shadow-sm mt-0.5">
                    {spot.area} · {spot.spend} · {spot.duration}
                  </p>
                </div>
                <div className="bg-white text-stone-900 px-2 py-0.5 rounded-lg font-bold text-xs flex items-center gap-1 shadow-md">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{spot.rating}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card Body & Why Recommendation */}
          <div className="p-4 space-y-3 bg-[#FFFDFB]">
            {/* Quick status pills */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" /> 4 slots open this Saturday
              </span>
              <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full">
                Walk-ins welcome
              </span>
            </div>

            {/* Why this recommendation box */}
            <div className="bg-[#FAF5ED] rounded-2xl p-3 border border-[#EFE4D4] text-xs space-y-1">
              <div className="font-extrabold text-stone-900 text-xs flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#E05A3E]" />
                <span>Why this recommendation?</span>
              </div>
              <p className="text-[11px] text-stone-600 leading-relaxed">
                {spot.whyRec}
              </p>
            </div>

            {/* Social Shortlist bar */}
            <div className="flex items-center justify-between pt-1 border-t border-stone-100">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  <span className="w-5 h-5 rounded-full bg-amber-400 border border-white text-[9px] font-bold flex items-center justify-center">A</span>
                  <span className="w-5 h-5 rounded-full bg-purple-400 border border-white text-[9px] font-bold flex items-center justify-center text-white">R</span>
                  <span className="w-5 h-5 rounded-full bg-[#FF6B4A] border border-white text-[9px] font-bold flex items-center justify-center text-white">S</span>
                </div>
                <span className="text-[11px] text-stone-600 font-medium">
                  Ananya & 2 friends shortlisted
                </span>
              </div>
              <button
                onClick={() => onNavigate('screen_08_activity_details')}
                className="text-xs font-bold text-[#E05A3E] hover:underline"
              >
                Details ›
              </button>
            </div>
          </div>
        </div>

        {/* Swipe Control Buttons */}
        <div className="py-2 space-y-2">
          <p className="text-center text-[11px] text-stone-400 font-medium">
            Swipe right to shortlist • Tap card for details
          </p>

          <div className="flex items-center justify-center gap-6">
            {/* Pass */}
            <div className="flex flex-col items-center gap-1">
              <button
                onClick={handlePass}
                className="w-14 h-14 rounded-full bg-stone-100 hover:bg-stone-200 border border-stone-300 flex items-center justify-center text-stone-700 shadow-sm active:scale-95 transition-transform"
                title="Pass"
              >
                <X className="w-6 h-6 stroke-[2.5]" />
              </button>
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Pass</span>
            </div>

            {/* Surprise */}
            <div className="flex flex-col items-center gap-1">
              <button
                onClick={handleSurprise}
                className="w-12 h-12 rounded-full bg-amber-100 hover:bg-amber-200 border border-amber-300 flex items-center justify-center text-amber-800 shadow-sm active:scale-95 transition-transform"
                title="Surprise Spot"
              >
                <Gift className="w-5 h-5" />
              </button>
              <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">Surprise</span>
            </div>

            {/* Interested / Match */}
            <div className="flex flex-col items-center gap-1">
              <button
                onClick={handleInterested}
                className="w-16 h-16 rounded-full bg-[#C84B31] hover:bg-[#B33E26] text-white flex items-center justify-center shadow-lg active:scale-95 transition-transform"
                title="Interested (Shortlist & Vote)"
              >
                <Heart className="w-7 h-7 fill-white" />
              </button>
              <span className="text-[10px] font-bold text-[#C84B31] uppercase tracking-wider">Interested</span>
            </div>
          </div>
        </div>
      </div>

      <BottomNavBar
        activeTab="discover"
        onSelectTab={() => {}}
        onNavigateScreen={onNavigate}
      />
    </div>
  );
};

export const Screen07MatchResult: React.FC<DiscoveryProps> = ({
  onNavigate,
  onSetToast,
}) => {
  return (
    <div className="flex-1 flex flex-col justify-between bg-[#FFFDF9] text-stone-900 p-5 overflow-y-auto no-scrollbar">
      {/* Header */}
      <ScreenHeader
        title="Match Result"
        onBack={() => onNavigate('screen_06_swipe_discovery')}
        showShare={true}
        showBookmark={true}
        onShare={() => onSetToast('Match shared with squad chat!')}
      />

      <div className="space-y-4 my-auto pt-2">
        {/* Confetti & Synergy Banner */}
        <div className="text-center space-y-1">
          <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-2xl mx-auto shadow-xs border-2 border-amber-300">
            🎉
          </div>
          <div className="inline-block px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-[11px] font-bold text-amber-900 tracking-wider uppercase">
            • Squad Synergy Unlocked •
          </div>
          <h2 className="text-3xl font-black text-stone-900 tracking-tight leading-tight mt-1">
            It's a group thing! 💛
          </h2>
          <p className="text-xs text-stone-600 max-w-xs mx-auto">
            Everyone in <strong>Saturday Adventures</strong> voted YES on this spot!
          </p>
        </div>

        {/* Spot Match Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md">
          <div className="relative h-44">
            <img
              src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80"
              alt="Pottery Studio"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
              <span className="text-xs font-bold bg-[#C84B31] px-2.5 py-1 rounded-full shadow-sm">
                4 of 4 Squad Voted!
              </span>

              {/* 4 Avatars */}
              <div className="flex -space-x-2">
                <span className="w-7 h-7 rounded-full bg-[#FF9E80] text-stone-900 border-2 border-white text-xs font-bold flex items-center justify-center">P</span>
                <span className="w-7 h-7 rounded-full bg-[#FFD13B] text-stone-900 border-2 border-white text-xs font-bold flex items-center justify-center">A</span>
                <span className="w-7 h-7 rounded-full bg-[#B8A1FF] text-white border-2 border-white text-xs font-bold flex items-center justify-center">R</span>
                <span className="w-7 h-7 rounded-full bg-[#A03E2D] text-white border-2 border-white text-xs font-bold flex items-center justify-center">You</span>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-2">
            <h3 className="font-extrabold text-stone-900 text-lg leading-tight">
              Pottery & Paint Studio
            </h3>
            <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
              <span>Koramangala 5th Block</span>
              <span>₹400–₹700 est.</span>
              <span>1.5 hrs</span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold">
                🎨 Creative
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[10px] font-bold">
                💸 Budget-friendly
              </span>
              <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-900 text-[10px] font-bold">
                🏠 Indoors
              </span>
              <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 text-[10px] font-bold">
                ☕ Coffee nearby
              </span>
            </div>
          </div>
        </div>

        {/* Squad Field Notes Comments */}
        <div className="bg-[#FAF5ED] rounded-2xl p-3.5 border border-[#EFE4D4] space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-stone-800">
            <span>Squad Field Notes</span>
            <span className="text-[10px] text-stone-500">2 new comments</span>
          </div>

          <div className="flex items-start gap-2.5 text-xs">
            <div className="w-6 h-6 rounded-full bg-[#FF9E80] text-stone-900 text-[10px] font-bold flex items-center justify-center shrink-0">
              P
            </div>
            <div>
              <div className="font-bold text-stone-900 text-[11px]">Priya · <span className="font-normal text-stone-400">just now</span></div>
              <p className="text-stone-600 font-serif-quote italic text-[11px]">
                “OMG yes, I've been dying to try wheel throwing! Ready to get super muddy.”
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 text-xs pt-2 border-t border-[#E8DEC9]">
            <div className="w-6 h-6 rounded-full bg-[#FFD13B] text-stone-900 text-[10px] font-bold flex items-center justify-center shrink-0">
              A
            </div>
            <div>
              <div className="font-bold text-stone-900 text-[11px]">Aarav · <span className="font-normal text-stone-400">2m ago</span></div>
              <p className="text-stone-600 font-serif-quote italic text-[11px]">
                “Matches our ₹800 budget limit perfectly 👍 Plus Third Wave Coffee is 2 mins away!”
              </p>
            </div>
          </div>
        </div>

        {/* Stamp Added Box */}
        <div className="flex items-center justify-between p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-amber-400 flex items-center justify-center text-stone-900 font-bold">
              ✓
            </div>
            <div>
              <div className="font-bold text-stone-900">Stamp Added to Saturday Book</div>
              <div className="text-[10px] text-stone-500">1st unanimous group vote today!</div>
            </div>
          </div>
          <span className="font-black text-amber-800 bg-amber-200/80 px-2 py-0.5 rounded-full text-xs">
            +50 xp
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 pt-4">
        <button
          onClick={() => onNavigate('screen_08_activity_details')}
          className="w-full py-3.5 rounded-2xl bg-[#FF6B4A] hover:bg-[#E85533] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
        >
          View Activity Details
        </button>

        <button
          onClick={() => onNavigate('screen_06_swipe_discovery')}
          className="w-full py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-500 text-stone-900 font-bold text-sm shadow-xs transition-colors"
        >
          Keep Exploring (Back to Swipe)
        </button>

        <button
          onClick={() => onNavigate('screen_15_voting_shortlist')}
          className="w-full py-2 text-center text-xs font-semibold text-stone-600 hover:text-stone-900"
        >
          Add directly to Saturday Meetup plan →
        </button>
      </div>
    </div>
  );
};

export const Screen08ActivityDetails: React.FC<DiscoveryProps> = ({
  onNavigate,
  onSetToast,
  savedSpots,
  onToggleSaveSpot,
}) => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const photos = [
    'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80',
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#FFFDF9] text-stone-900 pb-0">
      <ScreenHeader
        title="Activity Details"
        onBack={() => onNavigate('screen_05_discover_home')}
        showShare={true}
        showBookmark={true}
        isBookmarked={savedSpots.includes('spot-pottery')}
        onToggleBookmark={() => onToggleSaveSpot('spot-pottery')}
        onShare={() => onSetToast('Activity link copied to clipboard!')}
      />

      <div className="flex-1 px-4 py-3 space-y-4 overflow-y-auto no-scrollbar">
        {/* Badges on top */}
        <div className="flex items-center justify-between text-xs font-bold">
          <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
            Koramangala Day Quest
          </span>
          <span className="text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" /> Active Studio
          </span>
        </div>

        {/* Gallery Carousel */}
        <div className="space-y-2">
          <div className="relative h-60 rounded-3xl overflow-hidden shadow-sm border border-stone-200">
            <img
              src={photos[activePhotoIdx]}
              alt="Pottery Studio"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-bold text-amber-900 shadow-xs flex items-center gap-1">
              <span>⭐ Scrapbook Pick</span>
            </div>

            <button
              onClick={() => onToggleSaveSpot('spot-pottery')}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-stone-700 shadow-xs"
            >
              <Heart
                className={`w-4 h-4 ${
                  savedSpots.includes('spot-pottery')
                    ? 'fill-[#C84B31] text-[#C84B31]'
                    : ''
                }`}
              />
            </button>

            <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded-full">
              {activePhotoIdx + 1} / 5 Photos
            </div>
          </div>

          {/* Mini thumbnails */}
          <div className="grid grid-cols-3 gap-2">
            {photos.map((p, i) => (
              <button
                key={i}
                onClick={() => setActivePhotoIdx(i)}
                className={`h-16 rounded-xl overflow-hidden border-2 transition-all ${
                  activePhotoIdx === i
                    ? 'border-[#E05A3E] shadow-sm'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={p} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>

        {/* Title, rating, address */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-900 text-xs font-bold">
              🎨 Creative Workshop
            </span>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>4.9</span>
              <span className="text-[10px] text-stone-400 font-normal">(128 reviews)</span>
            </div>
          </div>

          <h2 className="text-2xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Pottery & Paint Studio
          </h2>
          <p className="text-xs text-amber-800 font-semibold">
            98% loved by squads this month
          </p>

          <div className="bg-[#FAF5ED] rounded-2xl p-3.5 border border-[#EFE4D4] space-y-2 text-xs">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-bold text-stone-800">
                  142, 5th Main Road, Koramangala 4th Block, Bengaluru
                </div>
                <button
                  onClick={() => onSetToast('Opening Google Maps navigation...')}
                  className="text-[11px] font-bold text-[#E05A3E] hover:underline flex items-center gap-1 mt-0.5"
                >
                  Open in Maps <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-[#E8DEC9] text-[11px]">
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Open Today · 11:00 AM – 8:00 PM (Walk-ins welcome)
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px] text-stone-600 pt-0.5">
              <span>Standard Experience</span>
              <span className="font-bold text-stone-900 font-mono">₹400 – ₹700 / person</span>
            </div>
          </div>
        </div>

        {/* What's Included in your Pass */}
        <div className="bg-white rounded-2xl p-4 border border-stone-200 space-y-2.5">
          <h3 className="font-extrabold text-stone-900 text-sm">
            What's Included in your Pass
          </h3>
          <div className="space-y-2 text-xs">
            {[
              'Clay & electric pottery wheel access',
              '1 fired ceramic keepsake to take home',
              'Resident ceramic artist & step-by-step coach',
              'Cotton apron & carving tools kit provided',
            ].map((inc, idx) => (
              <div key={idx} className="flex items-center gap-2 text-stone-700">
                <div className="w-4 h-4 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>{inc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust & Verification Check */}
        <div className="bg-[#FAF6F0] rounded-2xl p-4 border border-[#EFE8DD] space-y-3 text-xs">
          <div className="flex items-center gap-1.5 font-extrabold text-stone-900 text-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Trust & Verification Check</span>
          </div>

          <div className="space-y-2 text-[11px] text-stone-600">
            <div>
              <div className="font-bold text-stone-800">Host & Spot Audited</div>
              <p>Verified yesterday by AI Scout & registered host Anita R.</p>
            </div>
            <div>
              <div className="font-bold text-stone-800">Mobility & Space Access</div>
              <p>Step-free ground floor entrance, wide workshop bays.</p>
            </div>
            <div>
              <div className="font-bold text-stone-800">Squad Commute</div>
              <p>~12 min ride from your squad center (Indiranagar / Sony World).</p>
            </div>
          </div>
        </div>

        {/* Social Proof Bar */}
        <div className="flex items-center justify-between p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
              <span className="w-6 h-6 rounded-full bg-[#FF9E80] text-stone-900 text-[10px] font-bold flex items-center justify-center border border-white">P</span>
              <span className="w-6 h-6 rounded-full bg-[#FFD13B] text-stone-900 text-[10px] font-bold flex items-center justify-center border border-white">A</span>
              <span className="w-6 h-6 rounded-full bg-[#B8A1FF] text-white text-[10px] font-bold flex items-center justify-center border border-white">R</span>
            </div>
            <div>
              <div className="font-bold text-stone-900">Priya, Aarav, and Rohan also saved this spot!</div>
              <div className="text-[10px] text-stone-500">Saved in 'Weekend Crafters' board</div>
            </div>
          </div>
          <Bookmark className="w-4 h-4 text-amber-700 fill-amber-500 shrink-0" />
        </div>
      </div>

      {/* Sticky Bottom Add to Plan CTA */}
      <div className="sticky bottom-0 bg-[#FFFDF9]/95 backdrop-blur-md p-4 border-t border-[#F2ECE1]">
        <button
          onClick={() => onNavigate('screen_15_voting_shortlist')}
          className="w-full py-3.5 rounded-2xl bg-[#FF6B4A] hover:bg-[#E85533] text-white font-extrabold text-sm shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>+ Add to Plan (Saturday Adventures · ₹550 avg)</span>
        </button>
      </div>
    </div>
  );
};

export const Screen09SavedDiscoveries: React.FC<DiscoveryProps> = ({
  onNavigate,
  onSetToast,
  savedSpots,
  onToggleSaveSpot,
}) => {
  const [activeTab, setActiveTab] = useState<'wishlist' | 'shortlist'>('wishlist');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const savedList = curatedSpots.filter((s) => savedSpots.includes(s.id));

  return (
    <div className="flex-1 flex flex-col bg-[#FFFDF9] text-stone-900 pb-0">
      <ScreenHeader
        title="Saved Discoveries"
        cityBadge="Bengaluru"
        showShare={true}
        showProfile={true}
        onNavigateScreen={onNavigate}
        onShare={() => onSetToast('Saved wishlist exported as PDF link!')}
      />

      <div className="flex-1 px-4 py-3 space-y-4 overflow-y-auto no-scrollbar">
        {/* Title */}
        <div>
          <h2 className="text-2xl font-extrabold text-stone-900 tracking-tight flex items-center gap-1.5">
            <span>Your Little Collection</span>
            <span>🤍</span>
          </h2>
          <p className="text-xs text-stone-500 font-medium">
            14 curated gems saved for weekend adventures
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search your saved spots & notes..."
            className="w-full pl-9 pr-4 py-2 bg-white rounded-xl border border-stone-200 text-xs text-stone-900 placeholder:text-stone-400 shadow-xs"
          />
        </div>

        {/* Instagram Import Banner */}
        <button
          onClick={() => onNavigate('screen_10_import_discovery')}
          className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 border border-amber-400 shadow-xs flex items-center justify-between text-left hover:brightness-105 transition-all group"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-stone-900 text-amber-300 flex items-center justify-center text-xs font-bold shadow-xs">
              🔗
            </span>
            <div>
              <div className="font-extrabold text-xs text-stone-950">
                Import from Instagram or Reel
              </div>
              <div className="text-[10px] text-stone-800">
                Auto-paste reel links to scrapbook this place
              </div>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-stone-900 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Tab Toggle: My Wishlist vs Squad Shortlist */}
        <div className="flex p-1 bg-[#F3EDE2] rounded-2xl">
          <button
            onClick={() => setActiveTab('wishlist')}
            className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'wishlist'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            My Wishlist (14)
          </button>
          <button
            onClick={() => setActiveTab('shortlist')}
            className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'shortlist'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Squad Shortlist (4)
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
          {['All (14)', 'Cafés & Food (5)', 'Creative & Art (4)', 'Music (3)'].map((cat, i) => (
            <button
              key={i}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1 rounded-full whitespace-nowrap font-bold transition-all ${
                (categoryFilter === cat || (i === 0 && categoryFilter === 'All'))
                  ? 'bg-amber-300 text-stone-900 shadow-xs'
                  : 'bg-white border border-stone-200 text-stone-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Polaroid Saved Grid */}
        <div className="grid grid-cols-2 gap-3 pb-2">
          {curatedSpots.slice(0, 6).map((spot, i) => (
            <div
              key={spot.id}
              onClick={() => onNavigate('screen_08_activity_details')}
              className="bg-white rounded-2xl p-2 border border-stone-200/90 shadow-xs hover:shadow-md transition-shadow cursor-pointer relative group flex flex-col justify-between"
            >
              {/* Little washi tape accent */}
              <div
                className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-10 h-3 rounded-xs pointer-events-none opacity-85 ${
                  i % 2 === 0 ? 'bg-amber-200/90 rotate-[-2deg]' : 'bg-purple-200/90 rotate-[1deg]'
                }`}
              />

              <div className="relative h-28 rounded-xl overflow-hidden mb-2">
                <img
                  src={spot.imageUrl}
                  alt={spot.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Pixel Heart Badge */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleSaveSpot(spot.id);
                  }}
                  className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-xs"
                >
                  <Heart className="w-3.5 h-3.5 fill-[#C84B31] text-[#C84B31]" />
                </button>

                {i === 0 && (
                  <div className="absolute bottom-1.5 left-1.5 bg-amber-300 text-stone-950 px-1.5 py-0.5 rounded text-[8px] font-bold">
                    Squad Voted 💛
                  </div>
                )}
              </div>

              <div>
                <h4 className="font-bold text-stone-900 text-xs leading-tight line-clamp-1">
                  {spot.title}
                </h4>
                <div className="flex items-center justify-between text-[10px] text-stone-500 mt-1">
                  <span>{spot.area.split(' ')[0]}</span>
                  <span className="font-bold text-stone-800 font-mono">₹{spot.spend?.replace(/[^0-9]/g, '').slice(0, 3) || '400'}</span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Pin Custom Spot Card */}
        <div className="bg-[#FAF5ED] rounded-3xl p-5 border border-[#EFE4D4] text-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-amber-400 text-stone-900 font-black text-base mx-auto flex items-center justify-center shadow-xs">
            ⭐
          </div>
          <h3 className="font-extrabold text-stone-900 text-sm">
            Your next favourite place belongs here
          </h3>
          <p className="text-[11px] text-stone-600 max-w-xs mx-auto">
            Spot something exciting on your stroll? Pin it instantly or share your map coordinate to the squad list!
          </p>
          <button
            onClick={() => onNavigate('screen_10_import_discovery')}
            className="px-5 py-2.5 rounded-xl bg-[#C84B31] text-white text-xs font-bold hover:bg-[#B33E26] shadow-sm transition-all"
          >
            Pin Custom Spot
          </button>
        </div>
      </div>

      <BottomNavBar
        activeTab="saved"
        onSelectTab={() => {}}
        onNavigateScreen={onNavigate}
      />
    </div>
  );
};

export const Screen10ImportDiscovery: React.FC<DiscoveryProps> = ({
  onNavigate,
  onSetToast,
}) => {
  const [urlInput, setUrlInput] = useState(
    'https://www.instagram.com/reel/C8x9YLa12'
  );
  const [isParsed, setIsParsed] = useState(true);
  const [addToSquad, setAddToSquad] = useState(true);

  const handlePaste = () => {
    setUrlInput('https://www.instagram.com/reel/D9aB82Kc7');
    setIsParsed(true);
    onSetToast('Reel URL pasted! AI Scout analyzed metadata in 180ms');
  };

  const handleSave = () => {
    onSetToast('✨ "Roast & Bloom Specialty Roastery" saved to Wishlist & Squad Shortlist!');
    onNavigate('screen_09_saved_discoveries');
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#FFFDF9] text-stone-900 pb-4">
      <div>
        <ScreenHeader
          title="Import A Discovery"
          onBack={() => onNavigate('screen_09_saved_discoveries')}
          showShare={true}
          showBookmark={true}
          onShare={() => onSetToast('Share reel extraction link')}
        />

        <div className="px-5 pt-3 space-y-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
              Social to Scrapbook • Magic Parser
            </span>
            <h2 className="text-2xl font-extrabold text-stone-900 tracking-tight mt-1 leading-tight">
              Found something on Instagram?
            </h2>
            <p className="text-xs text-stone-500 font-medium mt-0.5">
              Paste a link to any reel, post, or map pin. Our AI scout will extract the venue, vibe, and coordinate stamps for your journal!
            </p>
          </div>

          {/* Paste URL Input */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-stone-800">Source URL or Share Link</span>
              <span className="text-[10px] text-amber-700 font-semibold">Auto-detecting</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-900 font-mono bg-white shadow-xs focus:ring-2 focus:ring-[#FF6B4A]"
                />
              </div>
              <button
                onClick={handlePaste}
                className="px-3 py-2.5 bg-amber-300 hover:bg-amber-400 text-stone-900 rounded-xl text-xs font-bold shadow-xs transition-colors"
              >
                Paste
              </button>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold pt-0.5">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>Successfully parsed from Instagram Reel</span>
            </div>
          </div>

          {/* Extracted Entry Card */}
          <div className="bg-[#FAF5ED] rounded-3xl p-4 border border-[#EFE4D4] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black uppercase tracking-wider text-stone-800">
                Extracted Entry
              </span>
              <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-900 text-[10px] font-bold">
                AI Scout Confident 98%
              </span>
            </div>

            {/* Reel Frame Simulation */}
            <div className="relative h-32 rounded-2xl overflow-hidden border border-stone-300">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
                alt="Reel Preview"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 left-2 bg-black/75 text-white text-[9px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                <span>▶ Reel Clip Captured</span>
              </div>
              <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-amber-400 text-stone-950 font-black text-[9px] flex items-center justify-center shadow-xs">
                VERIFIED
              </div>
            </div>

            {/* Form Fields Extracted */}
            <div className="space-y-2 text-xs">
              <div>
                <div className="text-[10px] uppercase font-bold text-stone-400">Venue Title</div>
                <div className="font-extrabold text-stone-900 text-sm">
                  Roast & Bloom Specialty Roastery
                </div>
              </div>

              <div>
                <div className="text-[10px] uppercase font-bold text-stone-400">Area & Landmark</div>
                <div className="font-semibold text-stone-800">
                  Indiranagar 12th Main, Bengaluru
                </div>
              </div>

              <div>
                <div className="text-[10px] uppercase font-bold text-stone-400 mb-1">Vibe Categories</div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-stone-900 text-white px-2 py-0.5 rounded-full text-[10px] font-bold">
                    Cafés & Food
                  </span>
                  <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full text-[10px] font-bold">
                    Art & Design
                  </span>
                  <span className="bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-full text-[10px] font-bold">
                    Outdoors
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-[#E8DEC9]">
                <div>
                  <div className="text-[10px] uppercase font-bold text-stone-400">Estimated Spend</div>
                  <div className="font-extrabold text-stone-900 font-mono">₹350 – ₹600 / person</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-[#E5DAC8] text-[11px] text-stone-600 space-y-1">
                <span className="font-bold text-stone-800 block text-[10px] uppercase">Scout Field Notes:</span>
                <p>
                  Known for Japanese slow cold drip, cozy vinyl record listening booth in the attic, and a pet-friendly gravel courtyard out back.
                </p>
              </div>
            </div>
          </div>

          {/* Add to Squad checkbox */}
          <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FFF6EE] border border-[#FCDCCE] text-xs">
            <input
              type="checkbox"
              id="addToSquad"
              checked={addToSquad}
              onChange={(e) => setAddToSquad(e.target.checked)}
              className="mt-0.5 accent-[#C84B31] rounded"
            />
            <label htmlFor="addToSquad" className="text-stone-800 font-medium cursor-pointer">
              <span className="font-bold block">Add to “Saturday Adventures” squad</span>
              <span className="text-[10px] text-stone-500">
                Pings 4 friends in your weekend wandering circle so you can vote on this spot together.
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="px-5 pt-3 space-y-2">
        <button
          onClick={handleSave}
          className="w-full py-3.5 rounded-2xl bg-[#C84B31] hover:bg-[#B33E26] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
        >
          Save to Discoveries ✨
        </button>

        <button
          onClick={() => onSetToast('Manual entry form ready')}
          className="w-full py-2.5 rounded-2xl bg-[#F0EAE1] hover:bg-[#E4DCCE] text-stone-700 font-bold text-xs transition-colors"
        >
          Manual Entry (If link failed)
        </button>
      </div>
    </div>
  );
};

export interface DiscoveryScreensProps {
  currentScreen: ScreenId;
  onNavigate: (screenId: ScreenId) => void;
  onShowToast: (msg: string) => void;
  savedSpots: any;
  onToggleSaveSpot: any;
}

export const DiscoveryScreens: React.FC<DiscoveryScreensProps> = ({
  currentScreen,
  onNavigate,
  onShowToast,
  savedSpots,
  onToggleSaveSpot,
}) => {
  // Normalize savedSpots to array of IDs if passed as objects
  const spotIds = Array.isArray(savedSpots)
    ? savedSpots.map((s) => (typeof s === 'string' ? s : s.id))
    : ['spot-pottery', 'spot-courtyard'];

  const toggleHandler = (idOrSpot: any) => {
    const id = typeof idOrSpot === 'string' ? idOrSpot : idOrSpot.id;
    if (typeof onToggleSaveSpot === 'function') {
      onToggleSaveSpot(id);
    }
  };

  if (currentScreen === 'screen_05_discover_home') {
    return (
      <Screen05DiscoverHome
        onNavigate={onNavigate}
        onSetToast={onShowToast}
        savedSpots={spotIds}
        onToggleSaveSpot={toggleHandler}
      />
    );
  }
  if (currentScreen === 'screen_06_swipe_discovery') {
    return (
      <Screen06SwipeDiscovery
        onNavigate={onNavigate}
        onSetToast={onShowToast}
        savedSpots={spotIds}
        onToggleSaveSpot={toggleHandler}
      />
    );
  }
  if (currentScreen === 'screen_07_match_result') {
    return (
      <Screen07MatchResult
        onNavigate={onNavigate}
        onSetToast={onShowToast}
        savedSpots={spotIds}
        onToggleSaveSpot={toggleHandler}
      />
    );
  }
  if (currentScreen === 'screen_08_activity_details') {
    return (
      <Screen08ActivityDetails
        onNavigate={onNavigate}
        onSetToast={onShowToast}
        savedSpots={spotIds}
        onToggleSaveSpot={toggleHandler}
      />
    );
  }
  if (currentScreen === 'screen_09_saved_discoveries') {
    return (
      <Screen09SavedDiscoveries
        onNavigate={onNavigate}
        onSetToast={onShowToast}
        savedSpots={spotIds}
        onToggleSaveSpot={toggleHandler}
      />
    );
  }
  return (
    <Screen10ImportDiscovery
      onNavigate={onNavigate}
      onSetToast={onShowToast}
      savedSpots={spotIds}
      onToggleSaveSpot={toggleHandler}
    />
  );
};

