import { useEffect, useState } from "react";

type UseApiState<T> = {
    data: T[];
    loading: boolean;
    error: string | null;
}

export const useApi = <T, >(endpoint: string) => {
    const [state, setState] = useState<UseApiState<T>>({
        data: [],
        loading: false,
        error: null
    });

    const fetchData = async (controller: AbortController) => {
        setState((prevState) => ({ ...prevState, loading: true }));

        try {
            const response = await fetch(endpoint, { signal: controller.signal });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: T[] = await response.json();
            setState((prevState) => ({ ...prevState, data }));
        } catch (error) {
            setState((prevState) => ({ ...prevState, error: (error as Error).message }));
        } finally {
            setState((prevState) => ({ ...prevState, loading: false }));
        }
    }
    
    useEffect(() => {
        const controller = new AbortController();
        
        fetchData(controller);

        return () => {
            controller.abort();
        }
    }, []);

    return state;
}