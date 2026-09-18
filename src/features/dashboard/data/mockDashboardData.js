export const mockStudentData = {
  name: 'Alex Mercer',
  handle: '@alexm_coder',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  level: 4,
  levelTitle: 'Code Explorer',
  currentXP: 840,
  nextLevelXP: 1000,
  streakDays: 7,
  rank: 12,
  completedChallengesCount: 42,
  topicsMasteredCount: 8,
}

export const mockWorldsData = [
  {
    id: 'programming',
    title: 'PROGRAMMING',
    iconName: 'Code2',
    description: 'Build strong programming fundamentals through challenges.',
    completedLevels: 6,
    totalLevels: 10,
    progressPercentage: 60,
    route: '/programming',
    accentColor: 'from-indigo-500 to-purple-600',
    glowColor: 'indigo',
    badgeText: 'Core Track',
  },
  {
    id: 'dsa',
    title: 'DSA',
    iconName: 'Cpu',
    description: 'Master data structures and algorithms by solving problems.',
    completedLevels: 3,
    totalLevels: 15,
    progressPercentage: 20,
    route: '/dsa',
    accentColor: 'from-purple-500 to-pink-600',
    glowColor: 'purple',
    badgeText: 'High Impact',
  },
  {
    id: 'web',
    title: 'WEB',
    iconName: 'Globe',
    description: 'Learn HTML, CSS and JavaScript by building interactive experiences.',
    completedLevels: 2,
    totalLevels: 10,
    progressPercentage: 20,
    route: '/web',
    accentColor: 'from-cyan-500 to-blue-600',
    glowColor: 'cyan',
    badgeText: 'Full Stack',
  },
]

export const mockContinueQuestData = {
  id: 'quest-loops-04',
  lessonTitle: 'Loops — Level 04',
  category: 'Programming',
  difficulty: 'Easy',
  rewardXP: 50,
  completedSubTasks: 3,
  totalSubTasks: 5,
  route: '/challenges',
}

export const mockDailyChallengeData = {
  id: 'daily-array-max',
  title: 'Find the largest element in an array',
  difficulty: 'Easy',
  rewardXP: 50,
  estimatedTime: '10 min',
  route: '/challenges',
}

export const mockAchievementsData = [
  {
    id: 'first-code',
    title: 'First Code',
    status: 'Unlocked',
    iconName: 'Trophy',
    isUnlocked: true,
    unlockedAt: '3 days ago',
  },
  {
    id: '7-day-streak',
    title: '7 Day Streak',
    status: 'Active',
    iconName: 'Flame',
    isUnlocked: true,
    unlockedAt: 'Today',
  },
  {
    id: 'array-explorer',
    title: 'Array Explorer',
    status: 'Unlocked',
    iconName: 'Layers',
    isUnlocked: true,
    unlockedAt: 'Yesterday',
  },
  {
    id: 'speed-coder',
    title: 'Speed Coder',
    status: 'Unlocked',
    iconName: 'Zap',
    isUnlocked: true,
    unlockedAt: '4 days ago',
  },
  {
    id: 'dsa-warrior',
    title: 'DSA Warrior',
    status: 'Locked',
    iconName: 'Shield',
    isUnlocked: false,
    unlockedAt: 'Complete 5 DSA Levels',
  },
]

export const mockRecentActivityData = [
  {
    id: 'act-1',
    title: 'Completed Array Challenge',
    reward: '+50 XP',
    timeAgo: '2 hours ago',
    type: 'challenge',
  },
  {
    id: 'act-2',
    title: 'Unlocked "First Code" badge',
    reward: 'Badge',
    timeAgo: 'Yesterday',
    type: 'achievement',
  },
  {
    id: 'act-3',
    title: 'Completed Operators',
    reward: '+40 XP',
    timeAgo: 'Yesterday',
    type: 'lesson',
  },
  {
    id: 'act-4',
    title: 'Completed Variables',
    reward: '+30 XP',
    timeAgo: '2 days ago',
    type: 'lesson',
  },
]
