import type { BookType } from "../../data/books";
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
                <Book book={book} setState={setState} readBooksIds={readBooksIds} />
            </li>
        ))}
    </ul>
)
