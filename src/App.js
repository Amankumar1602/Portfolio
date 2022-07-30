import React from "react"
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar"
import About from "./components/About/About"
import Resume from "./components/Resume/Resume"
import Project from "./components/Project/Project"
import Home from "./components/Home/Home"
import Contact from "./components/Contact/Contact"
import Experience from "./components/experience/experience";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Experience />
        <Resume />
        <Project />
        <Contact />
      </main>
    </>
  );
}

export default App;
