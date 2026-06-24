import { expect, test } from "vitest";
import { buildApiUrl } from "./buildApiUrl";

test('buildApiUrl should build the correct API URL', () => {
  const endpoint = 'books';
  const expectedUrl = `${import.meta.env.VITE_API_URI}/${endpoint}`;
  const actualUrl = buildApiUrl(endpoint);
  expect(actualUrl).toBe(expectedUrl);
});