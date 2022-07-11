import ProductCard from "./ProductCard";
import { Grid } from "@material-ui/core";

const ProductList = (props) => {
  const { products, isLoading } = props;

  if (isLoading) {
    return (
      <Grid container spacing={2}>
        {[...Array(8).keys()]?.map((el, index) => (
          <Grid item xs={6} md={4} key={index}>
            <div className="py-4 px-3 flex flex-col items-center w-full min-h-[350px] rounded bg-white">
              <span className="w-full h-48 rounded bg-gray-300 animate-pulse" />
              <div className="mt-6 flex flex-col items-start space-y-2 w-full h-full">
                <span className="block w-3/4 h-3 rounded bg-gray-300 animate-pulse" />
                <span className="block w-1/2 h-3 rounded bg-gray-300 animate-pulse" />
                <span className="block w-2/3 h-3 rounded bg-gray-300 animate-pulse" />
              </div>
              <div className="mt-6 flex items-center justify-between w-full h-full">
                <span className="block w-12 h-3 rounded bg-gray-300 animate-pulse" />
                <span className="block w-12 h-3 rounded bg-gray-300 animate-pulse" />
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    );
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
