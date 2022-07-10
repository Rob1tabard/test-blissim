import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import {
  withStyles,
  Typography,
  Button,
  Grid,
  Card,
  IconButton,
  CardMedia,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import {
  TOGGLE_CARD,
  REMOVE_FROM_CARD,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  useGlobalContext,
} from "./../state/global-context-v2";
import {
  TrashIcon,
  ArrowCircleLeftIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import { formatCurrency } from "../utils/formatPrice";
import clsx from "clsx";

const useStyles = (theme) => ({
  interstitial: {
    width: "350px",
    padding: theme.spacing(2),
  },
  productListContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },

  productItem: {
    padding: theme.spacing(2),
    position: "relative",
    display: "flex",
  },

  productItemImg: {
    width: "100px",
    height: "auto",
    maxHeight: "90px",
    marginRight: theme.spacing(2),
  },

  deleteIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});

const Interstitial = (props) => {
  const { classes } = props;
  const { infos, dispatch } = useGlobalContext();
  const card = infos?.card;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getTotalPrice();
  });

  const removeFromCard = (id) => {
    dispatch({ type: REMOVE_FROM_CARD, payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: DECREASE_QUANTITY, payload: id });
  };

  const increaseQuantity = (id) => {
    dispatch({ type: INCREASE_QUANTITY, payload: id });
  };

  const closeInterstitial = () =>
    dispatch({ type: TOGGLE_CARD, payload: !infos?.isCardOpen });

  const getTotalPrice = () => {
    let totalPrice = 0;
    card.map((p) => {
      totalPrice += p.price * p.quantity;
    });
    return setTotalPrice(formatCurrency(totalPrice));
  };

  return (
    <SwipeableDrawer
      anchor={"right"}
      open={infos?.isCardOpen}
      onClose={closeInterstitial}
      onOpen={closeInterstitial}
    >
      <div className={clsx("bg-slate-50 h-full", classes.interstitial)}>
        <Grid
          container
          alignItems="center"
          className={classes.productListContainer}
        >
          <Grid item>
            <IconButton onClick={closeInterstitial}>
              <ArrowCircleLeftIcon className="w-6 h-6 text-indigo-600" />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h5">Mon panier</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} className={classes.productListContainer}>
          <Grid item xs={12}>
            <Typography>
              {infos.card.length > 1
                ? `${infos.card.length} produits`
                : `${infos.card.length} produit`}
            </Typography>
          </Grid>

          {card.map((product, index) => (
            <Grid item xs={12} key={index}>
              <Card className={clsx("!shadow-none", classes.productItem)}>
                <CardMedia
                  component="img"
                  alt={product.title}
                  image={product.image}
                  title="Contemplative Reptile"
                  className={classes.productItemImg}
                />
                <div className={classes.productItemContent}>
                  <Typography>{product.title}</Typography>
                  <Typography>{formatCurrency(product.price)}</Typography>

                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      disabled={product.quantity === 1}
                      onClick={() => decreaseQuantity(product.id)}
                      className="disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <MinusCircleIcon className="w-5 h-5 text-indigo-400" />
                    </button>
                    <span>{product?.quantity}</span>
                    <button onClick={() => increaseQuantity(product.id)}>
                      <PlusCircleIcon className="w-5 h-5 text-indigo-400" />
                    </button>
                  </div>
                  {product.quantity === 1 ? (
                    <IconButton
                      onClick={() => removeFromCard(product.id)}
                      className={classes.deleteIcon}
                    >
                      <TrashIcon className="w-5 h-5 text-indigo-400" />
                    </IconButton>
                  ) : null}
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography gutterBottom>Prix total : {totalPrice}</Typography>
        <Button color="primary" variant="contained">
          Commander
        </Button>
      </div>
    </SwipeableDrawer>
  );
};

export default withStyles(useStyles)(Interstitial);
