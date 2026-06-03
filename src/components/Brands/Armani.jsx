import { Link } from "react-router-dom";
import { CircleArrowLeft } from "lucide-react";

import armani1 from "../../assets/images/armani/1.png";
import armani2 from "../../assets/images/armani/2.png";
import armani3 from "../../assets/images/armani/3.jpg";
import armani4 from "../../assets/images/armani/4.jpg";
import armani5 from "../../assets/images/armani/5.jpg";
import armani6 from "../../assets/images/armani/6.jpg";

const cards = [
  { img: armani1, title: "Emporio Armani Black Rose Gold Chronograph", price: "$250" },
  { img: armani2, title: "Emporio Armani Square Chronograph", price: "$700" },
  { img: armani3, title: "Emporio Armani Rose Gold Leather", price: "$650" },
  { img: armani4, title: "Emporio Armani Roman Numeral Chronograph", price: "$300" },
  { img: armani5, title: "Emporio Armani Ceramica Black", price: "$150" },
  { img: armani6, title: "Emporio Armani Ceramica Gunmetal", price: "$550" },
];

const Armani = () => {
  return (
    <section className="relative min-h-screen bg-white px-6 py-20">
      <Link
        to="/"
        className="absolute left-4 top-4 ml-6 mt-6 text-gray-400 transition duration-300 hover:text-gray-900 sm:block"
      >
        <CircleArrowLeft size={40} />
      </Link>

      <h1 className="mx-auto w-fit rounded-full border-[3px] border-black px-10 py-4 text-center font-serif text-lg font-bold text-black shadow-lg">
        Armani Collections
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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

            <h2 className="mt-4 cursor-pointer font-serif text-lg font-bold text-gray-800 transition duration-300 hover:text-blue-500">
              {card.title}
            </h2>

            <p className="mt-2 cursor-pointer font-serif text-gray-600 transition duration-300 hover:text-blue-500">
              {card.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Armani;