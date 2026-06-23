import { useReadersQuery } from "../hooks/useReadersQuery";

export const ReadersPage = () => {
    // useApi('https://jsonplaceholder.typicode.com/users');
    const { data: readers, isLoading: readersLoading, error: readersError } = useReadersQuery();

    return (
        <div>
            <h1>Readers</h1>
            {readersLoading && <p>Loading...</p>}
            {readersError && <p>Error: {readersError.message}</p>}
            {readers && (
                <ul>
                    {readers.map((reader: { id: number; name: string }) => (
                        <li key={reader.id}>{reader.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}