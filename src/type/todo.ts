export interface TodoInfo {
  id: number;
  todo: string;
  isCompleted: false;
  userId: number;
}

export interface ModifyInfo {
  todoId: number;
  todo: string;
  isCompleted: boolean;
}
