import { useEffect, useState } from "react";
import type { BookType } from "../types/book";

type UseBooksState = {
    books: BookType[];
    loading: boolean;
    error: string | null;
}

export const useBooks = () => {
    const [state, setState] = useState<UseBooksState>({
        books: [],
        loading: false,
        error: null
    });

    const fetchBooks = async () => {
        setState((prevState) => ({ ...prevState, loading: true }));

        try {
            const response = await fetch('/books.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: BookType[] = await response.json();
            setState((prevState) => ({ ...prevState, books: data }));
        } catch (error) {
            setState((prevState) => ({ ...prevState, error: (error as Error).message }));
        } finally {
            setState((prevState) => ({ ...prevState, loading: false }));
        }
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    return state;
}