'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { footerClass as styles } from './DFIfooter.classes';
import {
  CurlyBraces,
  DevfestLogo,
  Instagram,
  Facebook,
  Linkedin,
  Colon,
  Groundnut,
  SemiColon,
  SplittedTag,
} from '../../icons';
import { footerItems } from '@/app/_module/config/constants/globals';
import MenuLink from '../../menulink';
import { Button } from '../../ui/button';
import { motion, useAnimation, useInView } from 'framer-motion';

const DFIFooter = (): ReactNode => {
  const { frameOne, frameTwo, frameThree } = footerItems;

  const controls = useAnimation();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const dropInVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <footer className={styles.footer} ref={footerRef}>
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <DevfestLogo fill="fill-black" stroke="stroke-black" />
        </div>
        <div className={styles.middle}>
          <p className={styles.location}>
            Devfest is taking place on December 3rd, 2024 from 9:00 AM to 5:00
            PM at Kakanfo Inn & Conference Center - Kakanfo Inn & Conference
            Center. Kakanfo Inn & Conference Center Conference Center.
          </p>
          <div className={styles.menuWrapper}>
            <ul className={styles.menu}>
              {frameOne.map(({ label, slur }) => (
                <MenuLink key={slur} label={label} slur={slur} />
              ))}
            </ul>
            <ul className={styles.menu}>
              {frameTwo.map(({ label, slur }) => (
                <MenuLink key={slur} label={label} slur={slur} />
              ))}
            </ul>
            <ul className={styles.menu}>
              {frameThree.map(({ label, slur }) => (
                <MenuLink key={slur} label={label} slur={slur} />
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.socialsCopyright}>
            <div className={styles.socialsWrapper}>
              <p className={styles.pSm}>Connect with us on our Social</p>
              <ul className={styles.socials}>
                <li>
                  <a href="" className={styles.socialLink}>
                    <Instagram color="fill-white" fill="fill-social-dark" />
                  </a>
                </li>
                <li>
                  <a href="" className={styles.socialLink}>
                    <Linkedin color="fill-white" fill="fill-social-dark" />
                  </a>
                </li>
                <li>
                  <a href="" className={styles.socialLink}>
                    <Facebook color="fill-white" fill="fill-social-dark" />
                  </a>
                </li>
              </ul>
            </div>
            <p className={styles.pSm}>@Devfest2024. All Right Reserved</p>
          </div>
          <Button className={styles.btn}>Play Puzzle Game</Button>
        </div>
      </div>
      <motion.div
        className="doodles flex justify-between items-end"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div
          className="doodleContainer w-full lg:w-[240px]"
          variants={dropInVariants}
        >
          <CurlyBraces fill="fill-pastel-green" stroke="stroke-black" />
        </motion.div>
        <motion.div
          className="doodleContainer w-full lg:w-[240px] "
          variants={dropInVariants}
        >
          <Colon fill="fill-core-blue" stroke="stroke-black" />
        </motion.div>
        <motion.div
          className="doodleContainer w-full lg:w-[525px]"
          variants={dropInVariants}
        >
          <Groundnut fill="fill-pastel-red" stroke="stroke-black" />
        </motion.div>
        <motion.div
          className="doodleContainer w-full lg:w-[245px]"
          variants={dropInVariants}
        >
          <SemiColon fill="fill-core-yellow" stroke="stroke-black" />
        </motion.div>
        <motion.div
          className="doodleContainer w-full lg:w-[344px]"
          variants={dropInVariants}
        >
          <SplittedTag fill="fill-halftone-red" stroke="stroke-black" />
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default DFIFooter;
