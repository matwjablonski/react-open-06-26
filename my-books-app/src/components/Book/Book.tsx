import type { BookType } from "../../types/book";

type BookProps = {
    setState: React.Dispatch<React.SetStateAction<number[]>>;
    isRead: boolean;
} & Omit<BookType, 'polishTranslationDate'>;

export const Book = ({ title, author, id, publicationDate, setState, isRead = false }: BookProps) => {
    const handleRemoveFromReadBooks = () => {
        setState((prevValue) => prevValue.filter((bookId) => bookId !== id));
    }

    const handleAddToReadBooks = () => {
        setState((prevValue) => Array.from(new Set([...prevValue, id])));
    }

    return (
        <div>
            <h2>{title}</h2>
            <p>Autor: {author}</p>
            {publicationDate && <p>Data publikacji: {publicationDate}</p>}
            {!isRead ? (
                <button onClick={handleAddToReadBooks}>Dodaj do przeczytanych</button>
            ) : (
                <button onClick={handleRemoveFromReadBooks}>Usuń z przeczytanych</button>
            )}
        </div>
    )
}