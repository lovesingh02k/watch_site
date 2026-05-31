const cards = [
  { img: "src/assets/images/Brands/Titan.png", title: "Titan" },
  { img: "src/assets/images/Brands/Rado.png", title: "Rado" },
  { img: "src/assets/images/Brands/Fossil.png", title: "Fossil" },
  { img: "src/assets/images/Brands/Tissot.png", title: "Tissot " },
  { img: "src/assets/images/Brands/Armani.png", title: "Armani" },
  { img: "src/assets/images/Brands/Timex.png", title: "Timex " },
  { img: "src/assets/images/Brands/Diesel.png", title: "Diesel" },
  { img: "src/assets/images/Brands/Movado.png", title: "Movado" },
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

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white p-4 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              src={card.img}
              alt={card.title}
              className="h-48 w-full rounded-lg object-contain"
            />

            <h2 className="mt-4 text-lg font-bold text-gray-800 cursor-pointer hover:text-blue-400 duration-300">
              {card.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WatchBrands;