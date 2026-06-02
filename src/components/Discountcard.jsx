import { useEffect, useState } from "react";

const Discountcard = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 40,
    seconds: 2,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
              else return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num) => String(num).padStart(2, "0");

  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10 md:px-6 md:py-12">
      <div className="grid w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2">
        <div className="bg-gradient-to-r from-slate-950 via-slate-700 to-slate-400 p-6 text-white md:p-10">
          <h3 className="mb-6 font-serif text-sm font-bold underline">
            Limited Time Offer
          </h3>

          <h1 className="mb-5 font-serif text-3xl font-bold leading-tight md:text-4xl">
            Premium Luxury <br />
            Watches Collection
          </h1>

          <p className="mb-8 max-w-md text-sm leading-relaxed text-white/90 md:text-base">
            Discover our exclusive selection of premium timepieces with special
            discounts up to 30% off.
          </p>

          <div className="mb-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            {[
              [format(timeLeft.days), "Days"],
              [format(timeLeft.hours), "Hours"],
              [format(timeLeft.minutes), "Minutes"],
              [format(timeLeft.seconds), "Seconds"],
            ].map(([num, label]) => (
              <div
                key={label}
                className="rounded-xl bg-slate-800/70 px-4 py-4 text-center md:px-5"
              >
                <h2 className="text-xl font-bold md:text-2xl">{num}</h2>
                <p className="text-xs">{label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 text-xs sm:flex-row sm:flex-wrap sm:gap-5">
            <span>🚚 Free Shipping</span>
            <span>🛡️ 2-Year Warranty</span>
            <span>❤️ 30-Day Returns</span>
          </div>
        </div>

        <div className="relative h-[300px] bg-gray-200 md:h-auto">
          <img
            src="/discount-watch.jpg"
            alt="Luxury Watch"
            className="h-full w-full object-cover"
          />

          <div className="absolute bottom-4 right-4 cursor-pointer rounded-2xl bg-white px-5 py-3 text-center shadow-xl md:bottom-5 md:right-5 md:px-6 md:py-4">
            <p className="text-xs text-gray-500 line-through">₹899.99</p>
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              ₹629.99
            </h2>
            <p className="text-xs font-semibold text-green-600">Save 30%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discountcard;