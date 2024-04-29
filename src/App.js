import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <ChakraProvider>
            <div className="app-container">
                <Navbar scrollToSection={scrollToSection} />
                <div className="body-container">
                    <Body />
                </div>
                <Footer/>
            </div>
        </ChakraProvider>
    );
}

export default App;
