import { useState } from "react";
import type { BookType } from "../../types/book";
import { Button } from "../Button/Button";

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
                <Button onClick={handleAddToReadBooks}>Dodaj do przeczytanych</Button>
            ) : (
                <Button onClick={handleRemoveFromReadBooks}>Usuń z przeczytanych</Button>
            )}
            <p>Oddano głosów: {votes}</p>
            <Button onClick={() => setVotes((prevValue) => prevValue + 1)}>Głosuj na tę pozycję</Button>
            <Button onClick={() => onRemoveBook?.(id)}>Usuń książkę z list</Button>
        </div>
    )
}