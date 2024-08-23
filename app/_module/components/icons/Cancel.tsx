import { FC } from 'react';

interface CancelProps {
  color: string;
}

const Cancel: FC<CancelProps> = ({ color }) => (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={color}
    />
  </svg>
);

export default Cancel;
