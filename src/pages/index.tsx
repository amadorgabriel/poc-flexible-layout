import Head from "next/head";
import { Inter } from "next/font/google";
import { Allotment } from "allotment";

import { Preview } from "@/components/Preview";
import { DetailsBar } from "@/components/DetailsBar";
import { ComponentsBar } from "@/components/ComponentsBar";

import "allotment/dist/style.css";
import styles from "@/styles/Home.module.css";

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
        <Allotment minSize={100}>
          <Allotment.Pane maxSize={400} minSize={200}>
            <ComponentsBar />
          </Allotment.Pane>

          <Allotment.Pane>
            <Preview />
          </Allotment.Pane>

          <Allotment.Pane maxSize={400} minSize={200}>
            <DetailsBar />
          </Allotment.Pane>
        </Allotment>
      </main>
    </>
  );
}
