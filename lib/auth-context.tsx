'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { apiClient } from './api-client';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'student' | 'teacher' | 'admin';
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize auth state on mount
  useEffect(() => {
    initializeAuth();
  }, []);

  // Listen for unauthorized events
  useEffect(() => {
    const handleUnauthorized = () => {
      setUser(null);
      apiClient.clearToken();
    };

    window.addEventListener('unauthorized', handleUnauthorized);
    return () => window.removeEventListener('unauthorized', handleUnauthorized);
  }, []);

  async function initializeAuth() {
    try {
      setLoading(true);
      // Check if user has valid session
      const token = localStorage.getItem('authToken');

      if (token) {
        apiClient.setToken(token);
        // Verify token is still valid by fetching user profile
        const userData = await apiClient.get<User>('/auth/me');
        setUser(userData);
      }
    } catch (err) {
      console.error('Auth initialization error:', err);
      localStorage.removeItem('authToken');
      apiClient.clearToken();
      setError('Failed to restore session');
    } finally {
      setLoading(false);
    }
  }

  async function login(email: string, password: string) {
    try {
      setError(null);
      const response = await apiClient.post<{ token: string; user: User }>('/auth/login', {
        email,
        password,
      });

      const { token, user: userData } = response;
      localStorage.setItem('authToken', token);
      apiClient.setToken(token);
      setUser(userData);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Login failed. Please check your credentials.';
      setError(message);
      throw err;
    }
  }

  async function signup(email: string, password: string, name: string) {
    try {
      setError(null);
      const response = await apiClient.post<{ token: string; user: User }>('/auth/signup', {
        email,
        password,
        name,
      });

      const { token, user: userData } = response;
      localStorage.setItem('authToken', token);
      apiClient.setToken(token);
      setUser(userData);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Signup failed. Please try again.';
      setError(message);
      throw err;
    }
  }

  async function logout() {
    try {
      setError(null);
      // Call logout endpoint
      await apiClient.post('/auth/logout', {});
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      localStorage.removeItem('authToken');
      apiClient.clearToken();
      setUser(null);
    }
  }

  async function refreshUser() {
    try {
      const userData = await apiClient.get<User>('/auth/me');
      setUser(userData);
    } catch (err) {
      console.error('Error refreshing user:', err);
      setError('Failed to refresh user data');
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
