import Trans from "next-translate/Trans";

import { BlissimComponent } from "../../components/BlissimComponent";

const data = [
  {
    title: "La meilleure box beauté",
    description: (
      <Trans
        i18nKey={"blissim:description_1"}
        components={{
          b: <strong />,
        }}
      />
    ),
  },
  {
    title: "La flexibilité",
    description: (
      <Trans
        i18nKey={"blissim:description_2"}
        components={{
          b: <strong />,
        }}
      />
    ),
  },
  {
    title: "Le bon plan beauté",
    description: (
      <Trans
        i18nKey={"blissim:description_3"}
        components={{
          b: <strong />,
        }}
      />
    ),
  },
  {
    title: "La crème de la crème",
    description: (
      <Trans
        i18nKey={"blissim:description_4"}
        components={{
          b: <strong />,
        }}
      />
    ),
  },
];

// Got an issue with tailwindcss and I think materialUI. Impossible to compute styles.
// I had to declare classes in order for the style to compute
const BlissimComponentPage = () => {
  return (
    <div className="page">
      <h2 className="card-title">Pourquoi Blissim ?</h2>
      <BlissimComponent data={data} />
    </div>
  );
};

export default BlissimComponentPage;
