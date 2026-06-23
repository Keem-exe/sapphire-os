/**
 * AI Coach Page
 * Phase 6: AI Coach
 * Status: Placeholder - To be implemented
 */

export default function CoachPage() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">AI Coach</h1>
      <p className="text-gray-600 dark:text-gray-400">Phase 6: Chat interface coming soon</p>

      <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white">
            🤖
          </div>
          <div>
            <h3 className="font-semibold">Coach</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">AI-powered learning assistant</p>
          </div>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Hello! I'm your personal AI coach. I'm here to help you understand concepts, answer your questions, and guide you through your learning journey.
        </p>
      </div>

      <div className="space-y-2 mt-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">Quick Actions (Phase 6):</p>
        <div className="grid grid-cols-2 gap-2">
          <button className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded text-sm font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
            Explain Concept
          </button>
          <button className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded text-sm font-medium text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50">
            Ask Question
          </button>
          <button className="p-2 bg-green-100 dark:bg-green-900/30 rounded text-sm font-medium text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50">
            Get Tips
          </button>
          <button className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded text-sm font-medium text-orange-700 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-900/50">
            Review Topic
          </button>
        </div>
      </div>
    </div>
  );
}
