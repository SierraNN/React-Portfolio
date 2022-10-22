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
        <div className="main">
            <main>
                <div className='columns'>
                    <div className='column is-one-third'>
                        <Navbar />
                        <div className='navbtn'>
                        <button className='btnnav1'><a href="https://www.canva.com/design/DAFOF0s_ULI/4CEUMtWFYJDDWXadrIdGpQ/view?utm_content=DAFOF0s_ULI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank">Resume</a></button>
                        <button className='btnnav1' ><a href = "mailto: sierra.nutt@outlook.com">Contact</a></button>
                        <button className='btnnav1'><a href="https://github.com/SierraNN"  target="_blank">GitHub</a></button>                    
                        </div>
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