const Header = () => {
  return (
    <section className="mt-8 flex items-center justify-center gap-8 px-10 pb-15">
      <div className="-rotate-6 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-950 p-3 transition-all duration-300 hover:-translate-y-4 hover:scale-110 hover:rotate-0">
        <img
          src="/watches/1.jpg"
          alt="Classic Heritage"
          className="h-72 w-[300px] rounded-xl border border-white/10 object-cover shadow-2xl"
        />
        <p className="mt-4 pb-3 text-center text-xl italic text-yellow-100">
          Classic Heritage
        </p>
      </div>

      <div className="rounded-2xl bg-gradient-to-b from-gray-800 to-gray-950 p-3 transition-all duration-300 hover:-translate-y-4 hover:scale-110">
        <img
          src="/watches/2.jpg"
          alt="Limited Edition"
          className="h-80 w-[300px] rounded-xl border border-white/10 object-cover shadow-2xl"
        />

        <p className="mt-4 pb-3 text-center text-xl italic text-yellow-100">
          Limited Edition
        </p>
      </div>

      <div className="rotate-6 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-950 p-3 transition-all duration-300 hover:-translate-y-4 hover:scale-110 hover:rotate-0">
        <img
          src="/watches/3.jpg"
          alt="Modern Precision"
          className="h-72 w-[288px] rounded-xl border border-white/10 object-cover shadow-2xl"
        />
        <p className="mt-4 pb-3 text-center text-xl italic text-yellow-100">
          Modern Precision
        </p>
      </div>
    </section>
  );
};

export default Header;