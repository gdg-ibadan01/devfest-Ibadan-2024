import { FC, useEffect, useState, CSSProperties } from 'react';
import Styles from './styles.module.scss';

interface iPills {
  text: string;
  bgColor?: string;
  padding?: string;
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
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    const currentElement = document.getElementById(text);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [text]);

  return (
    <div
      id={text}
      className={`${Styles.container} ${isVisible ? Styles.fallIn : ''} mb-[2rem] md:mb-[0rem]`}
      style={
        {
          background: bgColor,
          padding: padding,
          '--rotate-angle': `${randomAngle}deg`,
        } as CSSProperties & Record<string, any>
      }
      onClick={handleRoute}
    >
      <p>{text || 'NFT ARTIST'}</p>
    </div>
  );
};

export default Pills;
