import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Project from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/footer";
import './assets/style.css';

const App = () => {
    return (
        <div className="">
            <main>
                <div className='columns'>
                    <div className='column is-one-third'>
                        <Navbar />
                    </div>
                    <div className='column'>
                        <About />
                        <Skills />
                        <Project />
                        <Contact />
                        <Footer />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;