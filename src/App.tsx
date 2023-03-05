import { Suspense } from "react";
import { Overlay } from "./components/Overlay";
import { Scene } from "./components/Scene";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Overlay />}>
        <Scene />
      </Suspense>
    </div>
  );
}

export default App;
