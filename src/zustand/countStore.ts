import { create } from "zustand";

type countStoreType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCountStore = create<countStoreType>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
