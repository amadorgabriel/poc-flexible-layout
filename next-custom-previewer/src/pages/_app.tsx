import * as Yup from "yup";
import { Formik } from "formik";
import type { AppProps } from "next/app";
import { labels } from "@/core/mock/labels.mock";
import { LabelProvider, } from "@/core/contexts/LabelContext";

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
  const container = labels[0].diagramationRules.container;

  const minWidth = container.dimensions.minWidth;
  const maxWidth = container.dimensions.maxWidth;
  const minHeight = container.dimensions.minHeight;
  const maxHeight = container.dimensions.maxHeight;
  const minCols = container.cols.minCols;

  const initialFormikSchema = Yup.object().shape({
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
    <LabelProvider>
      <Formik
        validationSchema={initialFormikSchema}
        initialValues={{
          width: container.dimensions.width,
          height: container.dimensions.height,
          isBlocked: container.isBlocked,
          colsAmount: container.cols.amount,
          colGap: container.cols.colGap,
          rowGap: container.cols.rowGap,
        }}
        onSubmit={() => {}}
      >
        <Component {...pageProps} />
      </Formik>
    </LabelProvider>
  );
}
