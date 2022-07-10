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
  TOGGLE_WISHLIST,
  REMOVE_FROM_WISHLIST,
  useGlobalContext,
} from "./../state/global-context-v2";
import { ArrowCircleLeftIcon, TrashIcon } from "@heroicons/react/outline";
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

const WishListPanel = (props) => {
  const { classes } = props;
  const { infos, dispatch } = useGlobalContext();
  const wishlist = infos?.wishlist;

  const removeFromWishlist = (id) => {
    dispatch({ type: REMOVE_FROM_WISHLIST, payload: id });
  };

  const closeInterstitial = () => {
    return dispatch({ type: TOGGLE_WISHLIST, payload: !infos?.isWishlistOpen });
  };

  return (
    <SwipeableDrawer
      anchor={"right"}
      open={infos?.isWishlistOpen}
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
            <Typography variant="h5">My Wishlist</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} className={classes.productListContainer}>
          <Grid item xs={12}>
            <Typography>
              {infos.wishlist.length > 1
                ? `${infos.wishlist.length} produits`
                : `${infos.wishlist.length} produit`}
            </Typography>
          </Grid>

          {wishlist.map((product, index) => (
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
                  <IconButton
                    onClick={() => removeFromWishlist(product.id)}
                    className={classes.deleteIcon}
                  >
                    <TrashIcon className="w-5 h-5 text-indigo-400" />
                  </IconButton>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </SwipeableDrawer>
  );
};

export default withStyles(useStyles)(WishListPanel);
