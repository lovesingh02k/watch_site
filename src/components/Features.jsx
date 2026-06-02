import { Eye, Lightbulb, Droplets, Gem, Link2 } from "lucide-react";

const watch = "/watches/watch.png";

const features = [
  {
    icon: <Eye size={36} />,
    title: "Easy Read Dial",
    text: "Large Arabic numerals for an easy and instant time read.",
  },
  {
    icon: <Link2 size={36} />,
    title: "Two-Tone Bracelet",
    text: "Classic stainless steel and gold tone bracelet design.",
  },
  {
    icon: <Lightbulb size={36} />,
    title: "Indiglo Night Light",
    text: "Signature Indiglo backlight for clear visibility in the dark.",
  },
  {
    icon: <Gem size={36} />,
    title: "Quartz Movement",
    text: "Ensures reliable and accurate timekeeping.",
  },
  {
    icon: <Droplets size={36} />,
    title: "Water Resistant",
    text: "Built to handle everyday splashes and light water exposure.",
  },
];

const Features = () => {
  return (
    <section className="bg-gradient-to-b from-gray-600 to-black px-4 py-16 text-center text-white md:px-6 md:py-20">
      <h1 className="mb-3 text-3xl font-bold md:text-4xl">FEATURES</h1>

      <p className="text-sm text-white/80">
        Discover the FORCE collection and all of our watches
      </p>

      <div className="mx-auto mt-10 max-w-6xl">
        <img
          src={watch}
          alt="Timex Easy Reader Watch"
          className="mx-auto w-full max-w-[360px] drop-shadow-[0_0_40px_rgba(255,255,255,0.25)] md:max-w-[760px]"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur"
            >
              <div className="mb-3 flex justify-center">{item.icon}</div>

              <h3 className="text-xl font-bold leading-tight md:text-2xl">
                {item.title}
              </h3>

              <p className="mx-auto mt-2 max-w-[220px] text-sm leading-relaxed text-white/80">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;