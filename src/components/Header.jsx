const Header = () => {
  const watches = [
    {
      img: "/watches/1.jpg",
      title: "Classic Heritage",
      rotate: "md:-rotate-6",
      height: "md:h-72",
    },
    {
      img: "/watches/2.jpg",
      title: "Limited Edition",
      rotate: "",
      height: "md:h-80",
    },
    {
      img: "/watches/3.jpg",
      title: "Modern Precision",
      rotate: "md:rotate-6",
      height: "md:h-72",
    },
  ];

  return (
    <section className="mt-8 grid grid-cols-1 gap-6 px-4 pb-12 sm:grid-cols-2 md:flex md:items-center md:justify-center md:gap-8 md:px-10 md:pb-15">
      {watches.map((watch) => (
        <div
          key={watch.title}
          className={`${watch.rotate} rounded-2xl bg-gradient-to-b from-gray-800 to-gray-950 p-3 transition-all duration-300 hover:-translate-y-4 hover:scale-105 hover:rotate-0 md:hover:scale-110`}
        >
          <img
            src={watch.img}
            alt={watch.title}
            className={`h-64 w-full rounded-xl border border-white/10 object-cover shadow-2xl sm:h-72 md:w-[300px] ${watch.height}`}
          />

          <p className="mt-4 pb-3 text-center text-lg italic text-yellow-100 md:text-xl">
            {watch.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Header;