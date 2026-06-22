import type { BookType } from "../../data/books";
import { Book } from "../Book/Book";

type BooksProps = {
    books: BookType[];
}

export const Books = ({ books }: BooksProps) => (
    <ul>
        {books.map((book) => (
            <li key={`book-${book.id}`}>
                <Book book={book} />
            </li>
        ))}
    </ul>
)
