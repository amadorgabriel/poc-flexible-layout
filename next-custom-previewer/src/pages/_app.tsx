import type { AppProps } from "next/app";
import { LabelProvider } from "@/core/contexts/LabelContext";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LabelProvider>
      <Component {...pageProps} />
    </LabelProvider>
  );
}
