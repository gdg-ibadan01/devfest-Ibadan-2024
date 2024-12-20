'use client';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import IconsArt from './IconsArt';

import { useRef, useEffect } from 'react';

const DevfestHero = () => {
  const sectionRef = useRef(null);

  const wrapLetters = (text: string) =>
    text.split('').map((char, index) => (
      <span
        key={index}
        className="letter"
        style={{ animationDelay: `${0.05 * index}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);
  return (
    <>
      <main ref={sectionRef} className="pt-[150px] bg-pastel-yellow ">
        <div className="w-full md:max-w-[1500px] mx-auto relative z-10">
          <header className="container headers flex gap-4 md:gap-7 flex-col items-center justify-between">
            {/* <h1 className="font-bold text-4xl md:text-8xl">
              {wrapLetters("Devfest Ibadan '24")}
            </h1> */}
            <h1 className="font-bold text-[2rem] leading-[2.5rem] md:text-8xl">
              Devfest Ibadan &apos;24
            </h1>
            {/* <p className="text-[#4D4D4D] text-lg md:text-2xl text-center md:w-[1000px]">
              {wrapLetters(
                'Whatsup Ibadan!!!. Be a part of the largest tech event in Ibadan where tech enthusiasts come together to explore cutting-edge technology and shape the future'
              )}
            </p> */}
            <p className="text-[#4D4D4D] text-lg md:text-2xl text-center md:w-[1000px]">
              Whatsup Ibadan!!!. Be a part of the largest GDG event in Ibadan
              where tech enthusiasts come together to explore cutting-edge
              technology and shape the future
            </p>
            <p className="text-center font-bold">
              November 23rd 2024 at 8:00AM
            </p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-5 text-sm'">
              <Link
                href="https://gdg.community.dev/events/details/google-gdg-ibadan-presents-devfest-ibadan-2024/"
                target="_blank"
                className="bg-black py-4 px-52 text-white hover:bg-core-blue hover:text-white rounded-[100px] flex"
              >
                Get Ticket <ArrowUpRight />
              </Link>

              <Link
                href="/speakers"
                className="bg-white py-4 px-52 border-[1px] border-black hover:border-core-blue text-black hover:bg-core-blue hover:text-white rounded-[100px]"
              >
                View Speakers
              </Link>
            </div>
          </header>
        </div>
        <IconsArt className="flex flex-col -mt-64 md:-mt-[150px]" />
      </main>
    </>
  );
};

export default DevfestHero;
