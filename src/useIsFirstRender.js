import { useEffect, useRef, useState } from "react";

export const useIsFirstRender = () => {
  const isFirstRender = useRef();

  useEffect(() => {
    isFirstRender.current = "foo";
  }, []);

  return !isFirstRender.current ? true : false;
};
