import type { BookType } from "../../data/books";

type BookProps = {
    book: BookType;
}

export const Book = ({ book }: BookProps) => (
    <div>
        <h2>{book.title}</h2>
        <p>Autor: {book.author}</p>
        {book.publicationDate && <p>Data publikacji: {book.publicationDate}</p>}
    </div>
)