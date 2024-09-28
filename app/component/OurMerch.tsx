import Image from 'next/image';
import IconsArt_S from './IconsArt_S';
import backpack from '@/public/bagpack.png';
import hoodie from '@/public/hoodie.jpeg';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const OurMerch = () => {
  return (
    <>
      <div className="bg-pastel-red">
        <div className="w-full md:max-w-[1500px] mx-auto pt-32 md:pt-52 px-24 h-max">
          <div className="flex flex-col gap-24">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="w-full md:w-3/5 flex flex-col gap-5">
                <h1 className="font-bold text-3xl md:text-5xl">
                  Explore our Merch
                </h1>
                <p className="tracking-wider text-xl text-left">
                  Show your DevFest spirit with our exclusive event merchandise!
                  From stylish apparel to handy tech accessories, our merch
                  store has something for everyone. Each item is designed to
                  celebrate the spirit of innovation and community that defines
                  DevFest.
                </p>
              </div>
              <Link
                href="https://selar.co/m/gdg-ibadan1"
                className="mt-10 bg-black py-4 px-20 md:px-52 border-[1px] md:text-lg border-black text-white hover:bg-core-blue hover:text-white rounded-[100px] flex items-center"
              >
                Get Now <ArrowUpRight />
              </Link>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-24 z-10">
              <Image
                src={backpack}
                alt="backpack"
                className="w-full md:w-1/4 rounded-2xl border-[1px] border-black"
              />
              <Image
                src={hoodie}
                alt="hoodie"
                className="w-full md:w-1/4 rounded-2xl border-[1px] border-black object-cover"
              />
              <Image
                src={hoodie}
                alt="hoodie"
                className="w-full md:w-1/4 rounded-2xl border-[1px] border-black object-cover"
              />
              <Image
                src={backpack}
                alt="backpack"
                className="w-full md:w-1/4 rounded-2xl border-[1px] border-black"
              />
            </div>
          </div>
        </div>
        <IconsArt_S className="flex flex-col -mt-0 md:-mt-124" />
      </div>
    </>
  );
};

export default OurMerch;
