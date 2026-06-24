import { useCallback, useEffect, useState } from "react";
import { buildApiUrl } from "../utils/buildApiUrl";

type UseApiState<T> = {
    data: T[];
    loading: boolean;
    error: string | null;
}

export const useApi = <T, >(endpoint: string, isLocalData = false) => {
    const [state, setState] = useState<UseApiState<T>>({
        data: [],
        loading: false,
        error: null
    });

    const fetchData = useCallback(async (controller: AbortController) => {
        setState((prevState) => ({ ...prevState, loading: true, error: null }));

        const url = isLocalData ? endpoint : buildApiUrl(endpoint);

        try {
            const response = await fetch(url, { signal: controller.signal });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: T[] = await response.json();
            setState((prevState) => ({ ...prevState, data }));
        } catch (error) {
            if ((error as Error).name === "AbortError") {
                return;
            }

            setState((prevState) => ({ ...prevState, error: (error as Error).message }));
        } finally {
            if (!controller.signal.aborted) {
                setState((prevState) => ({ ...prevState, loading: false }));
            }
        }
    }, [endpoint, isLocalData]);

    useEffect(() => {
        const controller = new AbortController();

        fetchData(controller);

        return () => {
            controller.abort();
        }
    }, [fetchData]);

    return state;
}
