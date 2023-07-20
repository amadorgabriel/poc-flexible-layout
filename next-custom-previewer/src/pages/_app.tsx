import { Formik } from "formik";
import type { AppProps } from "next/app";

import { initialContainerBlock } from "@/utils/constants";
import { BlockContextProvider } from "@/contexts/BlockContext";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BlockContextProvider>
      <Formik
        initialValues={{
          width: initialContainerBlock.initialSize.width,
          height: initialContainerBlock.initialSize.height,
          isBlocked: initialContainerBlock.isBlocked,
        }}
        onSubmit={() => {}}
      >
        <Component {...pageProps} />
      </Formik>
    </BlockContextProvider>
  );
}
