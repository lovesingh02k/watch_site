import { Link } from "react-router-dom";
import { CircleArrowLeft } from 'lucide-react';

import Timex1 from "../../assets/images/Timex/1.jpg";
import Timex2 from "../../assets/images/Timex/2.jpg";
import Timex3 from "../../assets/images/Timex/3.webp";
import Timex4 from "../../assets/images/Timex/4.jpg";
import Timex5 from "../../assets/images/Timex/5.jpg";
import Timex6 from "../../assets/images/Timex/6.jpg";


const cards = [
  { img: Timex1, title: "Timex Easy Reader Classic", price: "$200" },
  { img: Timex2, title: "Timex Heritage Chronograph Brown Leather", price: "$250" },
  { img: Timex3, title: "Timex Waterbury Classic Chronograph", price: "$300" },
  { img: Timex4, title: "Timex Easy Reader Gold Edition", price: "$350" },
  { img: Timex5, title: "Timex Minimalist Black Dial", price: "$400" },
  { img: Timex6, title: "Timex Automatic Skeleton Blue Rose Gold", price: "$450" },
];

const Timex = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-20">

    <Link
    to="/"
    className="absolute left-4 top-4 ml-6 mt-6 hidden:sm:block text-gray-400 hover:text-gray-900 duration-300"
    >
      <CircleArrowLeft size={40} />
    </Link>

      <h1 className="mx-auto w-fit rounded-full border-[3px] border-black px-10 py-4 text-center font-serif text-lg font-bold text-black shadow-lg">
        Timex Collections
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

export default Timex;