'use client';

import { ReactNode, useState } from 'react';
import styles from './styles.module.scss';
import { DevfestLogo } from '../../icons';
import Link from 'next/link';
import { menuItems } from '@/app/_module/config/constants/globals';
import MenuLink from '../../menulink';
import useMediaQueryWatcher from '@/app/_module/config/hooks/useMediaQueryWatcher';
import Hamburger from '../../icons/Hamburger';
import Cancel from '../../icons/Cancel';

const DFIHeader = (): ReactNode => {
  const [showMenu, setShowMenu] = useState(false);
  const isTablet = useMediaQueryWatcher('(min-width: 1024px)');

  const showMenuFunc = (): void => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.logoContainer}>
          <DevfestLogo fill="fill-black" stroke="stroke-black" />
        </Link>
        {isTablet && (
          <>
            <nav className="lg:block">
              <ul className={styles.headerMenu}>
                {menuItems.map(({ label, slur }) => (
                  <MenuLink key={slur} label={label} slur={slur} />
                ))}
                <MenuLink label="Play Puzzle Game" slur="game" />
              </ul>
            </nav>
          </>
        )}
        {showMenu && (
          <nav className={styles['showMenu']}>
            <ul className={styles.headerMenu}>
              {menuItems.map(({ label, slur }) => (
                <MenuLink key={slur} label={label} slur={slur} />
              ))}
              <MenuLink label="Play Puzzle Game" slur="game" />
            </ul>
          </nav>
        )}
        <button
          aria-label={!showMenu ? 'menu' : 'close'}
          className={styles['toggleMenuBtn']}
          onClick={showMenuFunc}
        >
          {!showMenu ? (
            <Hamburger color="fill-black" />
          ) : (
            <Cancel color="stroke-black" />
          )}
        </button>
      </div>
    </header>
  );
};

export default DFIHeader;
