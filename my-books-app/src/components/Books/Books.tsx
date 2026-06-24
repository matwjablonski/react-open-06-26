import { useEffect, useReducer, useRef, useState } from "react";
import type { BookType } from "../../types/book";
import { Book } from "../Book/Book";
import { Notification } from "../Notification/Notification";

type BooksProps = {
    books: BookType[];
    setState: React.Dispatch<React.SetStateAction<number[]>>;
    readBooksIds: number[];
}

type BooksReducerAction = {
    type: 'REMOVE_BOOK',
    payload: {
        id: number;
    }
};

const booksReducer = (state: BookType[], action: BooksReducerAction): BookType[] => {
    switch (action.type) {
        case 'REMOVE_BOOK':
            return state.filter((book) => book.id !== action.payload.id);
        default: 
            return state;
    }
}

export const Books = ({ books, setState, readBooksIds }: BooksProps) => {
    const listRef = useRef<HTMLUListElement>(null);
    const [haveEnoghBooks, setHaveEnoughBooks] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const [ updatedBooks, dispatch ] = useReducer(booksReducer, books);

    useEffect(() => {
        if (listRef.current) {
            const { height } = listRef.current.getBoundingClientRect();

            if (height > 500) {
                setHaveEnoughBooks(true)
            }   
        }
    }, [updatedBooks]);

    const handleRemoveBook = (id: number) => {
        dispatch({ type: 'REMOVE_BOOK', payload: { id } });
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    }

    // const shouldHaveMoreBooks = () => {
    //     if (listRef && listRef?.current) {
    //         const { height } = listRef.current.getBoundingClientRect();

    //         if (height < 500) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    useEffect(() => {
        document.title = `Masz ${updatedBooks.length} książek`;

        return () => {
            document.title = 'Witaj w aplikacji książkowej';
        }
    }, [updatedBooks.length]);

    return (
        <>
            {haveEnoghBooks ? <p>Masz masę książek</p> : <p>Zbieraj dalej</p>}
            <ul ref={listRef}>
                {updatedBooks.map((book) => (
                    <li key={`book-${book.id}`}>
                        <Book 
                            // title={book.title} 
                            // author={book.author} 
                            // id={book.id} 
                            // publicationDate={book.publicationDate} 
                            {...book}
                            setState={setState} 
                            isRead={readBooksIds.includes(book.id)}
                            onRemoveBook={handleRemoveBook}
                        />
                    </li>
                ))}
            </ul>
            {showNotification && <Notification message="Książka została usunięta" type="success" />}
        </>
    )
}
