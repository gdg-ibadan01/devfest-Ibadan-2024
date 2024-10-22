import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { recapImages } from '../_module/data/recap-images';
import IconsArt from './IconsArt';

const Recap = () => {
  return (
    <>
      <div className="bg-pastel-green">
        <div className="w-full md:max-w-[1500px] mx-auto pt-80 md:pt-124">
          <div className="container">
            <div className="flex flex-row justify-between items-center mb-5 gap-3">
              <h1 className="font-bold text-2xl md:text-3xl">
                Recap of DevFest Ibadan &apos;23
              </h1>
              <Link
                href=""
                className="hidden md:block py-7 px-52 border-[1px] border-black hover:border-core-blue bg-white  text-black hover:text-white hover:bg-core-blue rounded-[100px]"
              >
                Devfest &apos;23 website
              </Link>
              <Link
                href="#"
                className="block md:hidden p-5 md:px-52 border-[1px] border-black bg-black text-white hover:bg-core-blue hover:text-white rounded-full"
              >
                <ArrowUpRight />
              </Link>
            </div>
            {/* will be replaced with the proper content when available */}
            <div className="w-full relative z-10 flex gap-10 overflow-x-scroll no-scrollbar">
              {recapImages.map((each, idx) => (
                <Image
                  key={idx}
                  src={each}
                  alt="devfest recap"
                  className="h-[430px] w-[405px] object-cover rounded-xl"
                />
              ))}
            </div>
          </div>
        </div>
        <IconsArt className="flex flex-col -mt-[200px] md:-mt-[390px]" />
      </div>
    </>
  );
};

export default Recap;
