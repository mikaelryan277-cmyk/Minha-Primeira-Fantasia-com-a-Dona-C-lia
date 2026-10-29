import React, { createContext, useContext, useState, useEffect } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  login: (username: string) => void;
  logout: () => void;
};

type UserSettings = {
  name: string;
  avatar: string;
  theme: 'light' | 'dark' | 'system';
  reduceMotion: boolean;
};

type ProgressContextType = {
  completedModules: number[];
  toggleModule: (id: number) => void;
  resetProgress: () => void;
  userSettings: UserSettings;
  updateSettings: (settings: Partial<UserSettings>) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username: string) => {
    if (username === 'costureira') {
      setIsAuthenticated(true);
    }
  };

  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedModules, setCompletedModules] = useState<number[]>(() => {
    const saved = localStorage.getItem('course-progress');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [userSettings, setUserSettings] = useState<UserSettings>(() => {
    const saved = localStorage.getItem('user-settings');
    return saved ? JSON.parse(saved) : { name: 'Costureira', avatar: '🧵', theme: 'light', reduceMotion: false };
  });

  useEffect(() => {
    localStorage.setItem('course-progress', JSON.stringify(completedModules));
  }, [completedModules]);

  useEffect(() => {
    localStorage.setItem('user-settings', JSON.stringify(userSettings));
  }, [userSettings]);

  const toggleModule = (id: number) => {
    setCompletedModules(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const resetProgress = () => setCompletedModules([]);
  
  const updateSettings = (settings: Partial<UserSettings>) => {
    setUserSettings(prev => ({ ...prev, ...settings }));
  };

  return (
    <ProgressContext.Provider value={{ completedModules, toggleModule, resetProgress, userSettings, updateSettings }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress must be used within ProgressProvider');
  return context;
};
