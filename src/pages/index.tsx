import Head from "next/head";
import { Formik } from "formik";
import { Allotment } from "allotment";
import { Inter } from "next/font/google";

import { Preview } from "@/components/Preview";
import { DesignAside } from "@/components/DesignAside";
import { LayersAside } from "@/components/LayersAside";
import { initialContainerBlock } from "@/utils/constants";
import { BlockContextProvider } from "@/contexts/BlockContext";

import styles from "@/styles/Home.module.css";
import "allotment/dist/style.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>poc-flexible-layout</title>
        <meta name="description" content="Flexible layout editor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.container} ${inter.className}`}>
        <BlockContextProvider>
          <Formik
            initialValues={{
              width: initialContainerBlock.initialSize.width,
              height: initialContainerBlock.initialSize.height,
              isBlocked: initialContainerBlock.isBlocked,
            }}
            onSubmit={() => {}}
          >
            <Allotment minSize={100}>
              <Allotment.Pane maxSize={400} minSize={200}>
                <LayersAside />
              </Allotment.Pane>

              <Allotment.Pane>
                <Preview />
              </Allotment.Pane>

              <Allotment.Pane maxSize={400} minSize={200}>
                <DesignAside />
              </Allotment.Pane>
            </Allotment>
          </Formik>
        </BlockContextProvider>
      </main>
    </>
  );
}
