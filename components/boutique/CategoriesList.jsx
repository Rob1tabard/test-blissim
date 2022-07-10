import Link from "next/link";
import clsx from "clsx";

import { useCategories } from "../../hooks/useCategories";

const BASE_URL = "/boutique/";

export const CategoriesList = ({ active = null }) => {
  const { categories, isLoading } = useCategories();

  if (true) {
    return [...Array(5).keys()]?.map((el, id) => (
      <li key={id} className="w-20 h-3 rounded bg-slate-500 animate-pulse" />
    ));
  }

  return (
    <>
      {categories?.map((el, id) => (
        <li key={id}>
          <Link href={BASE_URL + el}>
            <a className={clsx({ "underline font-extrabold": active === el })}>
              {el}
            </a>
          </Link>
        </li>
      ))}
    </>
  );
};
