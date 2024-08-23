import { DevfestLogo } from '@/app/_module/components/icons';
import { Button } from '@/app/_module/components/ui/button';
import { caleit } from './_module/shared/font';
import DFIHeader from './_module/components/common/DFIheader';

export default function Home() {
  return (
    <>
      <main className="flex gap-5 flex-col items-center justify-between px-24 pt-124">
        <h1 className={`text-3xl ${caleit.className}`}>
          Devfest Ibadan &apos;24
        </h1>
        <DevfestLogo />
        <DevfestLogo />
        <DevfestLogo />
      </main>
    </>
  );
}
