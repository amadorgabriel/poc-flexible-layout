import Head from "next/head";
import { Formik } from "formik";
import { Allotment } from "allotment";
import { Inter } from "next/font/google";
import { Canvas } from "@/components/Canvas";
import { Aside } from "@/components/_commons/Aside";

import "allotment/dist/style.css";

const inter = Inter({ subsets: ["latin"] });

export interface FormikHelperInitialValues {
  w: number;
  h: number;
  colAmount: number;
  rGap: number;
  cGap: number;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>poc-flexible-layout</title>
        <meta name="description" content="Flexible layout editor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`$${inter.className}`}>
        <Formik validationSchema={{}} initialValues={{}} onSubmit={() => {}}>
          <Allotment minSize={100}>
            <Allotment.Pane>
              <Canvas />
            </Allotment.Pane>

            <Allotment.Pane maxSize={400} minSize={320}>
              <Aside />
            </Allotment.Pane>
          </Allotment>
        </Formik>
      </main>
    </>
  );
}
