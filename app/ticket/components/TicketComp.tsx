import { formatAmount } from '@/utils/formatAmount';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface TicketCompProps {
  // setView: React.Dispatch<React.SetStateAction<string>>;
  selectedPackage: {
    key: string;
    day: string;
    activityType: string;
    price: number;
  };
}

const TicketComp: React.FC<TicketCompProps> = ({ selectedPackage }) => {
  const router = useRouter();
  return (
    <div className="relative">
      <button
        className="md:absolute top-0 -left-1/3 w-fit flex items-center gap-3 text-gray-600 mb-5 md:mb-0"
        onClick={() => router.push('/')}
      >
        <ArrowLeft />
        <p className="font-bold text-xl md:text-2xl hidden md:inline-block">
          Back to Home
        </p>
      </button>
      <div className="bg-core-blue p-4 md:p-28 flex flex-col gap-7">
        <p className="font-bold text-xl md:text-2xl text-white">Ticket</p>
        <div
          style={{
            width: '100%',
            height: '80px',
            backgroundImage: "url('/ticket_decorator.svg')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            borderRadius: '4px',
          }}
        />
        <div className="text-white flex justify-between border-b md:pb-2">
          <p>
            <span className="font-bold md:text-4xl">DEVFEST</span>{' '}
            <span className="text-xs md:text-base">Ibadan</span>
          </p>
          <p className="font-bold md:text-4xl">2025</p>
        </div>
        <div className="w-full bg-white px-3 py-5 rounded-md flex justify-between">
          <div className="w-3/5 flex flex-col md:flex-row justify-between gap-y-4">
            <div className="w-fit">
              <p className="text-gray-400 text-xs md:text-base">Ticket ID</p>
              <p className="font-bold text-gray-500 md:text-xl">25A346B</p>
            </div>
            <div className="w-fit">
              <p className="text-gray-400 text-xs md:text-base">Payment Day</p>
              <p className="font-bold text-gray-500 md:text-xl">
                {selectedPackage.day}
              </p>
            </div>
          </div>
          <div className="w-fit text-right">
            <p className="text-gray-400 text-xs md:text-base">Amount</p>
            <p className="font-bold text-gray-500 md:text-xl">
              {formatAmount(selectedPackage.price)}
            </p>
          </div>
        </div>
        <hr className="border-t-1 border-dashed " />
        <Image
          src={'/barcode.svg'}
          alt="barcode"
          width={500}
          height={300}
          className="w-full rounded-md"
        />
      </div>
      <button className="w-full bg-[#1E1E1E] py-7 text-white hover:bg-core-blue rounded-[100px] flex gap-2 justify-center transition-colors duration-500 mt-7">
        Download Ticket <ArrowUpRight />
      </button>
    </div>
  );
};

export default TicketComp;
