import CountDown from './component/CountDown';
import DevfestHero from './component/DevfestHero';
import Inclusivity from './component/Inclusivity';
import Recap from './component/Recap';
import OurSpeakers from './component/OurSpeakers';
import Venue from './component/Venue';
import OurSponsors from './component/OurSponsors';
import OurMerch from './component/OurMerch';

export default function Home() {
  return (
    <>
      {/* <main className="flex gap-5 flex-col items-center justify-between px-24 pt-124">
        <h1 className={`text-3xl`}>Devfest Ibadan &apos;24</h1>
        <DevfestLogo />
        <Button size={'lg'}>Proceed</Button>
      </main> */}
      <DevfestHero />
      <Inclusivity />
      <Recap />
      <CountDown />
      <Venue />
      <OurSpeakers />
      <OurSponsors />
      <OurMerch />
    </>
  );
}
