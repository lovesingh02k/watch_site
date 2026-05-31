const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 mr-8 ml-3">
      <img 
        src="logo.png"
        alt="Logo"
        className="h-28 w-auto object-contain"
      />

        <div className="flex w-144 items-center rounded-full bg-white-900 px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent text-base italic text-white placeholder:text-gray-300 outline-none"
        />

            <span className="text-2xl text-gray-300 cursor-pointer">⌕</span>
        </div>

      <ul className="flex items-center justify-center gap-8 text-base font-medium text-gray-400">
        <li className="cursor-pointer hover:text-blue-500 duration-300">Home</li>
        <li className="cursor-pointer hover:text-blue-500 duration-300">About</li>
        <li className="cursor-pointer hover:text-blue-500 duration-300">Services</li>
        <li className="cursor-pointer hover:text-blue-500 duration-300">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;