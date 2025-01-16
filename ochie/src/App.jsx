import { useState } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Marquee from './components/Marquee';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-zinc-900 w-full min-h-screen text-white">
      <Navbar />
      <Landing />
        <Marquee />
    </div>
  );
}

export default App;