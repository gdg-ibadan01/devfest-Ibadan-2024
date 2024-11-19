'use client';

import { Fragment, useState } from 'react';
import SpeakerCard, {
  TspeakerProps,
} from '../_module/components/cards/SpeakerCard';
import { Button } from '../_module/components/ui/button';
import { SpeakersList } from '../_module/data/speakers-list';
import { speakersClass as Styles } from './speakers';
import ComingSoon from '../_module/components/common/ComingSoon';
import SpeakerModal from './components/speaker-modal';
import { StaticImageData } from 'next/image';

export default function Speakers() {
  const [modal, setModal] = useState(false);
  const [speakerData, setSpeakerData] = useState<TspeakerProps>({
    name: '',
    title: '',
    src: null as unknown as StaticImageData,
  });

  const handleClick = (data: TspeakerProps) => {
    setModal(true);
    setSpeakerData(data);
  };

  return (
    <div className={Styles.container}>
      <main className={Styles.main}>
        <header className={Styles.header}>
          <section className={Styles.headerSection}>
            <h1 className={Styles.headerSectionHeading}>
              Meet our amazing speakers
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
              <SpeakerCard handleClick={handleClick} {...data} />
            </Fragment>
          ))}
        </section>
      </main>
      {modal && <SpeakerModal setModal={setModal} speakerData={speakerData} />}
    </div>
  );
}
