import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import menulinkClasses from './menulink.classes';

interface MenuLinkProps {
  label: string;
  slur: string;
}

const MenuLink: FC<MenuLinkProps> = ({ slur, label }) => {
  const pathname = usePathname();
  const splittedPathname = pathname.split('/');
  const currentPath = splittedPathname[splittedPathname.length - 1];

  return (
    <li className={menulinkClasses.list}>
      {slur === 'speakers' ? (
        <Link
          href={`/${slur}`}
          aria-label={label}
          className={`${(menulinkClasses.link, currentPath === slur ? 'font-semibold' : '')}`}
        >
          {label}
        </Link>
      ) : (
        <Link
          href={`#${slur}`}
          aria-label={label}
          className={menulinkClasses.link}
        >
          {label}
        </Link>
      )}
    </li>
  );
};

export default MenuLink;
