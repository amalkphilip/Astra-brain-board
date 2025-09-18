
export interface Task {
  id: number;
  title: string;
  description: string;
  link: string;
}

export enum TaskType {
  LADDER = 'ladder',
  SNAKE = 'snake',
}
