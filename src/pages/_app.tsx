import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Components
import { NavBar } from "@/@core/components/Navbar";

import Footer from "@/@core/components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/@core/routers";
import Head from "next/head";

const theme = createTheme();

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);

  return render ? (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>
            <style jsx global>{`
              html {
                font-family: "Figtree";
              }
            `}</style>
            <Head>
              <title>Safra National Bank</title>
            </Head>
            <CssBaseline />
            <NavBar />
            <AppRoutes />
            <Footer />
          </MuiThemeProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  ) : null;
}
