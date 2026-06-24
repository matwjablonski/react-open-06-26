import { useState } from "react";
import { Input } from "../Input/Input"
import { Form } from "../Form/Form";
import { Button, ButtonSecondary } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../../slices/Search.slice";
import type { RootState } from "../../store/store";

export const Search = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const queries = useSelector((state: RootState) => state.search.queries);

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(searchActions.addQuery({ query }));
        setQuery("");
    }

    return (
        <>
            <Form onSubmit={handleSubmit} title="Wyszukiwarka książek">
                <Input label="Szukaj książki" type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
                <Button type="submit">Szukaj</Button>
            </Form>
            <h2>Lista ostatnich wyszukiwań</h2>
            <ul>
                {queries.map((q) => (
                    <li key={q}>{q} <ButtonSecondary onClick={() => dispatch(searchActions.removeQuery({ query: q }))}>Usuń</ButtonSecondary></li>
                ))}
            </ul>
            <ButtonSecondary onClick={() => dispatch(searchActions.clearQueries())}>Wyczyść historię wyszukiwań</ButtonSecondary>
        </>
    )
}