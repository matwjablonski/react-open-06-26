import { useState } from "react";
import { useBooks } from "../hooks/useBooks";
import { Books } from "../components/Books/Books";
import { ButtonSecondary } from "../components/Button/Button";

export const BooksPage = () => {
    const [readBooksIds, setReadBooksIds] = useState<number[]>([]);
    const [showBooks, setShowBooks] = useState(true);
    const { books, loading } = useBooks();

    return (
        <div>
            <ButtonSecondary onClick={() => setShowBooks((prev) => !prev)}>Pokaż / ukryj książki</ButtonSecondary>
            {showBooks && !loading && <Books books={books} setState={setReadBooksIds} readBooksIds={readBooksIds} />}
        </div>
    )
}