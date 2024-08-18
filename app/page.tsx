import { DevfestLogo } from '@/app/components/icons';
import { Button } from '@/app/components/ui/button';
import { caleit, google_sans } from './shared/font';

export default function Home() {
  return (
    <main className="flex gap-5 flex-col items-center justify-between p-24">
      <h1 className={`text-3xl`}>Devfest Ibadan &apos;24</h1>
      <DevfestLogo />
      <Button size={'lg'}>Proceed</Button>
    </main>
  );
}
