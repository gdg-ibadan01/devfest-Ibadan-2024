'use client';
import { useState } from 'react';
import CheckOut from './components/CheckOut';
import Summary from './components/Summary';
import { AnimatePresence, motion } from 'framer-motion';
import TicketComp from './components/TicketComp';

export default function Ticket() {
  const [selectedPackage, setSelectedPackage] = useState({
    key: '',
    day: '',
    activityType: '',
    price: 0,
  });
  const [view, setView] = useState('checkout');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const renderFn = () => {
    switch (view) {
      case 'checkout':
        return (
          <CheckOut
            selectedPackage={selectedPackage}
            setSelectedPackage={setSelectedPackage}
            formData={formData}
            setFormData={setFormData}
            setView={setView}
          />
        );
      case 'summary':
        return <Summary setView={setView} selectedPackage={selectedPackage} />;
      case 'success':
        return <TicketComp selectedPackage={selectedPackage} />;
      default:
        return (
          <CheckOut
            selectedPackage={selectedPackage}
            setSelectedPackage={setSelectedPackage}
            formData={formData}
            setFormData={setFormData}
            setView={setView}
          />
        );
    }
  };

  return (
    <>
      <div
        className="h-screen w-full flex items-center justify-center px-5"
        style={{
          backgroundImage: "url('/ticket_bg.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            className="w-full md:w-[700px]"
            key={view}
            initial={{ x: '10%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-10%', opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {renderFn()}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
