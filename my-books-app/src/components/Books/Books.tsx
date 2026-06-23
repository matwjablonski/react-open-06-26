import { useEffect, useRef, useState } from "react";
import type { BookType } from "../../types/book";
import { Book } from "../Book/Book";

type BooksProps = {
    books: BookType[];
    setState: React.Dispatch<React.SetStateAction<number[]>>;
    readBooksIds: number[];
}

export const Books = ({ books, setState, readBooksIds }: BooksProps) => {
    const listRef = useRef<HTMLUListElement>(null);
    const [haveEnoghBooks, setHaveEnoughBooks] = useState(false);

    useEffect(() => {
        if (listRef.current) {
            const { height } = listRef.current.getBoundingClientRect();

            if (height > 500) {
                setHaveEnoughBooks(true)
            }   
        }
    })

    // const shouldHaveMoreBooks = () => {
    //     if (listRef && listRef?.current) {
    //         const { height } = listRef.current.getBoundingClientRect();

    //         if (height < 500) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    return (
        <>
            {haveEnoghBooks ? <p>Masz masę książek</p> : <p>Zbieraj dalej</p>}
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
        </>
    )
}
