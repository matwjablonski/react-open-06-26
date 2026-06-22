export interface BookType {
  title: string;
  author: string;
  id: number;
  publicationDate?: string;
}

export const books: BookType[] = [
  { title: 'Anna Karenina', author: 'Lew Tołstoj', id: 1, publicationDate: '1877' },
  { title: 'Wojna i pokój', author: 'Lew Tołstoj', id: 2, publicationDate: '1869' },
  { title: 'Zbrodnia i kara', author: 'Fiodor Dostojewski', id: 3, publicationDate: '1866' },
  { title: 'Pan Tadeusz', author: 'Adam Mickiewicz', id: 4, publicationDate: '1834' },
  { title: 'Mały Książę', author: 'Antoine de Saint-Exupéry', id: 5, publicationDate: '1943' },
];