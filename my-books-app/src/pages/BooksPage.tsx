import { useState } from "react";
import { useBooks } from "../hooks/useBooks";
import { Books } from "../components/Books/Books";

export const BooksPage = () => {
    const [readBooksIds, setReadBooksIds] = useState<number[]>([]);
    const [showBooks, setShowBooks] = useState(true);
    const { books, loading } = useBooks();

    return (
        <div>
            <button onClick={() => setShowBooks((prev) => !prev)}>Pokaż / ukryj książki</button>
            {showBooks && !loading && <Books books={books} setState={setReadBooksIds} readBooksIds={readBooksIds} />}
        </div>
    )
}