'use client';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import oneapp from '@/public/1appnewlogo.8e95dfd0.png';
import turing from '@/public/turing.png';
import altschool from '@/public/altschool-africa-logo-4365C6B160-seeklogo.com.png';
import cardify from '@/public/Cardify-Africa-Logo-Black-544-by-180.png';
import codemagic from '@/public/codemagic.svg';
import digitalocean from '@/public/digitalocean-2.svg';
import google from '@/public/Google_Icons-09-512.webp';
import youverify from '@/public/logo_iffgzd.svg';
import heyfood from '@/public/logo-long.svg';
import ship from '@/public/shiip.png';
import halal from '@/public/SuegFTtO_400x400.jpg';
import { Button } from '../_module/components/ui/button';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { useRef } from 'react';
import { wrap } from '@motionone/utils';

interface ParallaxProps {
  imageSrc: StaticImageData;
  alt: string;
  baseVelocity: number;
  divClassName: string;
}

function ParallaxImage({
  imageSrc,
  alt,
  baseVelocity = 100,
  divClassName,
}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-300, 300, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div className={divClassName} style={{ x }}>
      <Image
        src={imageSrc}
        alt={alt}
        className="h-full object-center object-contain"
      />{' '}
    </motion.div>
  );
}

const OurSponsors = () => {
  return (
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-24 overflow-hidden">
            <ParallaxImage
              imageSrc={oneapp}
              alt="OneApp"
              baseVelocity={-30}
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <ParallaxImage
              imageSrc={turing}
              alt="Turing"
              baseVelocity={-30}
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <ParallaxImage
              imageSrc={altschool}
              alt="AltSchool"
              baseVelocity={-30}
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <ParallaxImage
              imageSrc={cardify}
              alt="cardify"
              baseVelocity={-30}
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />

            <ParallaxImage
              imageSrc={codemagic}
              alt="Codemagic"
              baseVelocity={30}
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <ParallaxImage
              imageSrc={digitalocean}
              alt="DigitalOcean"
              baseVelocity={30}
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <ParallaxImage
              imageSrc={google}
              alt="Google"
              baseVelocity={30}
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <ParallaxImage
              imageSrc={youverify}
              alt="YouVerify"
              baseVelocity={30}
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />

            <ParallaxImage
              imageSrc={heyfood}
              alt="Heyfood"
              baseVelocity={-30}
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <ParallaxImage
              imageSrc={ship}
              alt="Ship"
              baseVelocity={-30}
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <ParallaxImage
              imageSrc={halal}
              alt="Halal"
              baseVelocity={-30}
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSponsors;
