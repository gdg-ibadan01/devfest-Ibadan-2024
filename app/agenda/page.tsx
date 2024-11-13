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
  const accordionItems = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23,
  ];
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

  const agendaItems = [
    {
      activity: 'Registrations and Arrival',
      time: '8:30 am - 9:00 am',
      duration: '30 mins',
      details: ['Hall: Gemini'],
    },
    {
      activity: 'Introduction/Opening',
      time: '9:00 am - 9:15 am',
      duration: '15 mins',
      details: ['Hall Gemini'],
    },
    {
      activity: 'Speaker Session 1 - Dr. Olusola Ayoola (Group Mailing)',
      time: '9:20 am - 9:45 am',
      duration: '25 mins',
      details: ['Hall Gemini'],
    },
    {
      activity:
        'Speaker Session 2 - Esther Ubeng (Creating valuable products that captivate and retain users)',
      time: '9:50 am - 10:15 am',
      duration: '25 mins',
      details: ['Hall Gemini'],
    },
    {
      activity: 'Keynote Speech 1',
      time: '10:20 am - 10:50 am',
      duration: '30 mins',
      details: ['Hall Gemini'],
    },
    {
      activity: 'Product Demo (Sponsors)',
      time: '10:50 am - 11:00 am',
      duration: '10 mins',
      details: ['Hall Gemini'],
    },
    {
      activity: 'Networking/Break',
      time: '11:00 am - 11:20 am',
      duration: '20 mins',
      details: ['Hall Gemini'],
    },
    {
      activity:
        'Speaker Session 3 - Feranmi Olowoyo (The Impact of Community on Developer Career Growth)',
      time: '11:20 am - 11:45 am',
      duration: '25 mins',
      details: ['Hall Gemini'],
    },
    {
      activity: 'Breakout Workshop 1 & 2 & 3',
      time: '11:55 am - 12:35 pm',
      duration: '40 mins',
      details: [
        'Hall Gemini - John O. Ajeigbe (Next.js + Gemini AI: Building a Real-Time News Analysis and Fact-Checking Engine)',
        'Hall Gamma - Oluwole Adebiyi (Leveraging Firebase for Scalable Real-Time Applications: A Smarter Alternative to WebSockets)',
        'Hall Vertex - Tunmise Ogunniyi (Serverless 101 with Google Cloud Functions)',
      ],
    },
    {
      activity: 'Breakout Workshop 4 & 5 & 6',
      time: '12:40 pm - 01:20 pm',
      duration: '40 mins',
      details: [
        'Hall Vertex - Mustapha Adekunle (Vertex AI Embeddings API + Vector Search Grounding LLMs made easy)',
        'Hall Gemini - Rebecca Saka (Exploring Dart Beyond Flutter: Building CLI Applications and Best Practices)',
        'Hall Gamma - Motunrayo Koyejo (Building Scalable Backend Systems: From Prototype to Production)',
      ],
    },
    {
      activity: 'Breakout Speaker Sessions 4 & 5 & 6',
      time: '01:25 pm - 01:50 pm',
      duration: '25 mins',
      details: ['Hall Gemini'],
    },
    {
      activity: 'Pictures / Item 7',
      time: '01:50 pm - 02:20 pm',
      duration: '30 mins',
      details: ['Hall Gemini'],
    },
    {
      activity: 'Panel Session',
      time: '02:25 pm - 03:10 pm',
      duration: '45 mins',
      details: [
        'Ahmed Olanrewaju',
        'Israel Odeajo',
        'Aminat Akinyemi Ayoola',
        'Kingsley Owadara',
      ],
    },
    {
      activity:
        'Lightning Talk 1 - Opeyimika Aremu (From Scrubs to Scripts: Mastering Tech Skills While Life Happens)',
      time: '03:10 pm - 03:20 pm',
      duration: '10 mins',
      details: ['Hall Gemini'],
    },
    {
      activity:
        'Lightning Talk 2 - Great Oloyede (Agile Devs, Agile Lives: Project Management Hacks for Tech Professionals)',
      time: '03:20 pm - 03:30 pm',
      duration: '10 mins',
      details: ['Hall Gemini'],
    },
    {
      activity:
        'Lightning Talk 3 - Makinde Daniel (Technical Interview Prep: Tips, Tricks, and Winning Strategies)',
      time: '03:30 pm - 03:40 pm',
      duration: '10 mins',
      details: ['Hall Gemini'],
    },
    {
      activity:
        "Lightning Talk 4 - Temitope Aiyegbusi (Embrace Curiosity: The Power of Questioning and Adopting a Beginner's Mindset for Continuous Growth)",
      time: '03:40 pm - 03:50 pm',
      duration: '10 mins',
      details: ['Hall Gemini'],
    },
    {
      activity: 'Product Demo (Sponsors)',
      time: '03:50 pm - 04:00 pm',
      duration: '10 mins',
      details: ['Hall Gemini'],
    },
    {
      activity: 'Organizer’s Speech/Presenting the Organizing Team',
      time: '04:00 pm - 04:10 pm',
      duration: '10 mins',
      details: ['Hall Gemini'],
    },
    {
      activity: 'Hackathon Presentation',
      time: '04:15 pm - 04:40 pm',
      duration: '25 mins',
      details: ['Hall Gemini'],
    },
    {
      activity: 'Games',
      time: '04:40 pm - 05:00 pm',
      duration: '20 mins',
      details: ['Hall Gemini'],
    },
    {
      activity: 'Gift Presentation',
      time: '05:00 pm - 05:10 pm',
      duration: '10 mins',
      details: ['Hall Gemini'],
    },
    {
      activity: 'Vote of Thanks',
      time: '05:10 pm - 05:20 pm',
      duration: '10 mins',
      details: ['Hall Gemini'],
    },
  ];

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
            {agendaItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={Styles.accordionItem}
                style={{ backgroundColor: backgroundColors[index] }}
              >
                <AccordionTrigger className={Styles.accordionTrigger}>
                  {`${item.time}: ${item.activity}`}
                </AccordionTrigger>
                <AccordionContent className={Styles.accordionContentContainer}>
                  <p className={Styles.accordionContentTitle}>
                    Duration: {item.duration}
                  </p>
                  {item.details?.map((detail, i) => (
                    <section key={i} className={Styles.accordionContent}>
                      <p>{detail}</p>
                    </section>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
    </div>
  );
}

// export default Agenda;
