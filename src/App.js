import { useEffect, useState } from "react";
import { Dummy } from "./Dummy";
import "./styles.css";
import { useIsFirstRender } from "./useIsFirstRender";

export default function App() {
  const isFirstRender = useIsFirstRender();
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, [isFirstRender]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>{isFirstRender ? "yes" : "no"}</div>
      {show && <Dummy />}
    </div>
  );
}
