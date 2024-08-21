import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

export type TspeakerProps = {
  name: string;
  title: string;
  src: StaticImageData;
};

const SpeakerCard: FC<TspeakerProps> = (props) => {
  const { name, src, title } = props;
  return (
    <div className="flex flex-col overflow-hidden border-2 border-black rounded-2xl cursor-pointer">
      <section className="w-full h-[294px]">
        <Image
          alt={`${name}-${title}`}
          src={src}
          className="w-full h-full object-cover"
          width={100}
          height={100}
        />
      </section>
      <div className="flex flex-col gap-2 p-4 pb-7 bg-white">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-opacity-60 font-light">{title}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
