import { create } from "zustand";
import { TInitial } from "../types/fetch";

export type TFetchStore = {
  data: TInitial;
  isError: boolean;
  error: string;
  isLoading: boolean;
};

export const useFetchStore = create<TFetchStore>((set) => ({
  data: 0,
  isError: false,
  error: "",
  isLoading: false,
}));
