import HomePage from "./pages/HomePage";
import { useState } from "react";
import Welcome from "./components/Welcome";
function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className=" w-full h-auto ">
      {showWelcome ? (
        <Welcome onEnter={() => setShowWelcome(false)} />
      ) : (
        <HomePage />
      )}
    </div>
  );
}
export default App;
