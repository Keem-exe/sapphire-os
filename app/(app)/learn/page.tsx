/**
 * Learn Page (Skill Tree)
 * Phase 4: Skill Tree & Learn Tab
 * Status: Placeholder - To be implemented
 */

export default function LearnPage() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Learn</h1>
      <p className="text-gray-600 dark:text-gray-400">Phase 4: Skill Tree & Lessons</p>

      <div className="space-y-3 mt-6">
        <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
          <h3 className="font-semibold">Mathematics</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">CSEC Mathematics curriculum</p>
          <div className="mt-2 flex gap-1">
            <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">Mastered: 3</span>
            <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">In Progress: 2</span>
            <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded">Locked: 5</span>
          </div>
        </div>

        <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
          <h3 className="font-semibold">English</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">CSEC English curriculum</p>
          <div className="mt-2 flex gap-1">
            <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">Mastered: 1</span>
            <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">In Progress: 1</span>
            <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded">Locked: 8</span>
          </div>
        </div>
      </div>
    </div>
  );
}
