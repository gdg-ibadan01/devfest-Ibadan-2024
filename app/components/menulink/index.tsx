import { FC } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

interface MenuLinkProps {
  label: string;
  slur: string;
}

const MenuLink: FC<MenuLinkProps> = ({ slur, label }) => (
  <li className={styles.list}>
    {slur === 'speakers' ? (
      <Link href={`/${slur}`} aria-label={label} className={styles.link}>
        {label}
      </Link>
    ) : (
      <Link href={`#${slur}`} aria-label={label} className={styles.link}>
        {label}
      </Link>
    )}
  </li>
);

export default MenuLink;
