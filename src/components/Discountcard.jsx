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
    <section className="flex min-h-screen items-center justify-center bg-gray-100 px-6 py-12">
      <div className="grid w-full max-w-4xl overflow-hidden rounded-4 xl bg-white shadow-2xl md:grid-cols-2">
        <div className="bg-gradient-to-r from-slate-950 via-slate-700 to-slate-400 p-10 text-white">
          <h3 className="mb-6 font-serif text-sm font-bold underline">
            Limited Time Offer
          </h3>

          <h1 className="mb-5 font-serif text-4xl font-bold leading-tight">
            Premium Luxury <br />
            Watches Collection
          </h1>

          <p className="mb-8 max-w-md text-base leading-relaxed text-white/90">
            Discover our exclusive selection of premium timepieces with special
            discounts up to 30% off.
          </p>

          <div className="mb-8 flex flex-wrap gap-3">
            {[
              [format(timeLeft.days), "Days"],
              [format(timeLeft.hours), "Hours"],
              [format(timeLeft.minutes), "Minutes"],
              [format(timeLeft.seconds), "Seconds"],
            ].map(([num, label]) => (
              <div
                key={label}
                className="rounded-xl bg-slate-800/70 px-5 py-4 text-center"
              >
                <h2 className="text-2xl font-bold">{num}</h2>
                <p className="text-xs">{label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-5 text-xs">
            <span>🚚 Free Shipping</span>
            <span>🛡️ 2-Year Warranty</span>
            <span>❤️ 30-Day Returns</span>
          </div>
        </div>

        <div className="relative h-[420px] bg-gray-200 md:h-auto">
          <img
            src="/discount-watch.jpg"
            alt="Luxury Watch"
            className="h-full w-full object-cover"
          />

          <div className="absolute bottom-5 right-5 rounded-2xl bg-white px-6 py-4 text-center shadow-xl cursor-pointer">
            <p className="text-xs text-gray-500 line-through">₹899.99</p>
            <h2 className="text-3xl font-bold text-slate-900">₹629.99</h2>
            <p className="text-xs font-semibold text-green-600">Save 30%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discountcard;