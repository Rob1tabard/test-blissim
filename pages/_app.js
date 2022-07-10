import "../styles/globals.css";
import { GlobalProvider } from "../state/global-context";
import { GlobalProvider as GlobalProviderV2 } from "../state/global-context-v2";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "../theme/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalProvider>
        <GlobalProviderV2>
          <Component {...pageProps} />
        </GlobalProviderV2>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default MyApp;
