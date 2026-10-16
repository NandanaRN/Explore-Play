import React, { useState } from 'react';
import { ScreenId, SquadMember, SpotItem } from '../types';
import { ScreenHeader } from '../components/ScreenHeader';
import { BottomNavBar } from '../components/BottomNavBar';
import { initialSquadMembers, curatedSpots } from '../mockData';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ChevronRight,
  Plus,
  Share2,
  Copy,
  Check,
  CheckCircle2,
  Sparkles,
  Sliders,
  DollarSign,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Navigation,
  ArrowRight,
  Coffee,
  MessageCircle,
  ExternalLink,
  Shield,
  Send,
} from 'lucide-react';

interface MeetupScreensProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
  savedSpots: SpotItem[];
}

export const MeetupScreens: React.FC<MeetupScreensProps> = ({
  currentScreen,
  onNavigate,
  onShowToast,
  savedSpots,
}) => {
  // Screen 11: Create Meetup state
  const [meetupTitle, setMeetupTitle] = useState('Saturday Koramangala Pottery & Chai');
  const [meetupDate, setMeetupDate] = useState('This Saturday, Oct 24');
  const [meetupTime, setMeetupTime] = useState('2:30 PM');
  const [meetupArea, setMeetupArea] = useState('Koramangala & Indiranagar');

  // Screen 12: Invite Friends state
  const [invitedMembers, setInvitedMembers] = useState<string[]>(['user', 's1', 's2', 's3']);
  const [linkCopied, setLinkCopied] = useState(false);

  // Screen 13: Group Preferences state
  const [budgetIdx, setBudgetIdx] = useState(1);
  const budgets = ['₹300 - ₹600 (Casual)', '₹600 - ₹1,200 (Standard)', '₹1,200+ (Indulgent)'];
  const [selectedVibeTags, setSelectedVibeTags] = useState<string[]>([
    'Creative & Hands-on',
    'Artisanal Coffee',
    'Walkable Neighborhood',
  ]);

  // Screen 15: Voting state
  const [votes, setVotes] = useState<Record<string, { up: number; down: number; userVote?: 'up' | 'down' }>>({
    'pottery-studio': { up: 4, down: 0, userVote: 'up' },
    'third-wave-indira': { up: 3, down: 1, userVote: 'up' },
    'church-st-books': { up: 2, down: 2 },
  });

  const toggleInvite = (id: string) => {
    if (id === 'user') return;
    setInvitedMembers((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const handleCopyLink = () => {
    setLinkCopied(true);
    onShowToast('Meetup invite link copied to clipboard!');
    setTimeout(() => setLinkCopied(false), 2500);
  };

  const handleVote = (spotId: string, direction: 'up' | 'down') => {
    setVotes((prev) => {
      const current = prev[spotId] || { up: 0, down: 0 };
      if (current.userVote === direction) {
        // Toggle off
        return {
          ...prev,
          [spotId]: {
            ...current,
            [direction]: Math.max(0, current[direction] - 1),
            userVote: undefined,
          },
        };
      } else {
        const prevVote = current.userVote;
        return {
          ...prev,
          [spotId]: {
            up: direction === 'up' ? current.up + 1 : prevVote === 'up' ? current.up - 1 : current.up,
            down: direction === 'down' ? current.down + 1 : prevVote === 'down' ? current.down - 1 : current.down,
            userVote: direction,
          },
        };
      }
    });
    onShowToast(`Recorded your vote for ${direction === 'up' ? 'recommendation' : 'skipping'}!`);
  };

  /* -------------------------------------------------------------
     SCREEN 11: CREATE MEETUP
  ------------------------------------------------------------- */
  if (currentScreen === 'screen_11_create_meetup') {
    return (
      <div className="flex flex-col min-h-full bg-[#FAF7F2] text-[#1E1E1E]">
        <ScreenHeader
          title="Create Squad Meetup"
          subtitle="Screen 11 · Meetup Planner"
          onBack={() => onNavigate('screen_05_discover_home')}
          onNavigate={onNavigate}
        />

        <div className="flex-1 p-5 space-y-5 pb-24 overflow-y-auto">
          {/* Hero Banner */}
          <div className="bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] text-white p-5 rounded-2xl shadow-sm relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none" />
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 text-xs font-semibold tracking-wide text-emerald-100 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Squad Synchronizer
            </div>
            <h2 className="text-xl font-bold font-serif leading-tight">
              Coordinate an effortless weekend outing with friends
            </h2>
            <p className="text-xs text-emerald-100/90 mt-1">
              Set the vibe, invite your group, and our AI will aggregate everyone’s budget and preferences automatically.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs space-y-4">
            <div>
              <label className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-1.5">
                Meetup Name
              </label>
              <input
                type="text"
                value={meetupTitle}
                onChange={(e) => setMeetupTitle(e.target.value)}
                className="w-full text-sm font-semibold bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F]"
                placeholder="e.g. Saturday Chai & Craft"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-1.5">
                  Proposed Date
                </label>
                <div className="flex items-center gap-2 bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 text-xs font-medium">
                  <Calendar className="w-4 h-4 text-[#2D6A4F]" />
                  <span>{meetupDate}</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-1.5">
                  Start Time
                </label>
                <div className="flex items-center gap-2 bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 text-xs font-medium">
                  <Clock className="w-4 h-4 text-[#2D6A4F]" />
                  <span>{meetupTime}</span>
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-1.5">
                Neighborhood Cluster
              </label>
              <div className="flex items-center gap-2 bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 text-xs font-medium">
                <MapPin className="w-4 h-4 text-[#A03E2D]" />
                <input
                  type="text"
                  value={meetupArea}
                  onChange={(e) => setMeetupArea(e.target.value)}
                  className="bg-transparent text-xs w-full focus:outline-none font-semibold"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-1.5">
                Included Discovery Pins
              </label>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#A03E2D]/10 text-[#A03E2D] flex items-center justify-center font-bold text-xs">
                    🎨
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-800">Pottery & Paint Studio</p>
                    <p className="text-[11px] text-stone-500">Koramangala 4th Block</p>
                  </div>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-[#2D6A4F] font-bold">
                  Pinned Anchor
                </span>
              </div>
            </div>
          </div>

          {/* Quick squad snapshot */}
          <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-stone-700">Squad Members (4 joined)</span>
              <button
                onClick={() => onNavigate('screen_12_invite_friends')}
                className="text-xs font-bold text-[#2D6A4F] hover:underline"
              >
                + Manage Invitees
              </button>
            </div>
            <div className="flex items-center -space-x-2">
              {initialSquadMembers.slice(0, 4).map((member) => (
                <div
                  key={member.id}
                  className={`w-9 h-9 rounded-full ${member.avatarColor} border-2 border-white flex items-center justify-center font-bold text-xs shadow-xs`}
                  title={member.name}
                >
                  {member.name[0]}
                </div>
              ))}
              <div className="w-9 h-9 rounded-full bg-stone-100 border-2 border-white flex items-center justify-center text-stone-600 text-xs font-bold shadow-xs">
                +2
              </div>
            </div>
          </div>

          {/* Action button */}
          <button
            onClick={() => onNavigate('screen_12_invite_friends')}
            className="w-full py-3.5 px-4 rounded-xl bg-[#2D6A4F] hover:bg-[#23533e] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 active:scale-[0.99] transition-transform"
          >
            <span>Proceed to Invite Friends</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <BottomNavBar activeTab="meetups" onSelectTab={() => {}} onNavigate={onNavigate} />
      </div>
    );
  }

  /* -------------------------------------------------------------
     SCREEN 12: INVITE FRIENDS
  ------------------------------------------------------------- */
  if (currentScreen === 'screen_12_invite_friends') {
    return (
      <div className="flex flex-col min-h-full bg-[#FAF7F2] text-[#1E1E1E]">
        <ScreenHeader
          title="Invite Friends"
          subtitle="Screen 12 · Squad Roster"
          onBack={() => onNavigate('screen_11_create_meetup')}
          onNavigate={onNavigate}
        />

        <div className="flex-1 p-5 space-y-5 pb-24 overflow-y-auto">
          {/* Share Link Box */}
          <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-xs">
            <label className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-2">
              Shareable Meetup Invite Link
            </label>
            <div className="flex items-center gap-2 bg-stone-50 border border-stone-200 rounded-xl p-2.5">
              <span className="text-xs font-mono text-stone-600 truncate flex-1">
                https://explore.bengaluru.app/join/squad-pottery-chai
              </span>
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-lg bg-[#2D6A4F] text-white text-xs font-bold flex items-center gap-1 active:scale-95 transition-transform"
              >
                {linkCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{linkCopied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <div className="mt-3 flex gap-2">
              <button
                onClick={() => onShowToast('WhatsApp squad invitation generated!')}
                className="flex-1 py-2 rounded-xl bg-[#25D366]/10 text-[#128C7E] font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-[#25D366]/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Squad
              </button>
              <button
                onClick={() => onShowToast('QR invite code generated for in-person scan!')}
                className="py-2 px-3 rounded-xl bg-stone-100 text-stone-700 font-bold text-xs hover:bg-stone-200 transition-colors"
              >
                QR Code
              </button>
            </div>
          </div>

          {/* Squad Member Selection */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                Frequent Squad Buddies
              </h3>
              <span className="text-xs text-stone-500 font-medium">
                {invitedMembers.length} selected
              </span>
            </div>

            <div className="space-y-2">
              {initialSquadMembers.map((member) => {
                const isSelected = invitedMembers.includes(member.id);
                const isHost = member.id === 'user';
                return (
                  <div
                    key={member.id}
                    onClick={() => toggleInvite(member.id)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-50/70 border-[#2D6A4F]/40 shadow-xs'
                        : 'bg-white border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full ${member.avatarColor} flex items-center justify-center font-bold text-xs shadow-xs`}
                      >
                        {member.name[0]}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-bold text-stone-800">{member.name}</p>
                          {isHost && (
                            <span className="text-[10px] bg-stone-200 text-stone-700 px-1.5 py-0.5 rounded font-bold">
                              Host (You)
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-stone-500">{member.handle}</p>
                      </div>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${
                        isSelected
                          ? 'bg-[#2D6A4F] border-[#2D6A4F] text-white'
                          : 'border-stone-300 text-transparent'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action button */}
          <button
            onClick={() => onNavigate('screen_13_group_preferences')}
            className="w-full py-3.5 px-4 rounded-xl bg-[#2D6A4F] hover:bg-[#23533e] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 active:scale-[0.99] transition-transform"
          >
            <span>Lock Squad & Set Group Preferences</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <BottomNavBar activeTab="meetups" onSelectTab={() => {}} onNavigate={onNavigate} />
      </div>
    );
  }

  /* -------------------------------------------------------------
     SCREEN 13: GROUP PREFERENCES
  ------------------------------------------------------------- */
  if (currentScreen === 'screen_13_group_preferences') {
    return (
      <div className="flex flex-col min-h-full bg-[#FAF7F2] text-[#1E1E1E]">
        <ScreenHeader
          title="Squad Preferences"
          subtitle="Screen 13 · Group Alignment"
          onBack={() => onNavigate('screen_12_invite_friends')}
          onNavigate={onNavigate}
        />

        <div className="flex-1 p-5 space-y-5 pb-24 overflow-y-auto">
          {/* Overlap Score Card */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 text-[#2D6A4F] mb-2 font-serif font-black text-xl border-2 border-emerald-300">
              92%
            </div>
            <h3 className="font-bold text-base text-stone-900">High Squad Harmony</h3>
            <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
              You, Riya, Rohan, and Ananya all share high affinity for hands-on creative spots and cozy artisan cafes!
            </p>
          </div>

          {/* Combined Budget Slider */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                Group Target Budget per Person
              </span>
              <span className="text-xs font-bold text-[#2D6A4F]">{budgets[budgetIdx]}</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {budgets.map((b, idx) => (
                <button
                  key={b}
                  onClick={() => setBudgetIdx(idx)}
                  className={`p-2.5 rounded-xl border text-center text-xs font-semibold transition-all ${
                    budgetIdx === idx
                      ? 'bg-[#2D6A4F] text-white border-[#2D6A4F] shadow-xs'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  Tier {idx + 1}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-stone-500">
              *Calculated based on Rohan&apos;s student budget and Ananya&apos;s preference.
            </p>
          </div>

          {/* Group Vibe Selection */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-3">
              Combined Vibe Descriptors
            </span>

            <div className="flex flex-wrap gap-2">
              {[
                'Creative & Hands-on',
                'Artisanal Coffee',
                'Walkable Neighborhood',
                'Outdoor Garden',
                'Vintage Heritage',
                'Dessert Spot',
                'Board Game Friendly',
              ].map((tag) => {
                const isSelected = selectedVibeTags.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() =>
                      setSelectedVibeTags((prev) =>
                        isSelected ? prev.filter((t) => t !== tag) : [...prev, tag]
                      )
                    }
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#A03E2D] text-white shadow-xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    <span>{tag}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={() => onNavigate('screen_14_group_matches')}
            className="w-full py-3.5 px-4 rounded-xl bg-[#2D6A4F] hover:bg-[#23533e] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 active:scale-[0.99] transition-transform"
          >
            <span>Generate Squad Matches</span>
            <Sparkles className="w-4 h-4 text-amber-300" />
          </button>
        </div>

        <BottomNavBar activeTab="meetups" onSelectTab={() => {}} onNavigate={onNavigate} />
      </div>
    );
  }

  /* -------------------------------------------------------------
     SCREEN 14: GROUP MATCHES
  ------------------------------------------------------------- */
  if (currentScreen === 'screen_14_group_matches') {
    return (
      <div className="flex flex-col min-h-full bg-[#FAF7F2] text-[#1E1E1E]">
        <ScreenHeader
          title="Squad Matches"
          subtitle="Screen 14 · AI Recommendations"
          onBack={() => onNavigate('screen_13_group_preferences')}
          onNavigate={onNavigate}
        />

        <div className="flex-1 p-5 space-y-4 pb-24 overflow-y-auto">
          <div className="flex items-center justify-between">
            <p className="text-xs text-stone-500 font-medium">
              3 curated venues matching all 4 members
            </p>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#2D6A4F] font-bold">
              Koramangala Loop
            </span>
          </div>

          {/* Recommended Cards */}
          {curatedSpots.slice(0, 3).map((spot, idx) => {
            const matchScore = [98, 94, 88][idx];
            return (
              <div
                key={spot.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-36">
                  <img src={spot.image} alt={spot.name} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-[#2D6A4F] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>{matchScore}% Squad Fit</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-bold px-2 py-0.5 rounded-md">
                    {spot.priceLevel}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-base text-stone-900">{spot.name}</h4>
                      <p className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-stone-400" />
                        <span>{spot.neighborhood}</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-amber-600">★ {spot.rating}</span>
                      <p className="text-[10px] text-stone-400 font-medium">
                        {spot.estimatedTime}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 mt-2 line-clamp-2">{spot.description}</p>

                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-stone-100">
                    <div className="flex items-center -space-x-1.5">
                      {initialSquadMembers.slice(0, 3).map((m) => (
                        <div
                          key={m.id}
                          className={`w-6 h-6 rounded-full ${m.avatarColor} border border-white text-[9px] font-bold flex items-center justify-center`}
                        >
                          {m.name[0]}
                        </div>
                      ))}
                      <span className="text-[11px] text-stone-500 pl-2 font-medium">all 4 like this</span>
                    </div>

                    <button
                      onClick={() => onNavigate('screen_08_activity_details')}
                      className="text-xs font-bold text-[#2D6A4F] flex items-center gap-1 hover:underline"
                    >
                      <span>Inspect Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <button
            onClick={() => onNavigate('screen_15_voting_shortlist')}
            className="w-full py-3.5 px-4 rounded-xl bg-[#2D6A4F] hover:bg-[#23533e] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 active:scale-[0.99] transition-transform"
          >
            <span>Proceed to Squad Voting & Shortlist</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <BottomNavBar activeTab="meetups" onSelectTab={() => {}} onNavigate={onNavigate} />
      </div>
    );
  }

  /* -------------------------------------------------------------
     SCREEN 15: VOTING & SHORTLIST
  ------------------------------------------------------------- */
  if (currentScreen === 'screen_15_voting_shortlist') {
    return (
      <div className="flex flex-col min-h-full bg-[#FAF7F2] text-[#1E1E1E]">
        <ScreenHeader
          title="Squad Voting"
          subtitle="Screen 15 · Shortlist Consensus"
          onBack={() => onNavigate('screen_14_group_matches')}
          onNavigate={onNavigate}
        />

        <div className="flex-1 p-5 space-y-4 pb-24 overflow-y-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 flex items-center gap-3">
            <span className="text-xl">🗳️</span>
            <div>
              <p className="text-xs font-bold text-amber-900">Live consensus voting active</p>
              <p className="text-[11px] text-amber-700">
                Vote up or down on recommended venues to finalize your itinerary automatically.
              </p>
            </div>
          </div>

          {/* Voting Cards */}
          {curatedSpots.slice(0, 3).map((spot) => {
            const voteState = votes[spot.id] || { up: 2, down: 0 };
            return (
              <div
                key={spot.id}
                className="bg-white rounded-2xl p-4 border border-stone-200/90 shadow-xs space-y-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={spot.image}
                    alt={spot.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-stone-900 truncate">{spot.name}</h4>
                    <p className="text-xs text-stone-500">{spot.neighborhood}</p>
                    <span className="text-[10px] font-bold text-[#A03E2D] bg-[#A03E2D]/10 px-2 py-0.5 rounded-full mt-1 inline-block">
                      {spot.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleVote(spot.id, 'up')}
                      className={`px-3 py-1.5 rounded-xl border flex items-center gap-1.5 text-xs font-bold transition-all ${
                        voteState.userVote === 'up'
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{voteState.up}</span>
                    </button>

                    <button
                      onClick={() => handleVote(spot.id, 'down')}
                      className={`px-3 py-1.5 rounded-xl border flex items-center gap-1.5 text-xs font-bold transition-all ${
                        voteState.userVote === 'down'
                          ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      <ThumbsDown className="w-3.5 h-3.5" />
                      <span>{voteState.down}</span>
                    </button>
                  </div>

                  <span className="text-xs font-bold text-[#2D6A4F] flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Consensus Lock (3/4)</span>
                  </span>
                </div>
              </div>
            );
          })}

          <button
            onClick={() => onNavigate('screen_16_itinerary_map')}
            className="w-full py-3.5 px-4 rounded-xl bg-[#2D6A4F] hover:bg-[#23533e] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 active:scale-[0.99] transition-transform"
          >
            <span>Lock Voting & Generate Itinerary</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <BottomNavBar activeTab="meetups" onSelectTab={() => {}} onNavigate={onNavigate} />
      </div>
    );
  }

  /* -------------------------------------------------------------
     SCREEN 16: ITINERARY & MAP
  ------------------------------------------------------------- */
  if (currentScreen === 'screen_16_itinerary_map') {
    return (
      <div className="flex flex-col min-h-full bg-[#FAF7F2] text-[#1E1E1E]">
        <ScreenHeader
          title="Itinerary & Map"
          subtitle="Screen 16 · Curated Schedule"
          onBack={() => onNavigate('screen_15_voting_shortlist')}
          onNavigate={onNavigate}
        />

        <div className="flex-1 p-5 space-y-4 pb-24 overflow-y-auto">
          {/* Simulated Interactive Map */}
          <div className="relative h-44 rounded-2xl overflow-hidden border border-stone-300 shadow-inner bg-[#EAE2D7]">
            {/* Map Canvas Background with stylized streets */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute top-10 left-0 right-0 h-2 bg-stone-300 -rotate-6" />
              <div className="absolute top-28 left-0 right-0 h-3 bg-stone-300 rotate-3" />
              <div className="absolute top-0 bottom-0 left-24 w-2 bg-stone-300 rotate-12" />
              <div className="absolute top-0 bottom-0 right-20 w-3 bg-stone-300 -rotate-6" />
            </div>

            {/* Pins */}
            <div className="absolute top-6 left-12 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center font-bold text-xs shadow-md border-2 border-white">
                1
              </div>
              <span className="text-[10px] font-bold bg-white/90 px-1.5 py-0.5 rounded shadow mt-1">
                Third Wave
              </span>
            </div>

            <div className="absolute top-16 right-16 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-[#A03E2D] text-white flex items-center justify-center font-bold text-xs shadow-md border-2 border-white animate-bounce">
                2
              </div>
              <span className="text-[10px] font-bold bg-[#A03E2D] text-white px-1.5 py-0.5 rounded shadow mt-1">
                Pottery Studio
              </span>
            </div>

            <div className="absolute bottom-4 left-32 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xs shadow-md border-2 border-white">
                3
              </div>
              <span className="text-[10px] font-bold bg-white/90 px-1.5 py-0.5 rounded shadow mt-1">
                Chai & Bites
              </span>
            </div>

            {/* Map overlays */}
            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-bold text-stone-700 shadow-xs flex items-center gap-1">
              <Navigation className="w-3 h-3 text-[#2D6A4F]" />
              <span>3.2 km total walking trail</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Saturday Schedule Timeline
            </h4>

            {/* Stop 1 */}
            <div className="bg-white rounded-2xl p-4 border border-stone-200/90 shadow-xs flex gap-3 relative">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center font-bold text-xs">
                  1
                </div>
                <div className="w-0.5 h-full bg-stone-200 mt-1" />
              </div>
              <div className="flex-1 pb-1">
                <span className="text-[11px] font-bold text-[#2D6A4F]">11:00 AM – 12:15 PM</span>
                <h5 className="font-bold text-sm text-stone-900">Third Wave Artisan Coffee</h5>
                <p className="text-xs text-stone-500">Morning brew & warm-up chat with squad</p>
              </div>
            </div>

            {/* Stop 2 */}
            <div className="bg-white rounded-2xl p-4 border-2 border-[#A03E2D]/50 shadow-xs flex gap-3 relative">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-[#A03E2D] text-white flex items-center justify-center font-bold text-xs">
                  2
                </div>
                <div className="w-0.5 h-full bg-stone-200 mt-1" />
              </div>
              <div className="flex-1 pb-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#A03E2D]">1:00 PM – 3:30 PM</span>
                  <span className="text-[10px] bg-[#A03E2D]/10 text-[#A03E2D] font-bold px-2 py-0.5 rounded-full">
                    Main Activity
                  </span>
                </div>
                <h5 className="font-bold text-sm text-stone-900">Pottery Wheel & Terracotta Clay Workshop</h5>
                <p className="text-xs text-stone-500">Koramangala 4th Block · 4 spots reserved</p>
              </div>
            </div>

            {/* Stop 3 */}
            <div className="bg-white rounded-2xl p-4 border border-stone-200/90 shadow-xs flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xs">
                  3
                </div>
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-bold text-amber-700">4:00 PM – 5:30 PM</span>
                <h5 className="font-bold text-sm text-stone-900">CTR Benne Dose & Masala Chai Stop</h5>
                <p className="text-xs text-stone-500">Wrap up and stamp collection celebration</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('screen_17_confirmed_plan')}
            className="w-full py-3.5 px-4 rounded-xl bg-[#2D6A4F] hover:bg-[#23533e] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 active:scale-[0.99] transition-transform"
          >
            <span>Confirm Plan & Notify Squad</span>
            <Check className="w-4 h-4" />
          </button>
        </div>

        <BottomNavBar activeTab="meetups" onSelectTab={() => {}} onNavigate={onNavigate} />
      </div>
    );
  }

  /* -------------------------------------------------------------
     SCREEN 17: CONFIRMED PLAN
  ------------------------------------------------------------- */
  return (
    <div className="flex flex-col min-h-full bg-[#FAF7F2] text-[#1E1E1E]">
      <ScreenHeader
        title="Plan Confirmed"
        subtitle="Screen 17 · Adventure Ready"
        onBack={() => onNavigate('screen_16_itinerary_map')}
        onNavigate={onNavigate}
      />

      <div className="flex-1 p-5 space-y-4 pb-24 overflow-y-auto">
        {/* Confirmation Card */}
        <div className="bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] text-white rounded-3xl p-6 text-center shadow-lg relative overflow-hidden">
          <div className="w-16 h-16 rounded-full bg-white/20 mx-auto flex items-center justify-center mb-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-200" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">
            Meetup Locked & Confirmed
          </span>
          <h2 className="text-xl font-bold font-serif mt-1">Saturday Koramangala Clay & Chai</h2>
          <p className="text-xs text-emerald-100/90 mt-2">
            This Saturday, Oct 24 · Starting at 11:00 AM · 4 Explorers Attending
          </p>

          <div className="flex justify-center -space-x-2 mt-4">
            {initialSquadMembers.slice(0, 4).map((m) => (
              <div
                key={m.id}
                className={`w-9 h-9 rounded-full ${m.avatarColor} border-2 border-[#1B4332] flex items-center justify-center font-bold text-xs shadow-xs`}
              >
                {m.name[0]}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => onShowToast('Added event to Google Calendar / Apple Calendar!')}
            className="p-3 bg-white rounded-xl border border-stone-200 text-stone-800 text-xs font-bold flex items-center justify-center gap-2 hover:bg-stone-50 transition-colors shadow-xs"
          >
            <Calendar className="w-4 h-4 text-[#2D6A4F]" />
            <span>Add to Calendar</span>
          </button>

          <button
            onClick={() => onShowToast('Squad WhatsApp group chat pinged!')}
            className="p-3 bg-white rounded-xl border border-stone-200 text-stone-800 text-xs font-bold flex items-center justify-center gap-2 hover:bg-stone-50 transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#128C7E]" />
            <span>Squad Chat</span>
          </button>
        </div>

        {/* Start Adventure Quest Bridge */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
          <div className="flex items-center gap-2 font-bold text-xs text-amber-900 mb-1">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Live Adventure Mode Available</span>
          </div>
          <p className="text-xs text-amber-800 leading-relaxed mb-3">
            When you arrive at Koramangala, switch to the Active Adventure Board to unlock live mission clues, verify checkpoints with photo challenges, and earn your passport stamp!
          </p>
          <button
            onClick={() => onNavigate('screen_18_active_board')}
            className="w-full py-3 rounded-xl bg-[#A03E2D] hover:bg-[#833224] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <span>Launch Live Quest Adventure (Screen 18)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <BottomNavBar activeTab="meetups" onSelectTab={() => {}} onNavigate={onNavigate} />
    </div>
  );
};
