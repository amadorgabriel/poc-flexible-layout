import React, { RefObject, useState } from "react";

interface ElementSizeOptionsProps {
  initialWidth?: number;
  initialHeight?: number;
}

export const useElementSize = <T extends HTMLElement>(
  ref: RefObject<T> | T | null,
  options?: ElementSizeOptionsProps
): [number, number] => {
  const [size, setSize] = useState<[number, number]>(() => {
    const target = ref && "current" in ref ? ref.current : ref;

    return target
      ? [target.offsetWidth, target.offsetHeight]
      : [options?.initialWidth || 0, options?.initialHeight || 0];
  });

  usePassiveLayoutEffect(() => {
    const targetEl = ref && "current" in ref ? ref.current : ref;
    if (!targetEl) return;

    setSize([targetEl.offsetWidth, targetEl.offsetHeight]);
  }, [ref]);

  // usePassiveLayoutEffect(() => {
  //   const targetEl = ref && "current" in ref ? ref.current : ref;

  //   if (!targetEl) return () => {};

  //   const resizeObserver = new ResizeObserver((entries) => {
  //     if (entries.length > 0) {
  //       const { width, height } = entries[0].contentRect;
  //       setSize({ width, height });
  //     }
  //   });
  //   resizeObserver.observe(targetEl);

  //   return () => {
  //     resizeObserver.unobserve(targetEl);
  //   };
  // }, []);

  // useLayoutEffect(() => {
  //   const targetEl = ref && "current" in ref ? ref.current : ref;

  //   if (targetEl) {
  //     const resizeObserver = new ResizeObserver((entries) => {
  //       const { width, height } = entries[0].contentRect;
  //       setSize({ width, height });
  //     });

  //     resizeObserver.observe(targetEl);

  //     return () => {
  //       resizeObserver.unobserve(targetEl);
  //     };
  //   }
  // }, [ref]);

  return size;
};

const usePassiveLayoutEffect =
  React[
    typeof document !== "undefined" && document.createElement !== void 0
      ? "useLayoutEffect"
      : "useEffect"
  ];
