import { FC } from 'react';
import Styles from './styles.module.scss';

interface iPills {
  text: string;
  bgColor?: string;
  padding?: string;
  url?: string;
  randomAngle: number;
  handleRoute?: () => void;
}

const Pills: FC<iPills> = ({
  text,
  bgColor,
  padding,
  handleRoute,
  randomAngle,
}) => {
  return (
    <div
      className={Styles.container}
      style={{
        background: bgColor,
        padding: padding,
        transform: `rotate(${randomAngle}deg)`,
      }}
      onClick={handleRoute}
    >
      <p>{text || 'NFT ARTIST'}</p>
    </div>
  );
};

export default Pills;
