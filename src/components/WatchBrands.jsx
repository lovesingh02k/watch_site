import { Link } from "react-router-dom";

const cards = [
  { img: "src/assets/images/Titan.png", title: "Titan", href: "/titan" },
  { img: "src/assets/images/Rado.png", title: "Rado", href: "/rado" },
  { img: "src/assets/images/Fossil.png", title: "Fossil", href: "/fossil" },
  { img: "src/assets/images/Tissot.png", title: "Tissot", href: "/tissot" },
  { img: "src/assets/images/Armani.png", title: "Armani", href: "/armani" },
  { img: "src/assets/images/Timex.png", title: "Timex", href: "/timex" },
  { img: "src/assets/images/Diesel.png", title: "Diesel", href: "/diesel" },
  { img: "src/assets/images/Movado.png", title: "Movado", href: "/movado" },
];

const WatchBrands = () => {
  return (
    <section className="min-h-screen w-full bg-gray-200 px-10 pt-10 text-center">
      <h1 className="font-serif text-4xl leading-tight text-black">
        Premium Watch <span className="text-orange-600">Brands</span>
      </h1>

      <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"></div>

      <p className="mx-auto mt-6 max-w-4xl font-serif font-light leading-relaxed text-gray-500">
        Discover the world's most prestigious watchmakers — curated picks for
        every style.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cards.map((card, index) => (
          <Link to={card.href} key={index}>
            <div className="rounded-2xl bg-gray-200 p-4 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src={card.img}
                alt={card.title}
                className="h-48 w-full rounded-lg bg-gray-300 object-contain"
              />

              <h2 className="mt-4 cursor-pointer text-lg font-bold text-gray-800 duration-300 hover:text-blue-400">
                {card.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WatchBrands;