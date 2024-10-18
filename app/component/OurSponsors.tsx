import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import heyfood from '@/public/heyfood.png';
import LaCasera from '@/public/LaCasera.png';
import cardify from '@/public/cardify.png';
import { Button } from '../_module/components/ui/button';
const OurSponsors = () => {
  return (
    <>
      <div className="bg-[#fcfcfc]">
        <div className="w-full md:max-w-[1500px] mx-auto py-32 md:py-80 px-24">
          <div className="container flex flex-col gap-52">
            <div className="w-full flex flex-row items-center justify-between">
              <h1 className="font-bold text-xl md:text-5xl">Our sponsors</h1>
              <Link
                href="https://drive.google.com/file/d/11f8zdyoxljJ4TYRcHBDMfYtLqFkQDl_0/view"
                target="_blank"
              >
                <Button className="text-sm md:text-xl rounded-[100px] bg-black text-white hover:bg-core-blue hover:border border-solid border-black px-20 md:px-52 py-4 md:py-10 flex items-center">
                  Apply to Sponsor <ArrowUpRight />
                </Button>
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
