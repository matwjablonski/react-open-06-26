import './App.css'
import { Books } from './components/Books/Books';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { books } from './data/books';

const author = 'Mateusz Jabłoński';

function App() {

  return (
    <>
      <Header />
      <Books books={books} />
      <Footer author={author} />
    </>
  )
}

export default App
