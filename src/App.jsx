import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Header from "./components/Header";
import WatchBrands from "./components/WatchBrands";
import Features from "./components/Features";
import Discountcard from "./components/Discountcard";
import Footer from "./components/Footer";

import Titan from "./components/Brands/Titan";
import Armani from "./components/Brands/Armani";
import Diesel from "./components/Brands/Diesel";
import Fossil from "./components/Brands/Fossil";
import Movado from "./components/Brands/Movado";
import Rado from "./components/Brands/Rado";
import Timex from "./components/Brands/Timex";
import Tissot from "./components/Brands/Tissot";

function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/watch-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Header />
        </div>
      </section>

      <WatchBrands />
      <Features />
      <Discountcard />
      <Footer />
    </>
  );
}

function App() {
  return (
    <main className="w-full overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/titan" element={<Titan />} />
        <Route path="/armani" element={<Armani />} />
        <Route path="/diesel" element={<Diesel />} />
        <Route path="/fossil" element={<Fossil />} />
        <Route path="/movado" element={<Movado />} />
        <Route path="/rado" element={<Rado />} />
        <Route path="/timex" element={<Timex />} />
        <Route path="/tissot" element={<Tissot />} />
      </Routes>
    </main>
  );
}

export default App;