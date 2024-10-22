import bucket_cap from '@/public/bucket-cap.jpeg';
import backpack from '@/public/dev-backpack.jpeg';
import t_shirt from '@/public/t-shirt.jpeg';
import thermo_bottle from '@/public/thermo-bottle.jpeg';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import IconsArt_S from './IconsArt_S';

const OurMerch = () => {
  return (
    <>
      <div className="bg-pastel-red">
        <div className="w-full md:max-w-[1500px] mx-auto pt-32 md:pt-52 h-max">
          <div className="container flex flex-col gap-24">
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
                className="mt-10 bg-black py-4 px-20 md:px-52 border-[1px] md:text-lg text-white hover:bg-core-blue hover:text-white rounded-[100px] flex items-center"
              >
                Get Now <ArrowUpRight />
              </Link>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between z-10">
              <Image
                src={backpack}
                alt="backpack"
                className="w-full md:w-1/4 rounded-2xl border-[1px] border-black object-cover object-center"
              />
              <Image
                src={bucket_cap}
                alt="bucket cap"
                className="w-full md:w-1/4 rounded-2xl border-[1px] border-black object-cover object-center"
              />
              <Image
                src={t_shirt}
                alt="t shirt"
                className="w-full md:w-1/4 rounded-2xl border-[1px] border-black object-cover object-center"
              />
              <Image
                src={thermo_bottle}
                alt="thermo bottle"
                className="w-full md:w-1/5 rounded-2xl border-[1px] border-black object-cover object-center"
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
