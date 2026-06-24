import './App.css'
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { lazy, Suspense, useState } from 'react';
// import { useApi } from './hooks/useApi';

const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const BooksPage = lazy(() => import('./pages/BooksPage').then(module => ({ default: module.BooksPage })));
const BookPage = lazy(() => import('./pages/BookPage').then(module => ({ default: module.BookPage })));
const ReadersPage = lazy(() => import('./pages/ReadersPage').then(module => ({ default: module.ReadersPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const NoAccessPage = lazy(() => import('./pages/NoAccess').then(module => ({ default: module.NoAccessPage })));

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