import ProductCard from "./ProductCard";
import { Grid } from "@material-ui/core";

const ProductList = (props) => {
  const { products, isLoading } = props;

  if (true) {
    console.log("passe");
    console.log(Array(8));
    return [...Array(5).keys()]?.map((el, index) => (
      <Grid container spacing={2} key={index}>
        <Grid item xs={6} md={4}>
          <div className="flex flex-col items-center w-full min-h-[350px] rounded">
            <span className="w-24 h-24 rounded bg-gray-400 animate-pulse" />
          </div>
        </Grid>
      </Grid>
    ));
  }
  return (
    <Grid container spacing={2}>
      {products.map((product, index) => (
        <Grid item xs={6} md={4} key={index}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
