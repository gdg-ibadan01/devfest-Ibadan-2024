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
      title: ['Registrations and arrival'],
      details: ['Hall Gemini'],
    },
    {
      activity: 'Introduction/Opening',
      time: '9:00 am - 9:15 am',
      title: ['Introduction/Opening'],
      details: ['Hall Gemini'],
    },
    {
      activity: 'Speaker Session 1 - Dr. Olusola Ayoola (Group Mailing)',
      time: '9:20 am - 9:45 am',
      title: ['Speaker Session 1 - Dr. Olusola Ayoola (Group Mailing)'],
      details: ['Hall Gemini'],
    },
    {
      activity:
        'Speaker Session 2 - Esther Ubeng (Creating valuable products that captivate and retain users)',
      time: '9:50 am - 10:15 am',
      title: [
        'Speaker Session 2 - Esther Ubeng (Creating valuable products that captivate and retain users)',
      ],
      details: ['Hall Gemini'],
    },
    {
      activity: 'Keynote Speech 1',
      time: '10:20 am - 10:50 am',
      title: ['Keynote Speech 1'],
      details: ['Hall Gemini'],
    },
    {
      activity: 'Product Demo (Sponsors)',
      time: '10:50 am - 11:00 am',
      title: ['Product Demo (Sponsors)'],
      details: ['Hall Gemini'],
    },
    {
      activity: 'Networking/Break',
      time: '11:00 am - 11:20 am',
      title: ['Networking/Break'],
      details: ['Hall Gemini'],
    },
    {
      activity:
        'Speaker Session 3 - Feranmi Olowoyo (The Impact of Community on Developer Career Growth)',
      time: '11:20 am - 11:45 am',
      title: [
        'Speaker Session 3 - Feranmi Olowoyo (The Impact of Community on Developer Career Growth)',
      ],
      details: ['Hall Gemini'],
    },
    {
      activity: 'Breakout Workshop 1 & 2 & 3',
      time: '11:55 am - 12:35 pm',
      title: [
        'John O. Ajeigbe - (Next.js + Gemini AI: Building a Real-Time News Analysis and Fact-Checking Engine)',
        'Oluwole Adebiyi - (Leveraging Firebase for Scalable Real-Time Applications: A Smarter Alternative to WebSockets)',
        'Tunmise Ogunniyi - (Serverless 101 with Google Cloud Functions)',
      ],
      details: ['Hall Gemini', 'Hall Gamma', 'Hall Vertex'],
    },
    {
      activity: 'Breakout Workshop 4 & 5 & 6',
      time: '12:40 pm - 01:20 pm',
      title: [
        'Mustapha Adekunle - (Vertex AI Embeddings API + Vector Search Grounding LLMs made easy)',
        'Rebecca Saka - (Exploring Dart Beyond Flutter: Building CLI Applications and Best Practices)',
        'Motunrayo Koyejo - (Building Scalable Backend Systems: From Prototype to Production)',
      ],
      details: ['Hall Vertex', 'Hall Gemini', 'Hall Gamma'],
    },
    {
      activity: 'Breakout Speaker Sessions 4 & 5 & 6',
      time: '01:25 pm - 01:50 pm',
      title: ['Breakout Speaker Sessions 4 & 5 & 6'],
      details: ['Hall Gemini'],
    },
    {
      activity: 'Pictures / Item 7',
      time: '01:50 pm - 02:20 pm',
      title: ['Pictures / Item 7'],
      details: ['Hall Gemini'],
    },
    {
      activity: 'Panel Session',
      time: '02:25 pm - 03:10 pm',
      title: [
        'Ahmed Olanrewaju',
        'Israel Odeajo',
        'Aminat Akinyemi Ayoola',
        'Kingsley Owadara',
      ],
      details: ['Hall Gemini'],
    },
    {
      activity:
        'Lightning Talk 1 - Opeyimika Aremu (From Scrubs to Scripts: Mastering Tech Skills While Life Happens)',
      time: '03:10 pm - 03:20 pm',
      title: [
        'Opeyimika Aremu - (From Scrubs to Scripts: Mastering Tech Skills While Life Happens)',
      ],
      details: ['Hall Gemini'],
    },
    {
      activity:
        'Lightning Talk 2 - Great Oloyede (Agile Devs, Agile Lives: Project Management Hacks for Tech Professionals)',
      time: '03:20 pm - 03:30 pm',
      title: [
        'Great Oloyede - (Agile Devs, Agile Lives: Project Management Hacks for Tech Professionals)',
      ],
      details: ['Hall Gemini'],
    },
    {
      activity:
        'Lightning Talk 3 - Makinde Daniel (Technical Interview Prep: Tips, Tricks, and Winning Strategies)',
      time: '03:30 pm - 03:40 pm',
      title: [
        'Makinde Daniel (Technical Interview Prep: Tips, Tricks, and Winning Strategies)',
      ],
      details: ['Hall Gemini'],
    },
    {
      activity:
        "Lightning Talk 4 - Temitope Aiyegbusi (Embrace Curiosity: The Power of Questioning and Adopting a Beginner's Mindset for Continuous Growth)",
      time: '03:40 pm - 03:50 pm',
      title: [
        "Temitope Aiyegbusi (Embrace Curiosity: The Power of Questioning and Adopting a Beginner's Mindset for Continuous Growth)",
      ],
      details: ['Hall Gemini'],
    },
    {
      activity: 'Product Demo (Sponsors)',
      time: '03:50 pm - 04:00 pm',
      title: ['Product Demo (Sponsors)'],
      details: ['Hall Gemini'],
    },
    {
      activity: 'Organizer’s Speech/Presenting the Organizing Team',
      time: '04:00 pm - 04:10 pm',
      title: ['Organizer’s Speech/Presenting the Organizing Team'],
      details: ['Hall Gemini'],
    },
    {
      activity: 'Hackathon Presentation',
      time: '04:15 pm - 04:40 pm',
      title: ['Hackathon Presentation'],
      details: ['Hall Gemini'],
    },
    {
      activity: 'Games',
      time: '04:40 pm - 05:00 pm',
      title: ['Games'],
      details: ['Hall Gemini'],
    },
    {
      activity: 'Gift Presentation',
      time: '05:00 pm - 05:10 pm',
      title: ['Gift Presentation'],
      details: ['Hall Gemini'],
    },
    {
      activity: 'Vote of Thanks',
      time: '05:10 pm - 05:20 pm',
      title: ['Vote of Thanks'],
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
              November 23rd, 2024, and join us from 8:00 AM prompt
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
            {agendaItems.map((item, index) => {
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={Styles.accordionItem}
                  style={{ backgroundColor: backgroundColors[index] }}
                >
                  <AccordionTrigger className={Styles.accordionTrigger}>
                    {item.time}: {item.activity}
                  </AccordionTrigger>
                  <AccordionContent
                    className={Styles.accordionContentContainer}
                  >
                    <section key={index} className={Styles.accordionContent}>
                      {item.title && (
                        <div className="flex flex-col gap-6 w-[80%]">
                          {item.title.map((titles, i) => (
                            <p key={i} className={Styles.accordionContentTitle}>
                              {titles}
                            </p>
                          ))}
                        </div>
                      )}
                      {item.details && (
                        <div className="flex flex-col gap-4 lg:w-[12%] w-[30%] font-bold">
                          {item.details.map((detail, i) => (
                            <button
                              key={i}
                              style={{ backgroundColor: buttonColors[index] }}
                              className={Styles.accordionContentButton}
                            >
                              {detail}
                            </button>
                          ))}
                        </div>
                      )}
                    </section>
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
