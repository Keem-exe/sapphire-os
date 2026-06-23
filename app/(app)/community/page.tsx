/**
 * Community Page (Leaderboards)
 * Phase 7: Community & Leaderboards
 * Status: Placeholder - To be implemented
 */

export default function CommunityPage() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Community</h1>
      <p className="text-gray-600 dark:text-gray-400">Phase 7: Leaderboards & Challenges</p>

      <div className="mt-6 space-y-3">
        <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <h3 className="font-semibold text-sm">🏆 Weekly Leaderboard</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Top performers this week</p>
        </div>

        <div className="p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200 dark:border-pink-800">
          <h3 className="font-semibold text-sm">⚡ Challenges</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Complete challenges and earn badges</p>
        </div>

        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="font-semibold text-sm">👥 Study Groups</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Join and collaborate with peers</p>
        </div>

        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-sm">🎯 Subject Rankings</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Compete in specific subjects</p>
        </div>
      </div>
    </div>
  );
}
