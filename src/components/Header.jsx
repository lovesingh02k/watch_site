const Header = () => {
  return (
    <section className="mt-8 flex items-center justify-center gap-8 px-10">
      <div className="-rotate-6 rounded-xl bg-gray-700 transition-all duration-300 hover:scale-110 hover:-translate-y-4 hover:rotate-0">
        <img
          src="src/assets/images/1.jpg"
          alt="Classic Heritage"
          className="h-72 w-[300px] rounded-xl border border-slate-700 object-cover p-3 shadow-2xl"
        />
        <p className="mt-4 pb-3 text-center text-xl italic text-gray-300">
          Classic Heritage
        </p>
      </div>

      <div className="rounded-xl bg-gray-700 p-3 transition-all duration-300 hover:scale-110 hover:-translate-y-4">
        <img
          src="src/assets/images/2.jpg"
          alt="Limited Edition"
          className="h-80 w-[300px] rounded-xl border border-slate-700 object-cover shadow-2xl"
        />

        <p className="mt-4 text-center text-xl text-gray-300">
          Limited Edition
        </p>
      </div>

      <div className="rotate-6 rounded-xl bg-gray-700 transition-all duration-300 hover:scale-110 hover:-translate-y-4 hover:rotate-0">
        <img
          src="src/assets/images/3.jpg"
          alt="Modern Precision"
          className="h-72 w-[288px] rounded-xl border border-slate-700 object-cover p-3 shadow-2xl"
        />
        <p className="mt-4 pb-3 text-center text-xl italic text-gray-300">
          Modern Precision
        </p>
      </div>
    </section>
  );
};

export default Header;