import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import { speakersCardClass as Styles } from './speaker-card';
import clsx from 'clsx';

export type TspeakerProps = {
  name: string;
  title: string;
  src: StaticImageData | string;
  brief?: string;
  linkedin?: string;
  x?: string;
  mediaLink?: string;
  handleClick?: (data: TspeakerProps) => void;
};

const SpeakerCard: FC<TspeakerProps> = (props) => {
  const { name, src, title, brief, handleClick } = props;

  return (
    <div
      className={Styles.wrapper}
      onClick={() => {
        handleClick && handleClick(props);
      }}
    >
      <section className={Styles.section}>
        <Image
          alt={`${name}-${title}`}
          src={src}
          className={Styles.img}
          width={500}
          height={500}
        />
      </section>
      <div className={clsx(Styles.nameTitleWrapper, 'h-full')}>
        <h1 className={Styles.name}>{name}</h1>
        <p className={Styles.title}>{title}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
