import { useQuery } from "@tanstack/react-query";

const fetchReaders = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

export const useReadersQuery = () => {
  return useQuery({
    queryKey: ['readers'],
    queryFn: fetchReaders,
  })
};
