import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import heyfood from '@/public/heyfood.png';
import LaCasera from '@/public/LaCasera.png';
import cardify from '@/public/cardify.png';
const OurSponsors = () => {
  return (
    <>
      <div className="bg-[#fcfcfc]">
        <div className="w-full md:max-w-[1500px] mx-auto py-32 md:py-80 px-24">
          <div className="flex flex-col gap-52">
            <div className="w-full flex flex-row items-center justify-between">
              <h1 className="font-bold text-2xl md:text-5xl">Our sponsors</h1>
              <Link
                href="#"
                className="flex flex-row items-center py-4 px-20 md:px-52 text-sm md:text-lg border-[1px] border-black bg-black text-white hover:bg-core-blue hover:text-white rounded-[100px]"
              >
                Apply to Sponsor
                <ArrowUpRight />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-24">
              <div className="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]">
                <Image
                  src={LaCasera}
                  alt="LaCasera"
                  className="h-full object-center object-cover"
                />
              </div>
              <div className="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]">
                <Image
                  src={heyfood}
                  alt="heyfood"
                  className="h-full object-center object-contain"
                />
              </div>
              <div className="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]">
                <Image
                  src={cardify}
                  alt="cardify"
                  className="h-full object-center object-contain"
                />
              </div>
              <div className="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]">
                <Image
                  src={cardify}
                  alt="cardify"
                  className="h-full object-center object-contain"
                />
              </div>
              <div className="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]">
                <Image
                  src={cardify}
                  alt="cardify"
                  className="h-full object-center object-contain"
                />
              </div>
              <div className="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]">
                <Image
                  src={LaCasera}
                  alt="LaCasera"
                  className="h-full object-center object-cover"
                />
              </div>
              <div className="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]">
                <Image
                  src={cardify}
                  alt="cardify"
                  className="h-full object-center object-contain"
                />
              </div>
              <div className="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]">
                <Image
                  src={heyfood}
                  alt="heyfood"
                  className="h-full object-center object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSponsors;
