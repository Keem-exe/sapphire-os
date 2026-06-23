/**
 * App Layout
 * Protected routes with bottom navigation
 * Phase 1: To be implemented
 */

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col">
      {/* Header - Phase 1 */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="px-4 py-3">
          <h1 className="text-lg font-semibold">Sapphire OS</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto pb-20">{children}</main>

      {/* Bottom Navigation - Phase 1 */}
      <nav className="fixed bottom-0 left-0 right-0 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="flex justify-around h-16">
          <a href="/dashboard" className="flex flex-col items-center justify-center flex-1 text-xs">
            📊
          </a>
          <a href="/learn" className="flex flex-col items-center justify-center flex-1 text-xs">
            📚
          </a>
          <a href="/coach" className="flex flex-col items-center justify-center flex-1 text-xs">
            🤖
          </a>
          <a href="/community" className="flex flex-col items-center justify-center flex-1 text-xs">
            👥
          </a>
          <a href="/profile" className="flex flex-col items-center justify-center flex-1 text-xs">
            👤
          </a>
        </div>
      </nav>
    </div>
  );
}
