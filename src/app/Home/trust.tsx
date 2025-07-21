'use client';

export default function Trust() {
  return (
    <section className="py-2 mb-18 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header Text */}
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-xl text-gray-500 mb-2 tracking-tight">
            Trusted by companies worldwide
          </h2>
        </div>

        {/* Scrolling Logos Container */}
        <div className="relative overflow-hidden">
          {/* Blur effects */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Top Row - Adamass logos scrolling right */}
          <div className="flex animate-scroll-right mb-8">
            <div className="flex items-center gap-16 whitespace-nowrap">
              {/* Multiple repetitions for seamless loop */}
              <img src="/trust/adamass/nasdaq.svg" alt="NASDAQ" className="h-8" />
              <img src="/trust/adamass/zoion.svg" alt="Zoion" className="h-8" />
              <img src="/trust/adamass/boksy.svg" alt="Boksy" className="h-8" />
              <img src="/trust/adamass/ne.svg" alt="NE" className="h-8" />
              <img src="/trust/adamass/tr.svg" alt="TR" className="h-8" />
              <img src="/trust/adamass/tele2.svg" alt="Tele2" className="h-8" />
              <img src="/trust/adamass/ikea.svg" alt="IKEA" className="h-8" />
              <img src="/trust/adamass/lfc.svg" alt="LFC" className="h-8" />
              
              {/* Repeat for seamless loop */}
              <img src="/trust/adamass/nasdaq.svg" alt="NASDAQ" className="h-8" />
              <img src="/trust/adamass/zoion.svg" alt="Zoion" className="h-8" />
              <img src="/trust/adamass/boksy.svg" alt="Boksy" className="h-8" />
              <img src="/trust/adamass/ne.svg" alt="NE" className="h-8" />
              <img src="/trust/adamass/tr.svg" alt="TR" className="h-8" />
              <img src="/trust/adamass/tele2.svg" alt="Tele2" className="h-8" />
              <img src="/trust/adamass/ikea.svg" alt="IKEA" className="h-8" />
              <img src="/trust/adamass/lfc.svg" alt="LFC" className="h-8" />

              {/* Third repetition */}
              <img src="/trust/adamass/nasdaq.svg" alt="NASDAQ" className="h-8" />
              <img src="/trust/adamass/zoion.svg" alt="Zoion" className="h-8" />
              <img src="/trust/adamass/boksy.svg" alt="Boksy" className="h-8" />
              <img src="/trust/adamass/ne.svg" alt="NE" className="h-8" />
              <img src="/trust/adamass/tr.svg" alt="TR" className="h-8" />
              <img src="/trust/adamass/tele2.svg" alt="Tele2" className="h-8" />
              <img src="/trust/adamass/ikea.svg" alt="IKEA" className="h-8" />
              <img src="/trust/adamass/lfc.svg" alt="LFC" className="h-8" />
            </div>
          </div>

          {/* Bottom Row - Studiosphere logos scrolling left */}
          <div className="flex animate-scroll-left">
            <div className="flex items-center gap-16 whitespace-nowrap">
              {/* Multiple repetitions for seamless loop */}
              <img src="/trust/studiosphere/philips.svg" alt="Philips" className="h-8" />
              <img src="/trust/studiosphere/5ire.svg" alt="5ire" className="h-8" />
              <img src="/trust/studiosphere/dream.svg" alt="Dream" className="h-8" />
              <img src="/trust/studiosphere/drake.svg" alt="Drake" className="h-8" />
              <img src="/trust/studiosphere/fidi.svg" alt="Fidi" className="h-8" />
              <img src="/trust/studiosphere/doldadress.svg" alt="Doldadress" className="h-8" />
              <img src="/trust/studiosphere/porsche.svg" alt="Porsche" className="h-8" />

              {/* Repeat for seamless loop */}
              <img src="/trust/studiosphere/philips.svg" alt="Philips" className="h-8" />
              <img src="/trust/studiosphere/5ire.svg" alt="5ire" className="h-8" />
              <img src="/trust/studiosphere/dream.svg" alt="Dream" className="h-8" />
              <img src="/trust/studiosphere/drake.svg" alt="Drake" className="h-8" />
              <img src="/trust/studiosphere/fidi.svg" alt="Fidi" className="h-8" />
              <img src="/trust/studiosphere/doldadress.svg" alt="Doldadress" className="h-8" />
              <img src="/trust/studiosphere/porsche.svg" alt="Porsche" className="h-8" />

              {/* Third repetition */}
              <img src="/trust/studiosphere/philips.svg" alt="Philips" className="h-8" />
              <img src="/trust/studiosphere/5ire.svg" alt="5ire" className="h-8" />
              <img src="/trust/studiosphere/dream.svg" alt="Dream" className="h-8" />
              <img src="/trust/studiosphere/drake.svg" alt="Drake" className="h-8" />
              <img src="/trust/studiosphere/fidi.svg" alt="Fidi" className="h-8" />
              <img src="/trust/studiosphere/doldadress.svg" alt="Doldadress" className="h-8" />
              <img src="/trust/studiosphere/porsche.svg" alt="Porsche" className="h-8" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
