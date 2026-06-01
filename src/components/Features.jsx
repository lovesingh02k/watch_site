import { Eye, Lightbulb, Droplets, Gem, Link2 } from "lucide-react";

const watch = "/watches/watch.png";

const Feature = ({ icon, title, text, className, line = "right" }) => {
  return (
    <div className={`absolute text-white ${className}`}>
      <div className="mb-3 flex justify-center">{icon}</div>

      <h3 className="text-2xl font-bold leading-tight">{title}</h3>

      <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-white/80">
        {text}
      </p>

      <div
        className={`absolute bg-white/80 ${
          line === "right"
            ? "left-full top-[100px] ml-10 h-[1px] w-28"
            : line === "left"
            ? "right-full top-[100px] mr-10 h-[1px] w-28"
            : "left-1/2 bottom-full mb-3 h-24 w-[1px] -translate-x-1/2"
        }`}
      />
    </div>
  );
};

const Features = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-600 to-black px-6 py-20 text-center text-white">
      <h1 className="mb-3 text-4xl font-bold">FEATURES</h1>

      <p className="text-sm text-white/80">
        Discover the FORCE collection and all of our watches
      </p>

      <div className="relative mx-auto mt-10 h-[650px] max-w-6xl">
        <img
          src={watch}
          alt="Timex Easy Reader Watch"
          className="absolute left-1/2 top-8 z-10 w-[760px] -translate-x-1/2 drop-shadow-[0_0_40px_rgba(255,255,255,0.25)]"
        />

        <Feature
          icon={<Eye size={40} />}
          title="Easy Read Dial"
          text="Large Arabic numerals for an easy and instant time read."
          className="left-12 top-20 text-left"
          line="right"
        />

        <Feature
          icon={<Link2 size={40} />}
          title="Two-Tone Bracelet"
          text="Classic stainless steel and gold tone bracelet design."
          className="left-16 top-[330px] text-left"
          line="right"
        />

        <Feature
          icon={<Lightbulb size={40} />}
          title="Indiglo Night Light"
          text="Signature Indiglo backlight for clear visibility in the dark."
          className="right-14 top-20 text-left"
          line="left"
        />

        <Feature
          icon={<Gem size={40} />}
          title="Quartz Movement"
          text="Ensures reliable and accurate timekeeping."
          className="right-12 top-[330px] text-left"
          line="left"
        />

        <Feature
          icon={<Droplets size={40} />}
          title="Water Resistant"
          text="Built to handle everyday splashes and light water exposure."
          className="left-1/2 bottom-6 -translate-x-1/2 text-center"
          line="top"
        />
      </div>
    </section>
  );
};

export default Features;