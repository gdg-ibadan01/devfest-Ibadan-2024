import { DevfestLogo } from '@/components/icons';
import { caleit } from './layout';

export default function Home() {
  return (
    <main className="flex gap-5 flex-col items-center justify-between p-24">
      <h1 className={`text-3xl text-white ${caleit.className}`} >Devfest Ibadan '24</h1>
      <DevfestLogo />
    </main>
  );
}
