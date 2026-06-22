import type { BookType } from "../../types/book";
import { Book } from "../Book/Book";

type BooksProps = {
    books: BookType[];
    setState: React.Dispatch<React.SetStateAction<number[]>>;
    readBooksIds: number[];
}

export const Books = ({ books, setState, readBooksIds }: BooksProps) => (
    <ul>
        {books.map((book) => (
            <li key={`book-${book.id}`}>
                <Book 
                    // title={book.title} 
                    // author={book.author} 
                    // id={book.id} 
                    // publicationDate={book.publicationDate} 
                    {...book}
                    setState={setState} 
                    isRead={readBooksIds.includes(book.id)}
                />
            </li>
        ))}
    </ul>
)
