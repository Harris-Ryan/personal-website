import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  });

  return (
    <div>
      {loading === true ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
          <Home />
          <About />
          <Technologies />
          <Projects />
          <Contact />
        </div>
      )}
    </div>
  );
}

export default App;
