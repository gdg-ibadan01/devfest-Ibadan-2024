import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import { speakersCardClass as Styles } from './speaker-card';

export type TspeakerProps = {
  name: string;
  title: string;
  src: StaticImageData|string;
  brief?: string;
  onClick?: () => void;
};

const SpeakerCard: FC<TspeakerProps> = (props) => {

  const { name, src, title, onClick } = props;

  return (
    <div className={Styles.wrapper} onClick={onClick}>
      <section className={Styles.section}>
        <Image
          alt={`${name}-${title}`}
          src={src}
          className={Styles.img}
          width={100}
          height={100}
        />
      </section>
      <div className={Styles.nameTitleWrapper}>
        <h1 className={Styles.name}>{name}</h1>
        <p className={Styles.title}>{title}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
