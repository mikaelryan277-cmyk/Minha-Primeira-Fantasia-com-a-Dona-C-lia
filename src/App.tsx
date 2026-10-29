import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, ProgressProvider, useAuth } from './context/AppContext';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { ContinueWatchingPage } from './pages/ContinueWatchingPage';
import { LessonsPage } from './pages/LessonsPage';
import { LessonPage } from './pages/LessonPage';
import { ContentLibraryPage } from './pages/ContentLibraryPage';
import { SettingsPage } from './pages/SettingsPage';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
            <Route path="/continue" element={<ProtectedRoute><ContinueWatchingPage /></ProtectedRoute>} />
            <Route path="/lessons/:id" element={<ProtectedRoute><LessonPage /></ProtectedRoute>} />
            <Route path="/library" element={<ProtectedRoute><ContentLibraryPage /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
          </Routes>
        </BrowserRouter>
      </ProgressProvider>
    </AuthProvider>
  );
}
