import useSWR from "swr";
import { fetcher } from "./../utils/fetcher";

const CATEGORIES_URL = "https://fakestoreapi.com/products/categories";

export const useCategories = (options = {}) => {
  const { data: categories, error: categoriesError } = useSWR(
    CATEGORIES_URL,
    fetcher,
    {
      shouldRetryOnError: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      ...options,
    }
  );

  return {
    categories,
    categoriesError,
    isLoading: !categories && !categoriesError,
  };
};
