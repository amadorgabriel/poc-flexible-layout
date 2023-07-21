import Head from "next/head";
import { Inter } from "next/font/google";
import { Allotment } from "allotment";

const inter = Inter({ subsets: ["latin"] });

import "allotment/dist/style.css";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>poc-flexible-layout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`main ${inter.className}`}>
        <Allotment minSize={100}>
          <Allotment.Pane>{children}</Allotment.Pane>

          <Allotment.Pane maxSize={450} minSize={400}>
            <aside className="aside">
              <h2>Editor</h2>
            </aside>
          </Allotment.Pane>
        </Allotment>
      </main>
    </>
  );
};
