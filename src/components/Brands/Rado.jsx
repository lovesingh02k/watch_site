const cards = [
  { img: "/1.png", title: "Rado Watch 1" },
  { img: "/2.png", title: "Rado Watch 2" },
  { img: "/3.jpg", title: "Rado Watch 3" },
  { img: "/4.jpg", title: "Rado Watch 4" },
  { img: "/5.jpg", title: "Rado Watch 5" },
  { img: "/6.jpg", title: "Rado Watch 6" },
  { img: "/7.jpg", title: "Rado Watch 7" },
  { img: "/8.jpg", title: "Rado Watch 8" },
];

const Rado = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-20">
      <h1 className="mx-auto w-fit rounded-full border-[3px] border-black px-10 py-4 text-center font-serif text-lg font-bold text-black shadow-lg">
        Rado Collections
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-2xl bg-gray-200 p-4 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              src={card.img}
              alt={card.title}
              className="h-48 w-full rounded-lg bg-gray-300 object-contain"
            />

            <h2 className="mt-4 text-lg font-bold text-gray-800">
              {card.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rado;