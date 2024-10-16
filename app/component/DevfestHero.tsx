import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import IconsArt from './IconsArt';

const DevfestHero = () => {
  return (
    <>
      <main className="pt-[150px] bg-pastel-yellow">
        <div className="w-full md:max-w-[1500px] mx-auto">
          <header className="container flex gap-4 md:gap-7 flex-col items-center justify-between">
            <h1 className="font-bold text-4xl md:text-8xl">
              Devfest Ibadan &apos;24
            </h1>
            <p className="text-[#4D4D4D] text-lg md:text-2xl text-center md:w-[1000px]">
              Whatsup Ibadan!!!. Be a part of the largest tech event in Ibadan
              where tech enthusiasts come together to explore cutting-edge
              technology and shape the future
            </p>
            <p className="text-center font-bold">December 3rd 2024 at 9:00PM</p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-5 text-sm'">
              <Link
                href="https://gdg.community.dev/events/details/google-gdg-ibadan-presents-devfest-ibadan-2024/"
                target="_blank"
                className="bg-black py-4 px-52 border-[1px] border-black text-white hover:bg-core-blue hover:text-white rounded-[100px] flex"
              >
                Get Ticket <ArrowUpRight />
              </Link>

              <Link
                href="https://sessionize.com/devfest-ibadan-2024"
                target="_blank"
                className="bg-white py-4 px-52 border-[1px] border-black text-black hover:bg-core-blue hover:text-white rounded-[100px]"
              >
                Apply to Speak
              </Link>
            </div>
          </header>
        </div>
        <IconsArt className="flex flex-col -mt-64 md:-mt-[150px]" />
      </main>
    </>
  );
};

export default DevfestHero;
