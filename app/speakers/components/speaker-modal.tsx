import Image, { StaticImageData } from 'next/image';
import { SetStateAction, Dispatch } from 'react';
import Cancel from '../../_module/components/icons/Cancel.svg';
import Link from 'next/link';
import XIcon from '@/public/X_icon.svg';
import { Linkedin } from '../../_module/components/icons';

type SpeakerModalProps = {
  setModal: Dispatch<SetStateAction<boolean>>;
  speakerData: {
    [key: string]: any;
  };
};

const SpeakerModal: React.FC<SpeakerModalProps> = ({
  setModal,
  speakerData,
}) => {
  console.log('Modal', speakerData);
  const handleClose = (e: any) => {
    if (e.target.id === 'target') {
      setModal(false);
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xs flex justify-center items-center px-5 md:px-10 z-10 overflow-scroll"
        id="target"
        onClick={handleClose}
      >
        <div className="w-full max-w-[1200px] mx-auto bg-white rounded-xl p-5 md:p-10 ">
          <Image
            src={Cancel}
            alt="Cancel"
            className="ml-auto mb-3 cursor-pointer"
            onClick={() => setModal(false)}
          />
          <div className="w-full flex flex-col-reverse md:flex-row gap-5 md:gap-10">
            <div className="w-full md:w-2/5 flex flex-col gap-3">
              <Image
                className="w-full object-cover border-2 border-black rounded-2xl"
                src={speakerData.src}
                alt={`${speakerData.name}-${speakerData.title}`}
                width={100}
                height={100}
              />
              <Link
                href={'#'}
                className="w-full block text-center py-5 bg-black text-white text-xl rounded-[65px]"
              >
                Download Speaker Slide
              </Link>
              {/* <div className="flex gap-5">
                <Link href={'#'} className="p-2 bg-black rounded-full"></Link>
              </div> */}
              <ul className="flex gap-3">
                <li className="w-48 h-48 bg-black rounded-full p-2">
                  <a href="#" target="_blank">
                    <Linkedin color="fill-white" fill="fill-social-dark" />
                  </a>
                </li>

                <li className="w-48 h-48 bg-black rounded-full p-2">
                  <a href="#" target="_blank">
                    <Image src={XIcon} alt="XIcon" className="rounded-lg" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-3/5">
              <div className="flex flex-col md:gap-2">
                <h1 className="font-bold text-base md:text-4xl">
                  {speakerData.name}
                </h1>
                <p>{speakerData.title}</p>
              </div>
              <p className="text-sm md:text-lg font-light text-justify mt-5 text-[#1E1E1E] font-sans">
                {speakerData.brief}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakerModal;