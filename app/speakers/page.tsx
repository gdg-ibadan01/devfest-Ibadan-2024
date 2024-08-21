import { Fragment } from 'react';
import SpeakerCard, { TspeakerProps } from '../components/cards/SpeakerCard';
import DFIHeader from '../components/common/DFIheader';
import { Button } from '../components/ui/button';
import SpeakerImg from '@/public/speakerimg.png';

const SpeakersList: TspeakerProps[] = [
  {
    name: 'Ayoola Theophilus',
    title: 'Co-Founder R17',
    src: SpeakerImg,
  },
  {
    name: 'Ayoola Theophilus',
    title: 'Co-Founder R17',
    src: SpeakerImg,
  },
  {
    name: 'Ayoola Theophilus',
    title: 'Co-Founder R17',
    src: SpeakerImg,
  },

  {
    name: 'Ayoola Theophilus',
    title: 'Co-Founder R17',
    src: SpeakerImg,
  },
  {
    name: 'Ayoola Theophilus',
    title: 'Co-Founder R17',
    src: SpeakerImg,
  },
  {
    name: 'Ayoola Theophilus',
    title: 'Co-Founder R17',
    src: SpeakerImg,
  },
];

export default function Speakers() {
  return (
    <div className="bg-pastel-red min-h-[100vh] pb-[100px]">
      <DFIHeader />
      <main className="pt-[100px] md:pt-[200px] px-7 md:px-[70px] lg:px-[100px] flex flex-col gap-10">
        <header className="flex items-start justify-between gap-6 md:gap-10 flex-wrap">
          <section className="w-full lg:w-[60%]">
            <h1 className="font-bold text-[32px] md:text-[52px] leading-[1.5]">
              Meet Our amazing Speakers
            </h1>
            <p className="text-md md:text-2xl text-opacity-70 font-thin">
              Our speakers are industry leaders, innovative thinkers, and
              passionate tech enthusiasts who are eager to share their knowledge
              and experiences with you.{' '}
            </p>
          </section>
          <Button className="bg-white border border-black text-black rounded-[100px] px-[70px] py-[35px] hover:text-white">
            {' '}
            Apply to Speak{' '}
          </Button>
        </header>

        <section className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {SpeakersList.map((data, idx) => (
            <Fragment key={idx}>
              <SpeakerCard {...data} />
            </Fragment>
          ))}
        </section>
      </main>
    </div>
  );
}
