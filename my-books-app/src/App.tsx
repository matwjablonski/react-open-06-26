import { useState } from 'react';
import './App.css'
import { Books } from './components/Books/Books';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { books } from './data/books';

const author = 'Mateusz Jabłoński';

function App() {
  const [readBooksIds, setReadBooksIds] = useState<number[]>([]);

  console.log('readBooksIds', readBooksIds);

  return (
    <>
      <Header />
      <Books books={books} setState={setReadBooksIds} readBooksIds={readBooksIds} />
      <Footer author={author} />
    </>
  )
}

export default App


// const Test = () => {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount((value) => value + 1);
//     setCount((value) => value + 1);
//     setCount((value) => value + 1);
//   }; // count = 3

//   const handleClick2 = () => {
//     setCount(count + 1);
//     setCount(count + 1);
//     setCount(count + 1);
//   }; // count = 1

//   return null;
// }