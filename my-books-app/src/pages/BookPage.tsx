import { useParams } from "react-router-dom";

export const BookPage = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            <h1>Book: {id}</h1>
        </div>
    )
}