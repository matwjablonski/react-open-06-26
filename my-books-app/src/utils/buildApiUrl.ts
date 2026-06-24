export const buildApiUrl = (endpoint: string) => {
  const baseUrl = import.meta.env.VITE_API_URI;
  return `${baseUrl}/${endpoint}`;
}