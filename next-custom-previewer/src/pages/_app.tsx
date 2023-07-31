import * as Yup from "yup";
import { Formik } from "formik";
import type { AppProps } from "next/app";

import { initialContainerBlock } from "@/utils/constants";
import { BlockContextProvider } from "@/contexts/BlockContext";

import "@/styles/globals.css";

export interface FormikValuesProps {
  x: number;
  y: number;
  width: number;
  height: number;
  isBlocked: boolean;
  colsAmount: number;
}

export default function App({ Component, pageProps }: AppProps) {
  const minWidth = initialContainerBlock.dimensions.minWidth;
  const maxWidth = initialContainerBlock.dimensions.maxWidth;
  const minHeight = initialContainerBlock.dimensions.minHeight;
  const maxHeight = initialContainerBlock.dimensions.maxHeight;

  const initialValuesSchema = Yup.object().shape({
    width: Yup.number()
      .min(minWidth, `O tamanho minímo é de ${minWidth}px.`)
      .max(maxWidth, `O tamanho máximo é de ${maxWidth}px.`),
    height: Yup.number()
      .min(minHeight, `O tamanho minímo é de ${minHeight}px.`)
      .max(maxHeight, `O tamanho máximo é de ${maxHeight}px.`),
  });

  return (
    <BlockContextProvider>
      <Formik
        validationSchema={initialValuesSchema}
        initialValues={{
          width: initialContainerBlock.dimensions.width,
          height: initialContainerBlock.dimensions.height,
          isBlocked: initialContainerBlock.isBlocked,
          colsAmount: initialContainerBlock.cols.amount,
        }}
        onSubmit={() => {}}
      >
        <Component {...pageProps} />
      </Formik>
    </BlockContextProvider>
  );
}
