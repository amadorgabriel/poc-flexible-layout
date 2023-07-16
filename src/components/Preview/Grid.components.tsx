import { Responsive as ResponsiveGridLayout } from "react-grid-layout";

import styles from "@/styles/Preview.module.css";

export const Grid = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ];

  return (
    <ResponsiveGridLayout
      rowHeight={30}
      width={1200}
      // className="layout"
      // breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      // cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
      <div
        className={styles.layout}
        key="a"
        data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}
      >
        a
      </div>
      <div
        className={styles.layout}
        key="b"
        data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}
      >
        b
      </div>
      <div
        className={styles.layout}
        key="c"
        data-grid={{ x: 4, y: 0, w: 1, h: 2 }}
      >
        c
      </div>
    </ResponsiveGridLayout>
  );
};
