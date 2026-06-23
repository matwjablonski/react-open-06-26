import { useState } from "react";
import type { BookType } from "../../types/book";

type BookProps = {
    setState: React.Dispatch<React.SetStateAction<number[]>>;
    isRead: boolean;
    onRemoveBook?: (id: number) => void;
} & Omit<BookType, 'polishTranslationDate'>;

export const Book = ({ title, author, id, publicationDate, setState, isRead = false, onRemoveBook }: BookProps) => {
    const [votes, setVotes] = useState(() => Math.round(author.split(' ').pop()?.length ?? 0 * 2 / 5));
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
            <p>Oddano głosów: {votes}</p>
            <button onClick={() => setVotes((prevValue) => prevValue + 1)}>Głosuj na tę pozycję</button>
            <button onClick={() => onRemoveBook?.(id)}>Usuń książkę z list</button>
        </div>
    )
}