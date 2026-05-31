import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="public/watch-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Header />
        </div>
      </section>
    </main>
  );
}

export default App;