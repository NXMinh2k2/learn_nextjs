import { Providers } from "@/lib/provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Children } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />;
    </Providers>
  );
}
