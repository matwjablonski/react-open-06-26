import './App.css'
import { Footer } from './components/Footer/Footer';
import { books } from './data/books';

const author = 'Mateusz Jabłoński';

function App() {

  return (
    <div>
      <h1>Witaj w naszej aplikacji książkowej</h1>
      <ul>
        {books.map((book) => (
          <li key={`book-${book.id}`}>{book.title} - {book.author}</li>
        ))}
      </ul>
      <Footer author={author} />
    </div>
  )
}

export default App
