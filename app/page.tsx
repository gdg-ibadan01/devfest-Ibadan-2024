import { DevfestLogo } from '@/app/_module/components/icons';
import { Button } from '@/app/_module/components/ui/button';

export default function Home() {
  return (
    <main className="flex gap-5 flex-col items-center justify-between px-24 pt-124">
      <h1 className={`text-3xl`}>Devfest Ibadan &apos;24</h1>
      <DevfestLogo />
      <Button size={'lg'}>Proceed</Button>
    </main>
  );
}
