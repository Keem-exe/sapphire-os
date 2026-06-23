/**
 * Dashboard Page
 * Phase 3: Home Dashboard
 * Status: Placeholder - To be implemented
 */

export default function DashboardPage() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-600 dark:text-gray-400">Phase 3: Coming soon</p>

      <div className="grid gap-4 mt-6">
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold">Streak Card</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Track your learning streak</p>
        </div>
        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
          <h3 className="font-semibold">XP Progress</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Experience points and level</p>
        </div>
        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="font-semibold">Continue Learning</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Resume your last lesson</p>
        </div>
      </div>
    </div>
  );
}
