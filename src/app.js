import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/footer";
import './assets/style.css';

const App = () => {
    return (
        <div style={{backgroundColor: 'gray'}}>
            <main>
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
            </main>
        </div>
    );
}

export default App;