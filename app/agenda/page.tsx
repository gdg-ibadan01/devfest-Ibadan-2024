'use client';

import { Fragment, useState, useEffect } from 'react';
import { agendaClass as Styles } from './agenda';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';
import { AccordionContentData } from '../_module/data/AccordionContent';
import { generateRandomColors } from '../_module/lib/utils';
import { Calendar } from '../_module/components/icons';

export default function Agenda() {
  const accordionItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const accordionContentColors = ['#CCF6C5', '#FFE7A5', '#F8D8D8', '#C3ECF6'];
  const accordionButtonColors = ['#FF7DAF', '#4285F4', '#FFD427', '#5CDB6D'];
  const [backgroundColors, setBackgroundColors] = useState<string[]>([]);
  const [buttonColors, setButtonColors] = useState<string[]>([]);

  useEffect(() => {
    setBackgroundColors(
      generateRandomColors({
        accordionButtonColors,
        accordionContentColors,
        accordionItems,
        setButtonColors,
      })
    );
  }, []);

  return (
    <div className={Styles.container}>
      <main className={Styles.main}>
        <header className={Styles.header}>
          <h2 className={Styles.headerHeading}>The Promised Agenda</h2>
          <section className={Styles.dateContainer}>
            <Calendar />
            <p className={Styles.date}>
              December 3rd, 2024, and join us from 9:00 AM to 5:00 PM
            </p>
          </section>
          <p className={Styles.headerText}>
            Mark your calendar for a day filled with{' '}
            <span className={Styles.inspirationText}>inspiration,</span>{' '}
            <span className={Styles.innovationText}>innovation,</span>{' '}
            <span className={Styles.connectionText}>and connection.</span>
          </p>
        </header>
        <section>
          <Accordion
            type="single"
            collapsible
            className="max-w-[1000px] mx-auto"
          >
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
                    {AccordionContentData.map((content, index) => {
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
}

// export default Agenda;
