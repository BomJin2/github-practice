import { useEffect } from "react";
import { useFetchStore } from "../zustand/useFetchStore";
import { TFetchStore } from "../types/fetch";
import { useCountStore } from "../zustand/countStore";

export const useFetch = () => {
  const data = useFetchStore((state) => state.data);
  const isError = useFetchStore((state) => state.isError);
  const error = useFetchStore((state) => state.error);
  const isLoading = useFetchStore((state) => state.isLoading);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        isLoading(false);
        data(1);
      } catch (e) {}
    };
  });
};
