import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SpeakerOne from '@/public/SpeakerOne.jpeg';
import SpeakerTwo from '@/public/SpeakerTwo.jpeg';
import SpeakerThree from '@/public/SpeakerThree.jpeg';

const OurSpeakers = () => {
  return (
    <>
      <div className="bg-[#fcfcfc]">
        <div className="w-full md:max-w-[1500px] mx-auto py-32 md:py-80 px-24">
          <div className="flex flex-col gap-52">
            <h1 className="text-2xl md:text-6xl font-bold">
              Meet Our amazing Speakers
            </h1>
            <div className="flex flex-row gap-5">
              <Link
                href="#"
                className="bg-black py-4 px-20 md:px-52 border-[1px] md:text-lg border-black text-white hover:bg-core-blue hover:text-white rounded-[100px] flex items-center"
              >
                View All <ArrowUpRight />
              </Link>

              <Link
                href="#"
                className="bg-white py-4 px-20 md:px-52 border-[1px] border-black text-black hover:bg-core-blue hover:text-white rounded-[100px]"
              >
                Apply to Speak
              </Link>
            </div>
            <div className="flex flex-col md:flex-row gap-24">
              <div className="w-full md:w-1/3 border-4 border-black rounded-xl overflow-hidden">
                <Image
                  src={SpeakerOne}
                  alt="Speaker"
                  className="w-full h-[300px] object-cover object-center border-b-4 border-black "
                />
                <div className="w-full p-8">
                  <h1 className="font-bold text-2xl">Ayoola Theophilus</h1>
                  <p className="py-2 text-[#1e1e1e]">Co-Founder R17</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 border-4 border-black rounded-xl overflow-hidden">
                <Image
                  src={SpeakerTwo}
                  alt="Speaker"
                  className="w-full h-[300px] object-cover object-center border-b-4 border-black "
                />
                <div className="w-full p-8">
                  <h1 className="font-bold text-2xl">Ayoola Theophilus</h1>
                  <p className="py-2 text-[#1e1e1e]">Co-Founder R17</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 border-4 border-black rounded-xl overflow-hidden">
                <Image
                  src={SpeakerThree}
                  alt="Speaker"
                  className="w-full h-[300px] object-cover object-center border-b-4 border-black "
                />
                <div className="w-full p-8">
                  <h1 className="font-bold text-2xl">Ayoola Theophilus</h1>
                  <p className="py-2 text-[#1e1e1e]">Co-Founder R17</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSpeakers;
