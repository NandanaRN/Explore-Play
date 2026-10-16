import React, { useState } from 'react';
import { ScreenId } from '../types';
import { ScreenHeader } from '../components/ScreenHeader';
import {
  MapPin,
  ChevronRight,
  Check,
  Sparkles,
  ShieldCheck,
  Compass,
  Coffee,
  Palette,
  Music,
  ShoppingBag,
  Footprints,
  Gamepad2,
} from 'lucide-react';

interface OnboardingProps {
  onNavigate: (screenId: ScreenId) => void;
  onSetToast: (msg: string) => void;
}

export const Screen01Welcome: React.FC<OnboardingProps> = ({ onNavigate }) => {
  return (
    <div className="flex-1 flex flex-col justify-between p-6 bg-[#FFFDF9] text-stone-900 min-h-full">
      {/* Brand Header */}
      <div className="flex items-center gap-2.5 pt-2">
        <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center font-bold text-stone-900 text-sm shadow-xs">
          EP
        </div>
        <div>
          <div className="font-extrabold text-stone-900 text-sm tracking-tight leading-none">
            Explore & Play
          </div>
          <div className="text-[10px] font-bold tracking-wider text-amber-700 uppercase mt-0.5">
            Bengaluru Edition
          </div>
        </div>
      </div>

      {/* Hero Illustration / Collage */}
      <div className="my-6 space-y-3">
        {/* Stylized Illustrated Map Card */}
        <div className="relative bg-gradient-to-br from-[#FCE8CC] via-[#F8D8B0] to-[#E9BE93] rounded-3xl p-5 overflow-hidden shadow-sm border border-[#E9CBA6]/60">
          {/* Decorative Map Pins & Signposts */}
          <div className="absolute top-4 left-6 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-semibold text-stone-800 shadow-xs flex items-center gap-1">
            <span>☕ Hidden Cafés</span>
          </div>

          <div className="absolute bottom-6 right-5 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-semibold text-stone-800 shadow-xs flex items-center gap-1">
            <span>🎨 Art Walks</span>
          </div>

          {/* Central Stylized Landmark Pin */}
          <div className="flex justify-center py-6">
            <div className="relative">
              <div className="w-16 h-20 bg-[#E05A3E] rounded-t-full rounded-b-md shadow-md flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-inner">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E05A3E]" />
                </div>
              </div>
              <div className="w-6 h-2 bg-stone-800/20 rounded-full mx-auto mt-2 blur-[1px]" />
            </div>
          </div>
        </div>

        {/* Two Mini Photo Tiles */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative rounded-2xl overflow-hidden shadow-xs h-24 border border-stone-200">
            <img
              src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=400&q=80"
              alt="Pottery Day"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <span className="absolute bottom-2 left-2.5 text-[11px] font-semibold text-white drop-shadow-sm">
              Pottery Day
            </span>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xs h-24 border border-stone-200">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80"
              alt="Sunset Bites"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <span className="absolute bottom-2 left-2.5 text-[11px] font-semibold text-white drop-shadow-sm">
              Sunset Bites
            </span>
          </div>
        </div>
      </div>

      {/* Headline & Description */}
      <div className="space-y-3">
        <div className="relative">
          <h1 className="text-4xl font-extrabold text-stone-900 tracking-tight leading-[1.05]">
            Your city.
            <br />
            <span className="text-[#E05A3E]">Your adventures.</span>
          </h1>
          {/* Subtle dotted trail curve decoration */}
          <svg className="w-48 h-8 text-[#E05A3E] mt-1" viewBox="0 0 200 40" fill="none">
            <path
              d="M5 25 C 50 5, 100 45, 195 15"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray="4 4"
            />
          </svg>
        </div>

        <p className="text-stone-600 text-sm leading-relaxed">
          Find fun things to do, plan with your favourite people, and make every meetup a little adventure.
        </p>
      </div>

      {/* Buttons & Footer */}
      <div className="space-y-3 pt-6 pb-2">
        <button
          onClick={() => onNavigate('screen_02_interests')}
          className="w-full py-3.5 px-6 rounded-2xl bg-[#FF6B4A] hover:bg-[#E85533] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-1.5"
        >
          <span>Get started</span>
          <ChevronRight className="w-4 h-4 stroke-[2.5]" />
        </button>

        <button
          onClick={() => onNavigate('screen_05_discover_home')}
          className="w-full py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors"
        >
          I already have an account
        </button>

        <p className="text-center text-[11px] text-stone-400 font-medium">
          Good plans. Great memories. 💛
        </p>
      </div>
    </div>
  );
};

export const Screen02Interests: React.FC<OnboardingProps> = ({ onNavigate }) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'cafes',
    'craft',
  ]);

  const interestOptions = [
    {
      id: 'cafes',
      title: 'Cafés & Food',
      desc: 'Hidden bakeries & brunch',
      badge: '☕ Cafés',
      img: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'craft',
      title: 'Art & Crafts',
      desc: 'Ceramics, tufting & canvas',
      badge: '🎨 Craft',
      img: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'gigs',
      title: 'Music & Gigs',
      desc: 'Indie jams & vinyl spots',
      badge: '🎵 Gigs',
      img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'popups',
      title: 'Markets & Fairs',
      desc: 'Weekend pop-ups & thrift',
      badge: '🛍️ Pop-ups',
      img: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'trails',
      title: 'Outdoors & Trails',
      desc: 'Sunset walks & quests',
      badge: '🌿 Trails',
      img: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'play',
      title: 'Games & Play',
      desc: 'Mystery trails & arcades',
      badge: '🎲 Play',
      img: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=400&q=80',
    },
  ];

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#FFFDF9] text-stone-900 pb-4">
      <div>
        <ScreenHeader
          title="Explore Interests"
          onBack={() => onNavigate('screen_01_welcome')}
          showProfile={false}
        />

        {/* Progress Bar & Step */}
        <div className="px-5 pt-3">
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-1.5">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#E05A3E]" /> Step 1 of 3
            </span>
            <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full text-[10px]">
              Vibe Check ✨
            </span>
          </div>
          <div className="h-1.5 w-full bg-stone-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#E05A3E] w-1/3 rounded-full" />
          </div>

          <div className="mt-4 mb-3">
            <h2 className="text-2xl font-extrabold text-stone-900 tracking-tight">
              What's your kind of fun?
            </h2>
            <p className="text-xs text-stone-500 font-medium mt-0.5">
              Pick anything you'd love to try with friends.
            </p>
          </div>

          {/* 6 Interests Grid */}
          <div className="grid grid-cols-2 gap-3 pb-2">
            {interestOptions.map((item) => {
              const isSelected = selectedInterests.includes(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => toggleInterest(item.id)}
                  className={`relative rounded-2xl overflow-hidden p-2 text-left border-2 transition-all group flex flex-col justify-between h-44 ${
                    isSelected
                      ? 'border-[#E05A3E] bg-[#FFF8F5] shadow-sm'
                      : 'border-stone-200/80 bg-white hover:border-stone-300'
                  }`}
                >
                  {/* Photo area */}
                  <div className="relative h-24 rounded-xl overflow-hidden mb-2">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-1.5 left-1.5 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md text-[9px] font-bold text-stone-800 shadow-xs">
                      {item.badge}
                    </div>
                    {/* Checkbox circle */}
                    <div
                      className={`absolute top-1.5 right-1.5 w-5 h-5 rounded-full flex items-center justify-center transition-colors shadow-xs ${
                        isSelected
                          ? 'bg-emerald-500 text-white'
                          : 'bg-white/80 border border-stone-300'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-stone-900 text-xs leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[10px] text-stone-500 line-clamp-1 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Scrapbook helper tip */}
          <div className="py-2 text-center">
            <span className="text-[11px] text-stone-500 bg-[#F4EFE6] px-3 py-1 rounded-full font-medium inline-block">
              Tap any tile to add to your adventure passport
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Next Button */}
      <div className="px-5 pt-2">
        <button
          onClick={() => onNavigate('screen_03_preferences')}
          className="w-full py-3.5 rounded-2xl bg-[#FF6B4A] hover:bg-[#E85533] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
        >
          Continue ({selectedInterests.length} selected)
        </button>
        <button
          onClick={() => onNavigate('screen_03_preferences')}
          className="w-full py-2 text-center text-[11px] text-stone-500 font-medium hover:text-stone-800 mt-1"
        >
          Change vibes anytime • <span className="underline">Skip for now</span>
        </button>
      </div>
    </div>
  );
};

export const Screen03Preferences: React.FC<OnboardingProps> = ({ onNavigate }) => {
  const [budgetTier, setBudgetTier] = useState<string>('500-1200');
  const [distance, setDistance] = useState<string>('5km');
  const [times, setTimes] = useState<string[]>(['weekends', 'fridays']);
  const [setting, setSetting] = useState<string>('both');
  const [stepFree, setStepFree] = useState(true);
  const [quieter, setQuieter] = useState(false);

  const toggleTime = (t: string) => {
    setTimes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#FFFDF9] text-stone-900 pb-4">
      <div>
        <ScreenHeader
          title="Wander Preferences"
          onBack={() => onNavigate('screen_02_interests')}
          showProfile={false}
        />

        <div className="px-5 pt-3 space-y-4">
          {/* Progress */}
          <div>
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-1.5">
              <span>Step 2 of 3</span>
              <span className="flex items-center gap-1 text-[#E05A3E]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E05A3E]" /> Customizing vibe
              </span>
            </div>
            <div className="h-1.5 w-full bg-stone-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#E05A3E] w-2/3 rounded-full" />
            </div>
          </div>

          <div>
            <span className="text-[10px] font-bold tracking-wider text-amber-700 uppercase bg-amber-100 px-2 py-0.5 rounded-md">
              Tailored Just For You ✨
            </span>
            <h2 className="text-2xl font-extrabold text-stone-900 tracking-tight mt-1">
              Let's make it your kind of adventure.
            </h2>
            <p className="text-xs text-stone-500 font-medium mt-0.5">
              Set rough preferences so AI suggests spots that truly fit your squad.
            </p>
          </div>

          {/* Preference Section 1: Budget per Person */}
          <div className="bg-[#FAF6F0] rounded-2xl p-4 border border-[#EFE8DD] space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#E05A3E]" />
              <h3 className="font-bold text-stone-900 text-sm">Budget per Person</h3>
            </div>
            <p className="text-[11px] text-stone-500">Approximate tiers per hangout</p>

            <div className="grid grid-cols-1 gap-2 pt-1">
              {[
                { id: 'free', label: 'Free Only', sub: 'Parks, trails & public spots' },
                { id: 'under500', label: 'Under ₹500', sub: 'Chai, bakes & quick bites' },
                { id: '500-1200', label: '₹500 – ₹1,200', sub: 'Cozy cafés, pottery & workshops' },
                { id: 'splurge', label: 'Splurge ₹1,200+', sub: 'Chef tasting tables & live gigs' },
              ].map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setBudgetTier(tier.id)}
                  className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                    budgetTier === tier.id
                      ? 'border-[#E05A3E] bg-[#FFF2EE] shadow-xs'
                      : 'border-stone-200 bg-white hover:border-stone-300'
                  }`}
                >
                  <div>
                    <div className="font-bold text-xs text-stone-900">{tier.label}</div>
                    <div className="text-[10px] text-stone-500">{tier.sub}</div>
                  </div>
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      budgetTier === tier.id
                        ? 'border-[#E05A3E] bg-[#E05A3E]'
                        : 'border-stone-300'
                    }`}
                  >
                    {budgetTier === tier.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Preference Section 2: Travel Distance */}
          <div className="bg-[#FAF6F0] rounded-2xl p-4 border border-[#EFE8DD] space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <h3 className="font-bold text-stone-900 text-sm">Travel Distance</h3>
              </div>
              <span className="text-xs font-bold text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded-full">
                {distance}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'nearby', label: 'Nearby', sub: '~2 km radius' },
                { id: '5km', label: '5 km', sub: 'Sweet spot (15m ride)' },
                { id: '10km', label: '10 km', sub: 'Cross-town quest' },
                { id: 'citywide', label: 'Citywide', sub: '25+ km roadtrip' },
              ].map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDistance(d.id)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    distance === d.id
                      ? 'border-amber-500 bg-amber-100/90 font-bold'
                      : 'border-stone-200 bg-white'
                  }`}
                >
                  <div className="text-xs font-bold text-stone-900">{d.label}</div>
                  <div className="text-[10px] text-stone-500">{d.sub}</div>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between text-[10px] text-stone-500 pt-1 font-mono">
              <span>~25 min brisk walk</span>
              <span>•</span>
              <span>~12 min ride / cab</span>
            </div>
          </div>

          {/* Preference Section 3: Favorite Hangout Times */}
          <div className="bg-[#FAF6F0] rounded-2xl p-4 border border-[#EFE8DD] space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">Favorite Hangout Times</h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { id: 'weekends', label: '🎉 Weekends' },
                { id: 'fridays', label: '🌙 Friday Evenings' },
                { id: 'weekdays', label: 'Weekdays / Workdays' },
              ].map((t) => {
                const active = times.includes(t.id);
                return (
                  <button
                    key={t.id}
                    onClick={() => toggleTime(t.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      active
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'bg-white border border-stone-200 text-stone-700'
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Preference Section 4: Setting Preference */}
          <div className="bg-[#FAF6F0] rounded-2xl p-4 border border-[#EFE8DD] space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">Setting Preference</h3>
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              {[
                { id: 'indoors', label: '🏠 Indoors' },
                { id: 'outdoors', label: '🌿 Outdoors' },
                { id: 'both', label: '✨ Both / Either' },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSetting(s.id)}
                  className={`py-2 px-1 rounded-xl text-xs font-bold text-center transition-all ${
                    setting === s.id
                      ? 'bg-amber-100 border border-amber-400 text-stone-900'
                      : 'bg-white border border-stone-200 text-stone-600'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Preference Section 5: Accessibility & Comfort */}
          <div className="bg-[#FAF6F0] rounded-2xl p-4 border border-[#EFE8DD] space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-stone-900 text-sm">Accessibility & Comfort</h3>
              <span className="text-[10px] text-stone-500 font-mono">Optional</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div>
                <div className="font-bold text-stone-800">Step-free entrance</div>
                <div className="text-[10px] text-stone-500">Wheelchair & stroller accessible</div>
              </div>
              <button
                onClick={() => setStepFree(!stepFree)}
                className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                  stepFree ? 'bg-[#E05A3E]' : 'bg-stone-300'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    stepFree ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between text-xs pt-1 border-t border-[#E8DEC9]">
              <div>
                <div className="font-bold text-stone-800">Quieter atmosphere</div>
                <div className="text-[10px] text-stone-500">Low to moderate acoustic volume</div>
              </div>
              <button
                onClick={() => setQuieter(!quieter)}
                className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                  quieter ? 'bg-[#E05A3E]' : 'bg-stone-300'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    quieter ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pt-4">
        <button
          onClick={() => onNavigate('screen_04_location')}
          className="w-full py-3.5 rounded-2xl bg-[#FF6B4A] hover:bg-[#E85533] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
        >
          Continue to Location
        </button>
      </div>
    </div>
  );
};

export const Screen04Location: React.FC<OnboardingProps> = ({ onNavigate, onSetToast }) => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('Koramangala');
  const [gpsEnabled, setGpsEnabled] = useState(false);

  const handleEnableLocation = () => {
    setGpsEnabled(true);
    onSetToast('📍 GPS detected: Koramangala 4th Block, Bengaluru');
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#FFFDF9] text-stone-900 pb-4">
      <div>
        <ScreenHeader
          title="Neighborhood Location"
          onBack={() => onNavigate('screen_03_preferences')}
          showProfile={false}
        />

        <div className="px-5 pt-3 space-y-4">
          {/* Progress */}
          <div>
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-1.5">
              <span>Step 3 of 3</span>
              <span className="text-amber-700">Almost Ready! ✨</span>
            </div>
            <div className="h-1.5 w-full bg-stone-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#E05A3E] w-full rounded-full" />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-stone-900 tracking-tight">
              Where shall we explore? 🗺️
            </h2>
            <p className="text-xs text-stone-500 font-medium mt-0.5">
              Explore & Play discovers secret spots and calculates travel time for your squad.
            </p>
          </div>

          {/* Cute Map Character Illustration */}
          <div className="bg-[#FAF4EB] rounded-3xl p-5 border border-[#EBDCC8] text-center relative overflow-hidden">
            <div className="w-24 h-24 mx-auto relative mb-2">
              <div className="w-20 h-20 bg-[#FF6B4A] rounded-full mx-auto flex items-center justify-center text-white text-2xl shadow-md border-4 border-white">
                <span className="text-stone-900 font-mono text-xl">ʘ‿ʘ</span>
              </div>
              <div className="w-1.5 h-6 bg-[#FF6B4A] mx-auto rounded-b" />
            </div>

            <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-[11px] font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              <span>Your Privacy Matters</span>
            </div>
            <p className="text-[11px] text-stone-600 mt-2 max-w-xs mx-auto leading-relaxed">
              Discovery works smoothly with or without device GPS. Precise location is only invoked during live quest routes.
            </p>
          </div>

          {/* Button: Enable Device Location */}
          <button
            onClick={handleEnableLocation}
            className={`w-full py-3.5 rounded-2xl font-bold text-sm shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2 ${
              gpsEnabled
                ? 'bg-emerald-600 text-white'
                : 'bg-[#FF6B4A] hover:bg-[#E85533] text-white'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>{gpsEnabled ? 'Device Location Active (Koramangala)' : 'Enable Device Location'}</span>
          </button>
          <p className="text-center text-[10px] text-stone-400">
            Instant recommendations tailored to where you are right now.
          </p>

          {/* Divider */}
          <div className="flex items-center gap-3 pt-1">
            <div className="flex-1 h-px bg-stone-200" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
              Or pick your neighborhood
            </span>
            <div className="flex-1 h-px bg-stone-200" />
          </div>

          {/* Neighborhood Card */}
          <div className="bg-[#FAF6F0] rounded-2xl p-4 border border-[#EFE8DD] space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase font-bold text-stone-400">
                  Explore a specific city
                </div>
                <div className="font-extrabold text-stone-900 text-sm">
                  Bengaluru, Karnataka
                </div>
              </div>
              <button
                onClick={() => onSetToast('Only Bengaluru available in this pilot!')}
                className="text-xs font-semibold text-[#E05A3E] hover:underline"
              >
                Change City
              </button>
            </div>

            <div className="pt-1">
              <div className="text-[11px] font-bold text-stone-700 mb-2">
                Popular starting bases:
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'Koramangala', label: '📍 Koramangala' },
                  { id: 'Indiranagar', label: '☕ Indiranagar' },
                  { id: 'HSR Layout', label: '🌳 HSR Layout' },
                  { id: 'Whitefield', label: '🎨 Whitefield' },
                  { id: 'Church Street', label: '📚 Church Street' },
                ].map((nb) => (
                  <button
                    key={nb.id}
                    onClick={() => setSelectedNeighborhood(nb.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                      selectedNeighborhood === nb.id
                        ? 'bg-[#E05A3E] text-white shadow-xs'
                        : 'bg-white border border-stone-200 text-stone-700 hover:border-stone-400'
                    }`}
                  >
                    {nb.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pt-3 space-y-2">
        <button
          onClick={() => onNavigate('screen_05_discover_home')}
          className="w-full py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-500 text-stone-900 font-extrabold text-sm shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-1.5"
        >
          <span>🚀 Ready to discover! Next up: Discover Home</span>
        </button>

        <button
          onClick={() => onNavigate('screen_05_discover_home')}
          className="w-full py-2 text-center text-xs font-semibold text-stone-600 hover:text-stone-900"
        >
          Continue without location
        </button>
      </div>
    </div>
  );
};

export interface OnboardingScreensProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

export const OnboardingScreens: React.FC<OnboardingScreensProps> = ({
  currentScreen,
  onNavigate,
  onShowToast,
}) => {
  if (currentScreen === 'screen_01_welcome') {
    return <Screen01Welcome onNavigate={onNavigate} onSetToast={onShowToast} />;
  }
  if (currentScreen === 'screen_02_interests') {
    return <Screen02Interests onNavigate={onNavigate} onSetToast={onShowToast} />;
  }
  if (currentScreen === 'screen_03_preferences') {
    return <Screen03Preferences onNavigate={onNavigate} onSetToast={onShowToast} />;
  }
  return <Screen04Location onNavigate={onNavigate} onSetToast={onShowToast} />;
};

