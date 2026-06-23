/**
 * Dashboard Page
 * Home screen with gamification elements
 * Phase 1: Layout & Navigation complete
 * Phase 3: Home Dashboard - To be implemented
 */

'use client';

export default function DashboardPage() {
  return (
    <div className="min-h-full bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 sm:px-6 pt-6 pb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Welcome back! 👋</h1>
        <p className="text-blue-100">Continue your learning journey with Sapphire OS</p>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 py-8 max-w-4xl mx-auto">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
          <StatCard label="Streak" value="0" icon="🔥" />
          <StatCard label="Level" value="1" icon="⭐" />
          <StatCard label="XP" value="0" icon="✨" />
        </div>

        {/* Main Cards Grid */}
        <div className="grid gap-4 md:grid-cols-2 mb-8">
          <CardSection
            title="Streak Card"
            description="Track your learning streak"
            gradient="from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20"
            border="border-blue-200 dark:border-blue-800"
            icon="🔥"
          >
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">0</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">day streak</p>
          </CardSection>

          <CardSection
            title="XP Progress"
            description="Experience points and level"
            gradient="from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20"
            border="border-purple-200 dark:border-purple-800"
            icon="✨"
          >
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Level 1</span>
                <span>0 / 100 XP</span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                  style={{ width: '0%' }}
                />
              </div>
            </div>
          </CardSection>

          <CardSection
            title="Continue Learning"
            description="Resume your last lesson"
            gradient="from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20"
            border="border-green-200 dark:border-green-800"
            icon="📚"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">No lessons in progress</p>
            <a
              href="/learn"
              className="inline-block mt-3 px-3 py-1 bg-green-500 text-white rounded text-sm font-medium hover:bg-green-600 transition-colors"
            >
              Start Learning →
            </a>
          </CardSection>

          <CardSection
            title="AI Coach"
            description="Get personalized help anytime"
            gradient="from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20"
            border="border-orange-200 dark:border-orange-800"
            icon="🤖"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">Ask your AI coach for help</p>
            <a
              href="/coach"
              className="inline-block mt-3 px-3 py-1 bg-orange-500 text-white rounded text-sm font-medium hover:bg-orange-600 transition-colors"
            >
              Chat Now →
            </a>
          </CardSection>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            <QuickLink href="/learn" label="📚 Learn" />
            <QuickLink href="/coach" label="🤖 Coach" />
            <QuickLink href="/community" label="👥 Community" />
            <QuickLink href="/profile" label="👤 Profile" />
            <QuickLink href="#" label="⚙️ Settings" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-3 sm:p-4 text-center hover:shadow-md transition-shadow">
      <div className="text-2xl sm:text-3xl mb-1">{icon}</div>
      <p className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{label}</p>
    </div>
  );
}

interface CardSectionProps {
  title: string;
  description: string;
  gradient: string;
  border: string;
  icon: string;
  children: React.ReactNode;
}

function CardSection({
  title,
  description,
  gradient,
  border,
  icon,
  children,
}: CardSectionProps) {
  return (
    <div
      className={`${gradient} ${border} rounded-lg border p-6 transition-all hover:shadow-md`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>
        <span className="text-3xl">{icon}</span>
      </div>
      {children}
    </div>
  );
}

function QuickLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-center"
    >
      {label}
    </a>
  );
}
