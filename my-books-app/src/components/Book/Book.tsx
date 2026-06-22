import type { BookType } from "../../data/books";

type BookProps = {
    book: BookType;
    setState: React.Dispatch<React.SetStateAction<number[]>>;
    readBooksIds: number[];
}

export const Book = ({ book, setState, readBooksIds }: BookProps) => {
    const handleRemoveFromReadBooks = () => {
        setState((prevValue) => prevValue.filter((id) => id !== book.id));
    }

    const handleAddToReadBooks = () => {
        setState((prevValue) => Array.from(new Set([...prevValue, book.id])));
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <p>Autor: {book.author}</p>
            {book.publicationDate && <p>Data publikacji: {book.publicationDate}</p>}
            {!readBooksIds.includes(book.id) ? (
                <button onClick={handleAddToReadBooks}>Dodaj do przeczytanych</button>
            ) : (
                <button onClick={handleRemoveFromReadBooks}>Usuń z przeczytanych</button>
            )}
        </div>
    )
}