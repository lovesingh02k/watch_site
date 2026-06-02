const Navbar = () => {
  return (
    <nav className="flex flex-col items-center gap-5 px-4 py-4 md:flex-row md:justify-between md:px-8">
      <img
        src="/logo.png"
        alt="Logo"
        className="h-20 w-auto object-contain md:h-28"
      />

      <div className="flex w-full max-w-md items-center rounded-full bg-white/10 px-5 py-3 backdrop-blur md:w-[34rem]">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent text-base italic text-white placeholder:text-gray-300 outline-none"
        />

        <span className="cursor-pointer text-2xl text-gray-300">⌕</span>
      </div>

      <ul className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-gray-300 md:gap-8 md:text-base">
        <li className="cursor-pointer duration-300 hover:text-blue-500">Home</li>
        <li className="cursor-pointer duration-300 hover:text-blue-500">About</li>
        <li className="cursor-pointer duration-300 hover:text-blue-500">Services</li>
        <li className="cursor-pointer duration-300 hover:text-blue-500">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;