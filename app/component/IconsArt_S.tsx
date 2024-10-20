import {
  BigPlus,
  Colon,
  CurlyBraces,
  Groundnut,
  Hashtag,
  SemiColon,
  SplittedTag,
} from '../_module/components/icons';

type IconArt = {
  className: string;
};

const IconsArt_S = ({ className }: IconArt) => {
  return (
    <>
      <div className={className}>
        <div className="flex justify-between items-end">
          <CurlyBraces fill="fill-pastel-green" stroke="stroke-black" />
          <Colon fill="fill-core-blue" stroke="stroke-black" />
          <Groundnut fill="fill-pastel-red" stroke="stroke-black" />
          <SemiColon fill="fill-core-yellow" stroke="stroke-black" />
          <SplittedTag fill="fill-halftone-red" stroke="stroke-black" />
        </div>
      </div>
    </>
  );
};

export default IconsArt_S;
