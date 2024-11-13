'use client';
import { Fragment, useState } from 'react';
import SpeakerCard from '../_module/components/cards/SpeakerCard';
import { Button } from '../_module/components/ui/button';
import { SpeakersList } from '../_module/data/speakers-list';
import { speakersClass as Styles } from './speakers';
import SpeakerModal from './components/speaker-modal';
import { StaticImageData } from 'next/image';

export default function Speakers() {
  const [modal, setModal] = useState(false);
  const [speakerData, setSpeakerData] = useState<{}>({});
  const handleClick = (data: {
    name: string;
    title: string;
    brief?: string;
    src: StaticImageData;
  }) => {
    setModal(true);
    setSpeakerData(data);
  };
  return (
    <div className={Styles.container}>
      <main className={Styles.main}>
        <header className={Styles.header}>
          <section className={Styles.headerSection}>
            <h1 className={Styles.headerSectionHeading}>
              Meet Our amazing Speakers
            </h1>
            <p className={Styles.headerSectionParagraph}>
              Our speakers are industry leaders, innovative thinkers, and
              passionate tech enthusiasts who are eager to share their knowledge
              and experiences with you.{' '}
            </p>
          </section>
          <Button className={Styles.headerButton}> Apply to Speak </Button>
        </header>

        <section className={Styles.speakersListWrapper}>
          {SpeakersList.map((data, idx) => (
            <Fragment key={idx}>
              <SpeakerCard {...data} onClick={() => handleClick(data)} />
            </Fragment>
          ))}
        </section>
      </main>
      {modal && <SpeakerModal setModal={setModal} speakerData={speakerData} />}
    </div>
  );
}
