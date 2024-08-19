import { FC } from 'react';
import styles from './styles.module.scss';
import { DevfestLogo } from '../icons';
import Link from 'next/link';
import { menuItems } from '@/app/config/constants/globals';
import MenuLink from '../menulink';
import useMediaQueryWatcher from '@/app/config/hooks/useMediaQueryWatcher';

const DFHeader: FC = () => {
  const isTablet = useMediaQueryWatcher('(min-width: 1024px)');
  return (
    <header>
      <Link href="/" className={styles.logoContainer}>
        <DevfestLogo />
      </Link>
      {isTablet && (
        <>
          <nav>
            <ul>
              {menuItems.map(({ label, slur }) => (
                <MenuLink key={slur} label={label} slur={slur} />
              ))}
            </ul>
          </nav>
          <nav>
            <ul>
              <MenuLink label="Get Ticket" slur="tickets" />
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

export default DFHeader;
