'use client';

import { ReactNode } from 'react';
import useMediaQueryWatcher from '@/app/_module/config/hooks/useMediaQueryWatcher';

import { footerClass as styles } from './DFIfooter.classes';
import { DevfestLogo } from '../../icons';
import { footerItems } from '@/app/_module/config/constants/globals';
import MenuLink from '../../menulink';
import { Button } from '../../ui/button';
import { Instagram } from '../../icons/Instagram';
import { Facebook } from '../../icons/Facebook';
import { Linkedin } from '../../icons/Linkedin';

const DFIFooter = (): ReactNode => {
  const { frameOne, frameTwo, frameThree } = footerItems;
  return (
    <footer className={styles.footer}>
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
              <p className={styles.pSm}>Conect with us on our Social</p>
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
    </footer>
  );
};

export default DFIFooter;
