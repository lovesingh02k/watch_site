import { Link } from "react-router-dom";
import { CircleArrowLeft } from 'lucide-react';

import diesel1 from "../../assets/images/diesel/1.jpg";
import diesel2 from "../../assets/images/diesel/2.jpg";
import diesel3 from "../../assets/images/diesel/3.jpg";
import diesel4 from "../../assets/images/diesel/4.jpg";
import diesel5 from "../../assets/images/diesel/5.jpg";
import diesel6 from "../../assets/images/diesel/6.jpg";

const cards = [
  { img: diesel1, title: "Diesel Overflow Tactical", price: "$200" },
  { img: diesel2, title: "Diesel Mega Chief Black Steel", price: "$250" },
  { img: diesel3, title: "Diesel Mega Chief Brown Leather", price: "$300" },
  { img: diesel4, title: "Diesel Overflow Gunmetal", price: "$350" },
  { img: diesel5, title: "Diesel Mr. Daddy Black", price: "$400" },
  { img: diesel6, title: "Diesel Mr. Daddy Leather", price: "$450" },
];

const Diesel = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-20">

    <Link
    to="/"
    className="absolute left-4 top-4 ml-6 mt-6 hidden:sm:block text-gray-400 hover:text-gray-900 duration-300"
    >
      <CircleArrowLeft size={40} />
    </Link>

      <h1 className="mx-auto w-fit rounded-full border-[3px] border-black px-10 py-4 text-center font-serif text-lg font-bold text-black shadow-lg">
        Diesel Collections
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

export default Diesel;