/**
 * Profile Page
 * Phase 8: Profile & Analytics
 * Status: Placeholder - To be implemented
 */

'use client';

import { useAuth } from '@/lib/auth-context';

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Profile</h1>

      {user ? (
        <div className="space-y-4 mt-6">
          <div className="p-4 bg-gray-50 dark:bg-gray-900/30 rounded-lg border border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
              <div>
                <h2 className="font-semibold text-lg">{user.name}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Member since {new Date(user.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-xs text-gray-600 dark:text-gray-400">Stats</p>
              <p className="text-lg font-bold mt-1">Phase 8</p>
            </div>
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <p className="text-xs text-gray-600 dark:text-gray-400">Achievements</p>
              <p className="text-lg font-bold mt-1">Phase 8</p>
            </div>
          </div>

          <div className="space-y-2">
            <button className="w-full p-3 bg-gray-100 dark:bg-gray-900 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-800">
              Settings
            </button>
            <button className="w-full p-3 bg-gray-100 dark:bg-gray-900 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-800">
              View Analytics
            </button>
            <button className="w-full p-3 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg text-sm font-medium hover:bg-red-200 dark:hover:bg-red-900/40">
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="p-4 text-center text-gray-600 dark:text-gray-400">
          <p>Please log in to view your profile</p>
        </div>
      )}
    </div>
  );
}
