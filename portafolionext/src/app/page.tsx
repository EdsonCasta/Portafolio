// src/app/page.tsx (para versiones recientes de Next.js)
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Profile from '@/components/Profile';
import About from '@/components/About';
import Projects from '@/components/Projects';
// import Technologies from '@/components/Technologies';
import Contact from '@/components/Contact';
// import Form from '@/components/Form';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <Profile />
        <About />
        <Projects />
        {/* <Technologies /> */}
        <Contact />
        {/* <Form /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;