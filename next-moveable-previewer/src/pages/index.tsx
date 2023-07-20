import Head from "next/head";
import { Inter } from "next/font/google";
import { Layout } from "@/layouts";

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
        <Layout />
      </main>
    </>
  );
}
