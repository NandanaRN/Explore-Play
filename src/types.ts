export type ScreenId =
  | 'screen_01_welcome'
  | 'screen_02_interests'
  | 'screen_03_preferences'
  | 'screen_04_location'
  | 'screen_05_discover_home'
  | 'screen_06_swipe_discovery'
  | 'screen_07_match_result'
  | 'screen_08_activity_details'
  | 'screen_09_saved_discoveries'
  | 'screen_10_import_discovery'
  | 'screen_11_create_meetup'
  | 'screen_12_invite_friends'
  | 'screen_13_group_preferences'
  | 'screen_14_group_matches'
  | 'screen_15_voting_shortlist'
  | 'screen_16_itinerary_map'
  | 'screen_17_confirmed_plan'
  | 'screen_18_active_adventure_board'
  | 'screen_18_active_board'
  | 'screen_19_location_mission'
  | 'screen_20_mission_hint'
  | 'screen_21_mission_completed'
  | 'screen_22_checkpoint_map'
  | 'screen_23_adventure_completion'
  | 'screen_24_city_passport_overview'
  | 'screen_24_passport_overview'
  | 'screen_25_stamp_badge_collection'
  | 'screen_25_stamp_collection'
  | 'screen_26_experience_memory'
  | 'screen_27_notifications_pings'
  | 'screen_27_notifications'
  | 'screen_28_mystery_weekend_drop'
  | 'screen_28_mystery_drop'
  | 'screen_29_explorer_profile'
  | 'screen_29_profile'
  | 'screen_30_app_settings'
  | 'screen_30_settings';


export type MainTab = 'discover' | 'saved' | 'meetups' | 'passport' | 'profile';
export type ViewMode = 'mobile' | 'responsive';

export interface SpotItem {
  id: string;
  title: string;
  name?: string;
  category: string;
  categoryBadge?: string;
  area: string;
  neighborhood?: string;
  rating: number;
  reviewsCount?: number;
  spend?: string;
  priceLevel?: string;
  duration?: string;
  estimatedTime?: string;
  imageUrl?: string;
  image?: string;
  squadMatchPct?: number;
  whyRec?: string;
  tags?: string[];
  description: string;
  isSaved?: boolean;
  votesCount?: number;
  votedBy?: string[];
  isTopSquadFit?: boolean;
}

export interface SquadMember {
  id: string;
  name: string;
  handle: string;
  avatarColor: string;
  avatarInitials?: string;
  avatarImg?: string;
  status?: 'accepted' | 'pending' | 'declined';
  role?: string;
  likes?: string;
  budgetCap?: number;
}

export interface CheckpointStop {
  id?: string;
  order?: number;
  name?: string;
  challenge?: string;
  status?: 'completed' | 'active' | 'locked';
  stopNum?: number;
  time?: string;
  duration?: string;
  title?: string;
  venue?: string;
  tagline?: string;
  bookingStatus?: string;
  priceNote?: string;
  walkNote?: string;
  completed?: boolean;
}

export interface PassportStamp {
  id: string;
  title: string;
  location?: string;
  neighborhood?: string;
  dateInked?: string;
  unlockedDate?: string;
  badgeType?: 'stamps' | 'badges' | 'secret';
  category?: string;
  isLocked?: boolean;
  colorScheme?: 'terracotta' | 'lavender' | 'yellow' | 'sand' | 'gold' | 'locked';
  stampSymbol?: string;
  icon?: string;
  rarity?: string;
  xpValue?: number;
  description?: string;
  linkedMemory?: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  body: string;
  timestamp: string;
  unread: boolean;
  type: 'squad_ping' | 'mystery_drop' | 'stamp_unlocked' | 'invite' | 'poll';
  screenLink?: ScreenId;
}
