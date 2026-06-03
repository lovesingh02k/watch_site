import { Link } from "react-router-dom";
import { CircleArrowLeft } from 'lucide-react';

import Tissot1 from "../../assets/images/Tissot/1.jpg";
import Tissot2 from "../../assets/images/Tissot/2.jpg";
import Tissot3 from "../../assets/images/Tissot/3.jpg";
import Tissot4 from "../../assets/images/Tissot/4.jpg";
import Tissot5 from "../../assets/images/Tissot/5.jpg";
import Tissot6 from "../../assets/images/Tissot/6.jpg";

const cards = [
  { img: Tissot1, title: "Tissot Seastar 1000 Powermatic 80 Black & Gold", price: "$200" },
  { img: Tissot2, title: "Tissot Seastar 1000 Chronograph Green Dial", price: "$250" },
  { img: Tissot3, title: "Tissot PRX Automatic Blue Dial", price: "$300" },
  { img: Tissot4, title: "Tissot Chronograph Rose Gold Black Leather", price: "$350" },
  { img: Tissot5, title: "Tissot Couturier Chronograph Black Dial", price: "$400" },
  { img: Tissot6, title: "Tissot Chronograph Classic Black Leather", price: "$450" },
];

const Tissot = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-20">

    <Link
    to="/"
    className="absolute left-4 top-4 ml-6 mt-6 hidden:sm:block text-gray-400 hover:text-gray-900 duration-300"
    >
      <CircleArrowLeft size={40} />
    </Link>
    
      <h1 className="mx-auto w-fit rounded-full border-[3px] border-black px-10 py-4 text-center font-serif text-lg font-bold text-black shadow-lg">
        Tissot Collections
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

            <h2 className="mt-4 text-lg font-bold text-gray-800 font-serif cursor-pointer hover:text-blue-500 transition duration-300 ">
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

export default Tissot;