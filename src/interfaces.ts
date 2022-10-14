export interface Game {
  categoryIds: number[];
  code: string;
  description: string;
  icon: string;
  name: string;
}

export interface Category {
  id: number;
  name: string;
}
