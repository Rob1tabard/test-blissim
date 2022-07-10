import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  withStyles,
  IconButton,
} from "@material-ui/core";
import {
  ADD_TO_CARD,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  useGlobalContext,
} from "./../../state/global-context-v2";
import { formatCurrency } from "./../../utils/formatPrice";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";

import clsx from "clsx";

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

const ProductCard = (props) => {
  const { classes, product } = props;
  const { infos, dispatch } = useGlobalContext();

  const addToCard = (product) => {
    dispatch({ type: ADD_TO_CARD, payload: product });
  };

  const addToWishList = (product) => {
    dispatch({ type: ADD_TO_WISHLIST, payload: product });
  };

  const removeFromWishList = (product) => {
    dispatch({ type: REMOVE_FROM_WISHLIST, payload: product?.id });
  };

  return (
    <Card
      className={clsx(
        "p-4 !rounded-md !shadow-none min-h-[380px]",
        classes.root
      )}
    >
      <CardContent className={clsx("!p-0", classes.content)}>
        <div
          className={clsx(
            "!px-0 min-h-[200px] flex items-center justify-center",
            classes.thumbnailContainer
          )}
        >
          <CardMedia
            component="img"
            alt={product.title}
            image={product.image}
            className={classes.thumbnail}
            title="Contemplative Reptile"
          />
        </div>
        <Typography gutterBottom component="h2" className={classes.name}>
          {product.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.desc}
        </Typography>
      </CardContent>
      <CardActions className="!p-0 w-full flex justify-between">
        <Typography variant="body2" color="textSecondary" component="p">
          {formatCurrency(product.price)}
        </Typography>
        <div>
          {infos?.wishlist?.find((item) => item?.id === product?.id) ? (
            <IconButton
              onClick={() => {
                removeFromWishList(product);
              }}
            >
              <HeartIconSolid className="w-5 h-5 text-indigo-500" />
            </IconButton>
          ) : (
            <IconButton onClick={() => addToWishList(product)}>
              <HeartIcon className="w-5 h-5 text-indigo-500" />
            </IconButton>
          )}
          <IconButton onClick={() => addToCard(product)}>
            <ShoppingBagIcon className="w-5 h-5 text-indigo-500" />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
};

export default withStyles(useStyles)(ProductCard);
