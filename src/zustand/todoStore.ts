import { create } from "zustand";
import { TTodo } from "../types/todo";

type TuseTodoStore = {
  todos: TTodo[];
  addTodo: (text: string) => void;
  delTodo: (index: number) => void;
  toggleTodo: (index: number) => void;
};

export const useTodoStore = create<TuseTodoStore>((set) => ({
  todos: [],
  addTodo: (text: string) => set((state) => ({ todos: [...state.todos, { id: Math.random(), text, isTrue: false }] })),
  delTodo: (index: number) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== index) })),
  toggleTodo: (index: number) =>
    set((state) => ({ todos: state.todos.map((todo) => (todo.id === index ? { ...todo, isTrue: !todo.isTrue } : todo)) })),
}));
