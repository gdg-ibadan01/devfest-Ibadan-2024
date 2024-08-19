import { FC } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import { usePathname } from 'next/navigation';

interface MenuLinkProps {
  label: string;
  slur: string;
}

const MenuLink: FC<MenuLinkProps> = ({ slur, label }) => {
  const pathname = usePathname();
  const splittedPathname = pathname.split('/');
  const currentPath = splittedPathname[splittedPathname.length - 1];

  return (
    <li className={styles.list}>
      {slur === 'speakers' ? (
        <Link
          href={`/${slur}`}
          aria-label={label}
          className={`${(styles.link, currentPath === slur ? 'font-semibold' : '')}`}
        >
          {label}
        </Link>
      ) : (
        <Link href={`#${slur}`} aria-label={label} className={styles.link}>
          {label}
        </Link>
      )}
    </li>
  );
};

export default MenuLink;
