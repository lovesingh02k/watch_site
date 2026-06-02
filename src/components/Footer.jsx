const Footer = () => {
  return (
    <footer className="bg-slate-200 px-4 py-10 text-gray-500 md:px-8 md:py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 md:flex-row">
        <div className="max-w-sm text-center md:text-left">
          <img
            src="/logo.png"
            alt="Logo"
            className="mx-auto w-44 md:mx-0 md:w-60"
          />

          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            Premium watches crafted for style, precision, and elegance.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="mb-4 text-xl font-bold text-gray-700">
            Get to Know Us
          </h3>

          <ul className="flex flex-col gap-3">
            <li>
              <a href="#" className="transition hover:text-orange-400">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-orange-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-orange-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-orange-400">
                Investor Relations
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-orange-400">
                Watch Devices
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-orange-400">
                Watch Science
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-black/10 pt-6 text-center text-sm text-gray-700">
        © 2026 Watch Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;