import { formatAmount } from '@/utils/formatAmount';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import React from 'react';

interface SummaryProps {
  setView: React.Dispatch<React.SetStateAction<string>>;
  selectedPackage: {
    key: string;
    day: string;
    activityType: string;
    price: number;
  };
}

const Summary: React.FC<SummaryProps> = ({ setView, selectedPackage }) => {
  return (
    <div className="bg-white px-4 md:px-28 py-48 rounded-2xl flex flex-col gap-10 border md:border-none">
      <button
        className="w-fit flex flex-col md:flex-row justify-center items-start mdl:items-center gap-3 text-gray-400"
        onClick={() => setView('checkout')}
      >
        <ArrowLeft />
        <p className="font-bold text-xl md:text-2xl">Summary</p>
      </button>
      <div className="flex flex-col gap-6">
        <div className="bg-gray-100 border border-gray-200 rounded-md p-5 flex flex-col gap-3">
          <p className="flex justify-between items-center gap-5 md:gap-0">
            <span className="text-gray-400 font-thin text-sm md:text-base">
              Selected Package Price
            </span>
            <span className="text-gray-500 font-bold">
              {formatAmount(selectedPackage.price)}
            </span>
          </p>
          <p className="flex justify-between items-center gap-5 md:gap-0">
            <span className="text-gray-400 font-thin text-sm md:text-base">
              Date paid for
            </span>
            <span className="text-gray-500 font-bold">
              {selectedPackage.day}
            </span>
          </p>
          <p className="flex justify-between items-center gap-5 md:gap-0">
            <span className="text-gray-400 font-thin text-sm md:text-base">
              VAT
            </span>
            <span className="text-gray-500 font-bold">{formatAmount(270)}</span>
          </p>
        </div>
        <p className="flex justify-between items-center bg-pastel-blue rounded-md p-5 ">
          <span className="text-[#2D879D] font-thin">Total Amount</span>
          <span className="text-[#0B5A6E] font-bold text-xl">
            {formatAmount(selectedPackage.price + 270)}
          </span>
        </p>
        <button
          className="bg-[#1E1E1E] py-7 text-white hover:bg-core-blue rounded-[100px] flex gap-2 justify-center transition-colors duration-500"
          onClick={() => setView('success')}
        >
          Pay Now <ArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default Summary;
