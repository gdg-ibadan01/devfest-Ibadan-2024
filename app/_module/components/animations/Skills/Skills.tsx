import React, { useEffect, useState } from 'react';
import Pills from '../Pills';

const colorVariables = ['#57caff', '#ff7daf', '#5cdb6d', '#ffd427'];
const anglesVariables = [
  -33, -33, 0, -27, 0, -27, 0, -10, 19, 33, 0, 17, 29, -27, -19, -19,
];

const skills = [
  'Business Intelligence',
  'Q.A Testers',
  'Video Editor',
  'Mobile Engineers',
  'Auditors',
  'Backend Developer',
  'Community Manager',
  'Frontend Developer',
  'Animators',
  'Digital Marketer',
  'Content Writer',
  'Network Administrators',
  'Data Engineer',
  'Product Management',
  'Tech Lawyer',
  'Devops',
];

const Skills: React.FC = () => {
  const [randomColors, setRandomColors] = useState<string[]>([]);

  useEffect(() => {
    const randomColorArray = Array.from({ length: skills.length }, () => {
      const randomIndex = Math.floor(Math.random() * colorVariables.length);
      return colorVariables[randomIndex];
    });
    setRandomColors(randomColorArray);
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center w-full gap-4 py-10 h-fit md:h-[350px] overflow-hidden">
      {skills.map((skill, idx) => (
        <Pills
          key={idx}
          text={skill}
          bgColor={randomColors[idx]}
          randomAngle={anglesVariables[idx]}
        />
      ))}
    </div>
  );
};

export default Skills;
