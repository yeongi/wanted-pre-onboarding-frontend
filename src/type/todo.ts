export interface TodoInfo {
  id: number;
  todo: string;
  isCompleted: false;
  userId: number;
}

export interface ModifyInfo {
  id: number;
  todo: string;
  isCompleted: boolean;
}
