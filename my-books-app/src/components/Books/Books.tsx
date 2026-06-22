import { useEffect, useRef } from "react";
import type { BookType } from "../../types/book";
import { Book } from "../Book/Book";

type BooksProps = {
    books: BookType[];
    setState: React.Dispatch<React.SetStateAction<number[]>>;
    readBooksIds: number[];
}

export const Books = ({ books, setState, readBooksIds }: BooksProps) => {
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (listRef.current) {
            const metrics =listRef.current.getBoundingClientRect();

            console.log('listRef.current', listRef.current);
            console.log('metrics', metrics);
        }
    })

    return (
        <ul ref={listRef}>
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
}
