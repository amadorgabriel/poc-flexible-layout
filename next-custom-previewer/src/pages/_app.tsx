import * as Yup from "yup";
import { Formik } from "formik";
import type { AppProps } from "next/app";

import { initialContainer } from "@/utils/constants";
import { ContainerProvider } from "@/contexts/ContainerContext";

import "@/styles/globals.css";

export interface FormikValuesProps {
  x: number;
  y: number;
  width: number;
  height: number;
  isBlocked: boolean;
  colsAmount: number;
  rowGap: number;
  colGap: number;
}

export default function App({ Component, pageProps }: AppProps) {
  const minWidth = initialContainer.dimensions.minWidth;
  const maxWidth = initialContainer.dimensions.maxWidth;
  const minHeight = initialContainer.dimensions.minHeight;
  const maxHeight = initialContainer.dimensions.maxHeight;
  const minCols = initialContainer.cols.minCols;

  const initialValuesSchema = Yup.object().shape({
    width: Yup.number()
      .positive()
      .min(minWidth, `O tamanho minímo é de ${minWidth}px.`)
      .max(maxWidth, `O tamanho máximo é de ${maxWidth}px.`),
    height: Yup.number()
      .min(minHeight, `O tamanho minímo é de ${minHeight}px.`)
      .max(maxHeight, `O tamanho máximo é de ${maxHeight}px.`),
    colsAmount: Yup.number()
      .positive()
      .min(minCols, `O minímo permitido é ${minCols} coluna`)
      .positive(),
  });

  return (
    <ContainerProvider>
      <Formik
        validationSchema={initialValuesSchema}
        initialValues={{
          width: initialContainer.dimensions.width,
          height: initialContainer.dimensions.height,
          isBlocked: initialContainer.isBlocked,
          colsAmount: initialContainer.cols.amount,
          colGap: initialContainer.cols.colGap,
          rowGap: initialContainer.cols.rowGap,
        }}
        onSubmit={() => {}}
      >
        <Component {...pageProps} />
      </Formik>
    </ContainerProvider>
  );
}
