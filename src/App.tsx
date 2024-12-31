import React from 'react';
import { Navbar } from './components/Navbar';
import { Profile } from './components/Profile';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
import { Journey } from './components/sections/Journey';
import { Testimonials } from './components/sections/Testimonials';
import { Gallery } from './components/sections/Gallery';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Profile />
      <About />
      <Education />
      <Journey />
      <Testimonials />
      <Gallery />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;