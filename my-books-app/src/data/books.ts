export interface BookType {
  title: string;
  author: string;
    id: number;
}

export const books: BookType[] = [
  { title: 'Anna Karenina', author: 'Lew Tołstoj', id: 1 },
  { title: 'Wojna i pokój', author: 'Lew Tołstoj', id: 2 },
  { title: 'Zbrodnia i kara', author: 'Fiodor Dostojewski', id: 3 },
  { title: 'Pan Tadeusz', author: 'Adam Mickiewicz', id: 4 },
  { title: 'Mały Książę', author: 'Antoine de Saint-Exupéry', id: 5 },
];