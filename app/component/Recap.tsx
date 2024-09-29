import RecapImage from '@/public/Recap.png';
import Image from 'next/image';
import { Button } from '../_module/components/ui/button';
import IconsArt from './IconsArt';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

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
                className="hidden md:block py-7 px-52 border-[1px] border-black bg-white  text-black hover:text-white hover:bg-core-blue rounded-[100px]"
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
            <Image
              src={RecapImage}
              alt="devfest recap"
              className="w-full relative z-10"
            />
          </div>
        </div>
        <IconsArt className="flex flex-col -mt-[200px] md:-mt-[390px]" />
      </div>
    </>
  );
};

export default Recap;
