import './App.css'
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { BookPage } from './pages/BookPage';
import { ReadersPage } from './pages/ReadersPage';
import { ContactPage } from './pages/ContactPage';
import { BooksPage } from './pages/BooksPage';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { NoAccessPage } from './pages/NoAccess';
import { lazy, Suspense, useState } from 'react';
// import { useApi } from './hooks/useApi';

const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));

const author = 'Mateusz Jabłoński';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    setIsAuthenticated(false);
  }

  return (
    <>
      <Suspense fallback={<div>Ładowanie...</div>}>
        <Routes>
          <Route path="/" element={
            <MainLayout
              author={author}
              onLogin={handleLogin}
              isAuthenticated={isAuthenticated}
              onLogout={handleLogout}
            />
          }>
            <Route index element={<HomePage />} />
            <Route path="books" element={<BooksPage />} />
            <Route path="books/:id" element={<BookPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="readers" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ReadersPage />
              </ProtectedRoute>
            } />
          </Route>
          <Route path="no-access" element={<NoAccessPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App