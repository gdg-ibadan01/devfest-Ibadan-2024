import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateRandomColors = ({
  accordionButtonColors,
  accordionContentColors,
  accordionItems,
  setButtonColors,
}: {
  accordionItems: number[];
  accordionContentColors: string[];
  accordionButtonColors: string[];
  setButtonColors: (colors: any) => void;
}) => {
  return accordionItems.map(() => {
    const randomIndex = Math.floor(
      Math.random() * accordionContentColors.length
    );
    const randomButtonIndex = Math.floor(
      Math.random() * accordionButtonColors.length
    );
    setButtonColors((prev: any) => [
      ...prev,
      accordionButtonColors[randomButtonIndex],
    ]);
    return accordionContentColors[randomIndex];
  });
};
