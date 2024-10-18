import IconsArt_S from '@/app/component/IconsArt_S';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../../ui/button';

interface ComingSoonProps {
  page: string; // Correctly specify the prop type
}

const ComingSoon: React.FC<ComingSoonProps> = ({ page }) => {
  return (
    <>
      <div className="w-full h-screen pt-[150px]">
        {/* <div className="w-full h-screen"> */}
        <div className="h-full bg-eclipse bg-no-repeat bg-top bg-cover flex flex-col justify-between md:justify-end">
          <div className="h-fit w-full md:max-w-[1500px] mx-auto mt-52">
            <div className="container flex gap-14 md:gap-7 flex-col items-center justify-between">
              <h1 className="font-bold text-5xl text-center">
                {page} Coming Soon
              </h1>
              <p className="text-[#4D4D4D] text-2xl text-center md:w-[850px]">
                We&apos;re crafting an agenda packed with insightful talks,
                hands-on workshops, and networking opportunities just for you.
                Stay tuned—our full schedule will be revealed soon!
              </p>

              <Link href="#" target="_blank">
                <Button className="text-sm md:text-xl rounded-[100px] bg-black text-white hover:bg-core-blue hover:border border-solid border-black px-20 md:px-52 py-4 md:py-10 hidden md:flex items-center">
                  Notify Me
                  <ArrowUpRight />
                </Button>
              </Link>
            </div>
          </div>
          <IconsArt_S className="" />
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
