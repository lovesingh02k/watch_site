const Footer = () => {
  return (
    <footer className="bg-slate-200 px-8 py-12 text-gray-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 md:flex-row">
        <div className="text-center md:text-left">
          <img src="/logo.png" alt="Logo" className="mx-auto w-60 md:mx-0" />
          <p className="mt-4 text-sm text-gray-500">
            Premium watches crafted for style, precision, and elegance.
          </p>
        </div>

        <ul className="flex flex-col gap-3 text-center md:text-left">
          <p className="mb-2 text-xl font-bold text-gray-700">Get to Know Us</p>

          <a href="#" className="text-gray-500 transition hover:text-orange-400">
            Careers
          </a>
          <a href="#" className="text-gray-500 transition hover:text-orange-400">
            Blog
          </a>
          <a href="#" className="text-gray-500 transition hover:text-orange-400">
            About Amazon
          </a>
          <a href="#" className="text-gray-500 transition hover:text-orange-400">
            Investor Relations
          </a>
          <a href="#" className="text-gray-500 transition hover:text-orange-400">
            Amazon Devices
          </a>
          <a href="#" className="text-gray-500 transition hover:text-orange-400">
            Amazon Science
          </a>
        </ul>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-black/10 pt-6 text-center text-sm text-gray-700">
        © 2026 Watch Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;