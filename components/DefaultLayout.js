import Header from "./header/Header";
import Footer from "./footer/Footer";
import Interstitial from "./Interstitial";
import { withStyles } from "@material-ui/core";
import clsx from "clsx";

// ===== Basic Layout ===== //
const useStyles = (theme) => ({
  root: {
    minHeight: "100vh",
  },
});

const DefaultLayout = (props) => {
  const { classes } = props;
  return (
    <div
      className={clsx("relative bg-gray-50 min-h-screen h-full", classes.root)}
    >
      {/*Header*/}
      <Header />

      <main className="h-full overflow-auto">{props.children}</main>

      {/*Footer*/}
      <Footer />
    </div>
  );
};

export default withStyles(useStyles)(DefaultLayout);
