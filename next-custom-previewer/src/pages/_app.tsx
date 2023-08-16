import * as Yup from "yup";
import { Formik } from "formik";
import type { AppProps } from "next/app";
import { labels } from "@/core/mock/labels.mock";
import { LabelProvider, useLabelContext } from "@/core/contexts/LabelContext";

import "@/styles/globals.css";

export interface FormikValuesProps {
  w: number;
  h: number;
  colAmount: number;
  rGap: number;
  cGap: number;
}

export default function App({ Component, pageProps }: AppProps) {
  const { label } = useLabelContext();

  console.log("-------- Test Context --------");
  console.log(label);

  return (
    <LabelProvider>
      <Formik validationSchema={{}} initialValues={{}} onSubmit={() => {}}>
        <Component {...pageProps} />
      </Formik>
    </LabelProvider>
  );
}
