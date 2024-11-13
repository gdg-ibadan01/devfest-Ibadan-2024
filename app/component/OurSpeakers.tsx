import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SpeakerOne from '@/public/SpeakerOne.jpeg';
import SpeakerTwo from '@/public/SpeakerTwo.jpeg';
import SpeakerThree from '@/public/SpeakerThree.jpeg';
import { Button } from '../_module/components/ui/button';
import { SpeakersList } from '../_module/data/speakers-list';
import { Fragment } from 'react';
import SpeakerCard from '../_module/components/cards/SpeakerCard';
import IconsArt from './IconsArt';

const OurSpeakers = () => {
  const Speakers = SpeakersList.slice(0, 3);
  return (
    <>
      <div className="bg-[#fcfcfc] w-full">
        <div className="w-full md:max-w-[1500px] mx-auto py-32 md:py-80">
          <div className="container flex flex-col gap-5 md:gap-52">
            <h1 className="text-2xl md:text-6xl font-bold">
              Meet our amazing speakers
            </h1>
            <div className="flex flex-row gap-2 md:gap-5">
              <Link href="/speakers">
                <Button className="text-sm md:text-xl rounded-[100px] hover:bg-core-blue px-20 md:px-52 py-4 md:py-10 flex items-center">
                  View All <ArrowUpRight />
                </Button>
              </Link>

              {/* <Link
                href="https://sessionize.com/devfest-ibadan-2024"
                target="_blank"
              >
                <Button className="bg-white text-black hover:border-core-blue hover:bg-core-blue  text-sm md:text-xl px-20 md:px-52 py-4 md:py-10 border-[1px] border-black rounded-[100px]">
                  Apply to Speak
                </Button>
              </Link> */}
            </div>
            {/* <section className="flex flex-col md:flex-row gap-24">
              {Speakers.map((data, idx) => (
                <Fragment key={idx}>
                  <SpeakerCard {...data} />
                </Fragment>
              ))}
            </section> */}

            <section className="flex gap-5 flex-col items-center py-24">
              <h1 className="text-5xl font-bold text-center">
                Speakers Coming Soon
              </h1>
              <p className="text-xl font-extralight text-[#4D4D4D] md:w-[820px] text-center">
                Our speaker lineup is almost here! Prepare to be inspired by
                industry leaders, tech innovators, and creative thinkers who
                will transform your DevFest experience.
              </p>
            </section>
          </div>
        </div>
        <IconsArt className="flex flex-col -mt-64 md:-mt-[150px]" />
      </div>
    </>
  );
};

export default OurSpeakers;
