import { Fragment } from 'react';
import SpeakerCard from '../_module/components/cards/SpeakerCard';
import DFIHeader from '../_module/components/common/DFIheader';
import { Button } from '../_module/components/ui/button';
import { SpeakersList } from '../_module/data/speakers-list';
import Styles from './speakers';

export default function Speakers() {
  return (
    <div className={Styles.container}>
      <DFIHeader />
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
              <SpeakerCard {...data} />
            </Fragment>
          ))}
        </section>
      </main>
    </div>
  );
}
