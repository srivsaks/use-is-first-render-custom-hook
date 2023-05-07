import { useIsFirstRender } from "./useIsFirstRender";

export const Dummy = () => {
  const isFirstRender = useIsFirstRender();
  return <div>dummmy {isFirstRender && <>foo</>}</div>;
};
