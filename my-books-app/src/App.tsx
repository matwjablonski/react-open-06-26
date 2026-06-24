import './App.css'
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { BookPage } from './pages/BookPage';
import { ReadersPage } from './pages/ReadersPage';
import { ContactPage } from './pages/ContactPage';
import { BooksPage } from './pages/BooksPage';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { NoAccessPage } from './pages/NoAccess';
// import { useApi } from './hooks/useApi';

const author = 'Mateusz Jabłoński';

function App() {

  const isAuthenticated = true;

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout author={author} />}>
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
    </>
  )
}

export default App