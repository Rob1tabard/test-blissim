import Link from "next/link";
import clsx from "clsx";

import { useCategories } from "../../hooks/useCategories";

const BASE_URL = "/boutique/";

export const CategoriesList = ({ active = null }) => {
  const { categories, isLoading } = useCategories();

  if (isLoading) {
    return [...Array(5).keys()]?.map((el) => (
      <li key={el} className="w-20 h-5 rounded bg-gray-300 animate-pulse" />
    ));
  }

  return (
    <>
      {categories?.map((el, id) => (
        <li key={id}>
          <Link href={BASE_URL + el}>
            <a
              className={clsx("capitalize", {
                "font-extrabold": active === el,
              })}
            >
              {el}
            </a>
          </Link>
        </li>
      ))}
    </>
  );
};
