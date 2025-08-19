import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Copy, Check, Building2 } from 'lucide-react';
import React, { useState } from 'react';

interface Step {
  step: 'inputDetails' | 'sendPaymentLink' | 'showSuccessMessage';
  setStep: React.Dispatch<
    React.SetStateAction<
      'inputDetails' | 'sendPaymentLink' | 'showSuccessMessage'
    >
  >;
}

interface AttendeeData {
  fullName: string;
  email: string;
  selectedPackage: 'friday' | 'saturday' | 'both';
}

interface AddAttendeesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SuccessModal: React.FC<
  Step & { attendeeData: AttendeeData; setStep: any }
> = ({ step, setStep, attendeeData }) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-6 text-center">
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
        <Check className="w-8 h-8 text-white" />
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Successful</h2>

      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Payment link sent!
      </h3>

      <p className="text-gray-600 mb-8 max-w-sm">
        The payment link has been sent to {attendeeData.email}. Please inform
        the attendee to check their inbox (or spam folder) and complete the
        payment to secure their spot.
      </p>

      <Button
        className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg"
        onClick={() => setStep('inputDetails')}
      >
        Go to Dashboard
      </Button>
    </div>
  );
};

const SendPaymentLink: React.FC<
  Step & { attendeeData: AttendeeData; setStep: any }
> = ({ step, setStep, attendeeData }) => {
  const [copied, setCopied] = useState(false);

  const paymentLink = 'https://pay.rywo.co/evt-12345';

  const handleCopy = () => {
    navigator.clipboard.writeText(paymentLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getAmount = () => {
    switch (attendeeData.selectedPackage) {
      case 'friday':
        return '₦4,000';
      case 'saturday':
        return '₦4,000';
      case 'both':
        return '₦8,000';
      default:
        return '₦5,000';
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <button
          onClick={() => setStep('inputDetails')}
          className="mr-4 p-1 hover:bg-gray-100 rounded"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-semibold text-gray-900">Payment Link</h2>
      </div>

      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
          <Building2 className="w-8 h-8 text-gray-600" />
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Payment Link
        </h3>

        <p className="text-gray-600 text-sm mb-6 max-w-sm">
          You are about to send a payment link to the attendee email. Please
          confirm that the email address is correct before proceeding.
        </p>

        <div className="w-full bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-between">
          <span className="text-sm font-mono text-gray-700">{paymentLink}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="ml-2"
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
          <span className="text-gray-600 font-medium">Email</span>
          <span className="font-semibold text-gray-900">
            {attendeeData.email}
          </span>
        </div>

        <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
          <span className="text-gray-600 font-medium">Amount</span>
          <span className="font-semibold text-gray-900">{getAmount()}</span>
        </div>

        <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
          <span className="text-gray-600 font-medium">Description</span>
          <span className="font-semibold text-gray-900">
            DevFest_Ibadan_2025_Ticket
          </span>
        </div>
      </div>

      <Button
        className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg"
        onClick={() => setStep('showSuccessMessage')}
      >
        Send payment link
      </Button>
    </div>
  );
};

const AddAttendeeDetails: React.FC<
  Step & { attendeeData: AttendeeData; setAttendeeData: any; setStep: any }
> = ({ step, setStep, attendeeData, setAttendeeData }) => {
  const handleInputChange = (field: keyof AttendeeData, value: string) => {
    setAttendeeData((prev: AttendeeData) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePackageSelect = (packageType: 'friday' | 'saturday' | 'both') => {
    setAttendeeData((prev: AttendeeData) => ({
      ...prev,
      selectedPackage: packageType,
    }));
  };

  const isFormValid =
    attendeeData.fullName.trim() !== '' &&
    attendeeData.email.trim() !== '' &&
    attendeeData.email.includes('@');

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <button className="mr-4 p-1 hover:bg-gray-100 rounded">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-semibold text-gray-900">
          <span className="underline">Add an Attendee</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <Label
            htmlFor="fullName"
            className="text-gray-700 font-medium mb-2 block"
          >
            Full Name
          </Label>
          <Input
            id="fullName"
            placeholder="Enter Full Name"
            value={attendeeData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className="w-full"
          />
        </div>

        <div>
          <Label
            htmlFor="email"
            className="text-gray-700 font-medium mb-2 block"
          >
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter email address"
            value={attendeeData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      <div className="mb-8">
        <Label className="text-gray-700 font-medium mb-4 block">
          Kindly Select your Ticket Package
        </Label>

        <div className="space-y-3">
          <div
            className={`border rounded-lg p-4 cursor-pointer transition-colors ${
              attendeeData.selectedPackage === 'friday'
                ? 'bg-blue-50 border-blue-200'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handlePackageSelect('friday')}
          >
            <div className="flex items-center">
              <div
                className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                  attendeeData.selectedPackage === 'friday'
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-300'
                }`}
              >
                {attendeeData.selectedPackage === 'friday' && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
              <div>
                <div className="font-medium text-blue-600">
                  Friday <span className="text-gray-500">(Workshop)</span>
                </div>
                <div className="text-xl font-semibold text-blue-600">
                  ₦ 4,000.00
                </div>
              </div>
            </div>
          </div>

          <div
            className={`border rounded-lg p-4 cursor-pointer transition-colors ${
              attendeeData.selectedPackage === 'saturday'
                ? 'bg-gray-50 border-gray-300'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handlePackageSelect('saturday')}
          >
            <div className="flex items-center">
              <div
                className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                  attendeeData.selectedPackage === 'saturday'
                    ? 'border-gray-500 bg-gray-500'
                    : 'border-gray-300'
                }`}
              >
                {attendeeData.selectedPackage === 'saturday' && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
              <div>
                <div className="font-medium text-gray-700">
                  Saturday{' '}
                  <span className="text-gray-500">(Main event & Workshop)</span>
                </div>
                <div className="text-xl font-semibold text-gray-700">
                  ₦ 4,000.00
                </div>
              </div>
            </div>
          </div>

          <div
            className={`border rounded-lg p-4 cursor-pointer transition-colors ${
              attendeeData.selectedPackage === 'both'
                ? 'bg-gray-50 border-gray-300'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handlePackageSelect('both')}
          >
            <div className="flex items-center">
              <div
                className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                  attendeeData.selectedPackage === 'both'
                    ? 'border-gray-500 bg-gray-500'
                    : 'border-gray-300'
                }`}
              >
                {attendeeData.selectedPackage === 'both' && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
              <div>
                <div className="font-medium text-gray-700">
                  Friday & Saturday{' '}
                  <span className="text-gray-500">(Main event & Workshop)</span>
                </div>
                <div className="text-xl font-semibold text-gray-700">
                  ₦ 8,000.00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button
        className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => setStep('sendPaymentLink')}
        disabled={!isFormValid}
      >
        Check out
      </Button>
    </div>
  );
};

const AddAttendeesModal: React.FC<AddAttendeesModalProps> = ({
  open,
  onOpenChange,
}) => {
  const [step, setStep] = useState<
    'inputDetails' | 'sendPaymentLink' | 'showSuccessMessage'
  >('inputDetails');
  const [attendeeData, setAttendeeData] = useState<AttendeeData>({
    fullName: '',
    email: '',
    selectedPackage: 'friday',
  });

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setStep('inputDetails');
      setAttendeeData({
        fullName: '',
        email: '',
        selectedPackage: 'friday',
      });
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[550px] p-0">
        {step === 'inputDetails' && (
          <AddAttendeeDetails
            step={step}
            setStep={setStep}
            attendeeData={attendeeData}
            setAttendeeData={setAttendeeData}
          />
        )}
        {step === 'sendPaymentLink' && (
          <SendPaymentLink
            step={step}
            setStep={setStep}
            attendeeData={attendeeData}
          />
        )}
        {step === 'showSuccessMessage' && (
          <SuccessModal
            step={step}
            setStep={setStep}
            attendeeData={attendeeData}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AddAttendeesModal;
