import { Link } from "react-router-dom";
import { CircleArrowLeft } from 'lucide-react';

const cards = [
  { img: "/src/assets/images/rado/1.jpg", title: "Rado Centrix Automatic Black Leather", price: "$200" },
  { img: "/src/assets/images/rado/2.jpg", title: "Rado Centrix Black Ceramic", price: "$250" },
  { img: "/src/assets/images/rado/3.jpg", title: "Rado Centrix Diamonds Gold Edition", price: "$300" },
  { img: "/src/assets/images/rado/4.jpg", title: "Rado Jubilé Two-Tone Gold Black", price: "$350" },
  { img: "/src/assets/images/rado/5.jpg", title: "Rado HyperChrome Black Ceramic", price: "$400" },
  { img: "/src/assets/images/rado/6.jpg", title: "Rado HyperChrome Midnight Black", price: "$450" },
];

const Rado = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-20">

    <Link
    to="/"
    className="absolute left-4 top-4 ml-6 mt-6 hidden:sm:block text-gray-400 hover:text-gray-900 duration-300"
    >
      <CircleArrowLeft size={40} />
    </Link>

      <h1 className="mx-auto w-fit rounded-full border-[3px] border-black px-10 py-4 text-center font-serif text-lg font-bold text-black shadow-lg">
        Rado Collections
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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

            <h2 className="mt-4 text-lg font-bold text-gray-800 font-serif cursor-pointer hover:text-blue-500 transition duration-300">
              {card.title}
            </h2>
            <p className="mt-2 text-gray-600 font-serif cursor-pointer hover:text-blue-500 transition duration-300">
              {card.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rado;