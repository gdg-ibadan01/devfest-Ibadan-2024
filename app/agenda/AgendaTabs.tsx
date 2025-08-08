'use client';
import React from 'react';

type Props = {
  activeDay: string;
  setActiveDay: (day: string) => void;
};

export default function AgendaTabs({ activeDay, setActiveDay }: Props) {
  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={() => setActiveDay('day1')}
        className={`px-3 py-2 rounded-[8px] font-medium md:font-normal text-[15px] md:text-2xl ${
          activeDay === 'day1'
            ? 'bg-[#F8D8D8] text-[#583C3C]'
            : 'bg-[#FFFFFF] text-[#B7B7B7] border border-[#D7D7D7]'
        }`}
      >
        Friday, 3rd Dec 2024
      </button>
      <button
        onClick={() => setActiveDay('day2')}
        className={`px-3 py-2 rounded-[8px] font-medium md:font-normal text-[15px] md:text-2xl ${
          activeDay === 'day2'
            ? 'bg-[#F8D8D8] text-[#583C3C]'
            : 'bg-[#FFFFFF] text-[#B7B7B7] border border-[#D7D7D7]'
        }`}
      >
        Saturday, 4th Dec 2024
      </button>
    </div>
  );
}
