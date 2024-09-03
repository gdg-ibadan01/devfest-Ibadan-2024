'use client';

import { Fragment, useState, useEffect } from 'react';
import { speakersClass as Styles } from './agenda';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';

const Agenda = () => {
  const accordionItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const accordionContentColors = ['#CCF6C5', '#FFE7A5', '#F8D8D8', '#C3ECF6'];
  const accordionButtonColors = ['#FF7DAF', '#4285F4', '#FFD427', '#5CDB6D'];
  const [backgroundColors, setBackgroundColors] = useState<string[]>([]);
  const [buttonColors, setButtonColors] = useState<string[]>([]);

  const accordionContent = [
    {
      title: 'Open source: SDK, a way to get started - Talabi Opemipo',
      location: 'Hall 1',
    },
    {
      title:
        'From code to market: how to build something people want - Arinze Onye',
      location: 'Hall 2',
    },
    {
      title:
        'The future of work: how to build a remote team - Chukwudi Nwachukwu',
      location: 'Hall 3',
    },
  ];

  useEffect(() => {
    const generateRandomColors = () => {
      return accordionItems.map(() => {
        const randomIndex = Math.floor(
          Math.random() * accordionContentColors.length
        );
        const randomButtonIndex = Math.floor(
          Math.random() * accordionButtonColors.length
        );
        setButtonColors((prev) => [
          ...prev,
          accordionButtonColors[randomButtonIndex],
        ]);
        return accordionContentColors[randomIndex];
      });
    };

    setBackgroundColors(generateRandomColors());
  }, []);

  return (
    <div className={Styles.container}>
      <main className={Styles.main}>
        <header className={Styles.header}>
          <h2 className={Styles.headerHeading}>The Promised Agenda</h2>
          <section className={Styles.dateContainer}>
            <Image src="/calendar-icon.png" alt="calendar icon" />
            <p className={Styles.date}>
              December 3rd, 2024, and join us from 9:00 AM to 5:00 PM
            </p>
          </section>
          <p className={Styles.headerText}>
            Mark your calendar for for a day filled with{' '}
            <span className={Styles.inspirationText}>inspiration,</span>{' '}
            <span className={Styles.innovationText}>innovation,</span>{' '}
            <span className={Styles.connectionText}>and connection.</span>
          </p>
        </header>
        <section>
          <Accordion type="single" collapsible className="w-full">
            {accordionItems.map((item, index: number) => {
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={Styles.accordionItem}
                  style={{ backgroundColor: backgroundColors[index] }}
                >
                  <AccordionTrigger className={Styles.accordionTrigger}>
                    9:00 am - 9:30 am: Arrival of Guests
                  </AccordionTrigger>
                  <AccordionContent
                    className={Styles.accordionContentContainer}
                  >
                    {accordionContent.map((content, index) => {
                      return (
                        <section
                          key={index}
                          className={Styles.accordionContent}
                        >
                          <p className={Styles.accordionContentTitle}>
                            {content.title}
                          </p>
                          <button
                            style={{ backgroundColor: buttonColors[index] }}
                            className={Styles.accordionContentButton}
                          >
                            {content.location}
                          </button>
                        </section>
                      );
                    })}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </section>
      </main>
    </div>
  );
};

export default Agenda;
