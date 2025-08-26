'use client'

import useMediaQueryWatcher from '@/app/_module/config/hooks/useMediaQueryWatcher';
import { formatAmount } from '@/utils/formatAmount';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface TicketCompProps { }

const TicketComponent: React.FC<TicketCompProps> = ({ }) => {
  const router = useRouter();
  const isTablet = useMediaQueryWatcher('(min-width: 1024px)')

  return (
    <div
      className="pb-6 pt-96 w-full flex items-center justify-center px-5 bg-gradient-to-b from-gray-900 to-gray-800"
      style={{
        backgroundImage: isTablet
          ? "url('/ticket_bg.png')"
          : "url('/ticket_mobile_bg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >

      <AnimatePresence mode="wait">
        <motion.div
          className="w-full md:w-[700px]"
          initial={{ x: '10%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-10%', opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className='mb-4'>
            <h1 className='text-xl md:text-3xl text-gray-600 text-center font-extrabold w-full md:w-[700px]'>
              Your Payment was successful, see you at Devfest Ibadan 2025!
            </h1>
          </div>
          <button
            className=" w-fit flex items-center gap-3 text-gray-600 mb-5"
            onClick={() => router.push('/')}
          >
            <ArrowLeft />
            <p className=" text-xs md:text-2xl hidden md:inline-block">
              Back Home
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
                  <p className="text-gray-400 text-xs md:text-base">Event Day</p>
                  <p className="font-bold text-gray-500 md:text-xl">
                    {new Date('2025-11-29').toDateString()}
                  </p>
                </div>
              </div>
              <div className="w-fit text-right">
                <p className="text-gray-400 text-xs md:text-base">Amount</p>
                <p className="font-bold text-gray-500 md:text-xl">
                  {formatAmount(4000)}
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
          <button className="w-full bg-[#1E1E1E] py-4 text-white hover:bg-core-blue rounded-[100px] flex gap-2 justify-center transition-colors duration-500 mt-7">
            Download Ticket <ArrowUpRight />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TicketComponent;
