import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
} from "@material-ui/core";
import Link from "next/link";
import Interstitial from "../Interstitial";
import WishListPanel from "../WishListPanel";

import {
  TOGGLE_CARD,
  TOGGLE_WISHLIST,
  useGlobalContext,
} from "./../../state/global-context-v2";
import { ShoppingBagIcon, HeartIcon } from "@heroicons/react/outline";
import clsx from "clsx";

const useStyles = (theme) => ({
  toolbar: {
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
  },
});

const Header = (props) => {
  const { classes } = props;
  const { infos, dispatch } = useGlobalContext();

  const toggleCard = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    dispatch({ type: TOGGLE_CARD, payload: !infos?.isCardOpen });
  };

  const toggleWishList = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    dispatch({ type: TOGGLE_WISHLIST, payload: !infos?.isWishlistOpen });
  };

  return (
    <>
      <header className={classes.root}>
        <AppBar className="!bg-indigo-600 py-4" position="static" elevation={0}>
          <Container maxWidth="lg">
            <Toolbar className={classes.toolbar}>
              <Link href="/" passHref>
                <a>
                  <Typography
                    variant="h4"
                    className={clsx("font-bold", classes.title)}
                  >
                    SuperShop
                  </Typography>
                </a>
              </Link>
              <div>
                <IconButton onClick={toggleWishList}>
                  <HeartIcon className="h-6 w-6 text-white" />
                </IconButton>
                <IconButton onClick={toggleCard} className="relative">
                  <ShoppingBagIcon className="h-6 w-6 text-white" />
                  <span className="absolute bottom-2.5 right-2.5 flex items-center justify-center w-3 h-3 bg-white rounded-full">
                    <span className="text-[8px]">{infos?.card?.length}</span>
                  </span>
                </IconButton>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
      <Interstitial />
      <WishListPanel />
    </>
  );
};

export default withStyles(useStyles)(Header);
