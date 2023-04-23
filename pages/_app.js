import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme/theme";
import createEmotionCache from "../src/createEmotionCache";
import FullLayout from "../src/layouts/FullLayout";
import "../styles/style.css";
import { useRouter } from "next/router";
import "sweetalert2/src/sweetalert2.scss";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const hiddenSidebarTabs = ["/signin", "/signup", "/error"];

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const router = useRouter();
  const [hiddenSidebar, setHiddenSidebar] = useState(
    hiddenSidebarTabs.includes(router.pathname),
  );
  useEffect(() => {
    setHiddenSidebar(hiddenSidebarTabs.includes(router.pathname));
  }, [router]);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>밍뇽이랑밍수</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {hiddenSidebar ? (
          <Component {...pageProps} />
        ) : (
          <>
            <FullLayout>
              <Component {...pageProps} />
            </FullLayout>
          </>
        )}
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
