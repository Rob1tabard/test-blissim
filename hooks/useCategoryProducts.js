import useSWR from "swr";
import { fetcher } from "./../utils/fetcher";

const CATEGORY_PRODUCT_URL =
  "https://fakestoreapi.com/products/category/%category%";

export const useCategoryProducts = (params, options = {}) => {
  const { data: products, error: productsError } = useSWR(
    CATEGORY_PRODUCT_URL?.replace("%category%", params),
    fetcher,
    {
      shouldRetryOnError: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      ...options,
    }
  );

  return {
    products,
    productsError,
    isLoading: !products && !productsError,
  };
};
