import "./App.css";
import { useViewportSize } from "./useViewportSize.ts";

function App() {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}

export default App;
