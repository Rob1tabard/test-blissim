import { useRouter } from "next/router";
import {
  withStyles,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import Link from "next/link";

//Layout
import DefaultLayaout from "../../components/DefaultLayout";
import ProductsList from "../../components/boutique/ProductsList";
import { CategoriesList } from "../../components/boutique/CategoriesList";

import { useCategoryProducts } from "./../../hooks/useCategoryProducts";

const useStyles = (theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  content: {
    width: "100%",
  },
  thumbnailContainer: {
    padding: theme.spacing(2),
    textAlign: "cetner",
  },
  thumbnail: {
    maxHeight: "170px",
    width: "auto",
    margin: "auto",
  },
  name: {
    fontSize: "1rem",
  },
});

const Category = () => {
  const { query } = useRouter();

  const { category } = query;

  const { products, isLoading } = useCategoryProducts(category);

  return (
    <DefaultLayaout>
      <Container
        maxWidth="lg"
        className="flex flex-col justify-between items-start h-full"
      >
        <Grid container justifyContent={"center"}>
          <Grid item>
            <Typography variant="h3" component="h1">
              {category}
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Catégories</Typography>
            <div>
              <ul>
                <CategoriesList active={category} />
              </ul>
            </div>
          </Grid>

          <Grid item xs={12} md={9}>
            <ProductsList products={products} isLoading={isLoading} />
          </Grid>
        </Grid>
      </Container>
    </DefaultLayaout>
  );
};

export default Category;
