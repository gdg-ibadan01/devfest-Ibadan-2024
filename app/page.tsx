import { DevfestLogo } from '@/app/components/icons';
import { Button } from '@/app/components/ui/button';
import { caleit } from './layout';

export default function Home() {
  return (
    <main className="flex gap-5 flex-col items-center justify-between p-24">
      <h1 className={`text-3xl ${caleit.className}`}>
        Devfest Ibadan &apos;24
      </h1>
      <DevfestLogo />
      <Button size={'lg'}>Proceed</Button>
    </main>
  );
}
