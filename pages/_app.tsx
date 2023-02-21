import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "@mui/material";
import { theme } from "@/utils/theme";
import {SessionProvider} from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
  )
}
