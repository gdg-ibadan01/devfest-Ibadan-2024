import { formatAmount } from '@/utils/formatAmount';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const TicketPackages = [
  {
    key: 'dayOne',
    day: 'Friday',
    activityType: 'Workshop',
    price: 4_000,
  },
  {
    key: 'dayTwo',
    day: 'Saturday',
    activityType: 'Main event & Workshop',
    price: 4_000,
  },
  {
    key: 'bothDays',
    day: 'Friday & Saturday',
    activityType: 'Main event & Workshop',
    price: 8_000,
  },
];

interface CheckOutProps {
  selectedPackage: {
    key: string;
    day: string;
    activityType: string;
    price: number;
  };
  setSelectedPackage: React.Dispatch<
    React.SetStateAction<{
      key: string;
      day: string;
      activityType: string;
      price: number;
    }>
  >;
  formData: {
    fullName: string;
    email: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      fullName: string;
      email: string;
    }>
  >;
  setView: React.Dispatch<React.SetStateAction<string>>;
}

const CheckOut: React.FC<CheckOutProps> = ({
  selectedPackage,
  setSelectedPackage,
  formData,
  setFormData,
  setView,
}) => {
  const router = useRouter();
  return (
    <form
      className="bg-white px-4 md:px-28 py-28 rounded-2xl flex flex-col gap-5 border md:border-none"
      onSubmit={(e) => {
        e.preventDefault();
        setView('summary');
      }}
    >
      <button
        className="w-fit flex flex-col md:flex-row justify-center items-start mdl:items-center gap-3 text-gray-400"
        onClick={() => router.back()}
      >
        <ArrowLeft />
        <p className="font-bold text-xl md:text-2xl">Check Out</p>
      </button>

      <div className="flex flex-col md:flex-row justify-center gap-3">
        <div className="w-full md:w-1/2 flex flex-col gap-1">
          <label
            htmlFor="fullName"
            className="text-gray-600 text-sm md:text-base"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter Full Name"
            required
            value={formData.fullName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, fullName: e.target.value }))
            }
            className="border border-gray-200 px-4 py-2 rounded-md outline-none text-gray-400 text-sm md:text-base"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-1">
          <label htmlFor="email" className="text-gray-600 text-sm md:text-base">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="Enter email address"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            className="border border-gray-200 px-4 py-2 rounded-md outline-none text-gray-400 text-sm md:text-base"
          />
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-400 mb-4">
          Kindly Select your Ticket Package
        </p>
        <div className="flex flex-col gap-4">
          {TicketPackages.map((option) => {
            const isActive = option.key === selectedPackage.key;
            return (
              <label
                key={option.key}
                htmlFor={option.key}
                className={`border border-gray-200 p-3 rounded-md flex items-center gap-5 cursor-pointer ${isActive ? 'text-core-blue bg-pastel-blue border-[#9AE0F1]' : 'text-gray-500'}`}
              >
                <input
                  type="radio"
                  className="accent-core-blue bg-pastel-blue h-6 w-6"
                  id={option.key}
                  checked={isActive}
                  name="ticketPackages"
                  required
                  onChange={(e) => setSelectedPackage(option)}
                />
                <div>
                  <p>
                    {option.day}{' '}
                    <span className="text-[14px]">({option.activityType})</span>
                  </p>
                  <p>{formatAmount(option.price)}</p>
                </div>
              </label>
            );
          })}
        </div>
      </div>
      <button className="bg-[#1E1E1E] py-5 md:py-7 text-white hover:bg-core-blue rounded-[100px] flex gap-2 justify-center transition-colors duration-500">
        Get Ticket <ArrowUpRight />
      </button>
    </form>
  );
};

export default CheckOut;
