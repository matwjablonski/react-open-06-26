import { useState } from 'react';
import './App.css'
import { Books } from './components/Books/Books';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { StateForm } from './components/StateForm/StateForm';
import { RefForm } from './components/RefForm/RefForm';
import { ContactForm } from './components/ContactForm/ContactForm';
import { UserInfo } from './components/UserInfo/UserInfo';
import { useBooks } from './hooks/useBooks';
import { useReadersQuery } from './hooks/useReadersQuery';
// import { useApi } from './hooks/useApi';

const author = 'Mateusz Jabłoński';

function App() {
  const [readBooksIds, setReadBooksIds] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showBooks, setShowBooks] = useState(true);
  const { books, loading, error } = useBooks();

  const { data: readers, isLoading: readersLoading, error: readersError } = useReadersQuery();

  // useApi('https://jsonplaceholder.typicode.com/users');

  console.log('readers', readers);
  

  return (
    <>
      <ContactForm />
      <input type="text" placeholder='Szukaj książki...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <Header>
        <UserInfo name={author} />
      </Header>
      <button onClick={() => setShowBooks((prev) => !prev)}>Pokaż / ukryj książki</button>
      {showBooks && !loading && <Books books={books} setState={setReadBooksIds} readBooksIds={readBooksIds} />}
      <Footer author={author} />

      <StateForm>
        <div>!!!! tjestem tutaj</div>
      </StateForm>
      <RefForm />
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