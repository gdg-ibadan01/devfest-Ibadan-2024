import React from 'react';
import { AgendaItem } from './AgendaData';

type Props = {
  data: AgendaItem[];
};

export default function AgendaTable({ data }: Props) {
  return (
    <table className="w-full border-[2px] border-[#1E1E1E] border-collapse">
      <thead className="bg-[#FFE7A5]">
        <tr>
          <th className="p-3 text-left border-b-[2px] border-[#1E1E1E]">
            Time
          </th>
          <th className="p-3 text-left border-b-[2px] border-[#1E1E1E]">
            Activities
          </th>
          <th className="p-3 text-left border-b-[2px] border-[#1E1E1E]">
            Duration
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr
            key={idx}
            className={item.highlight ? 'bg-[#F8D8D8]' : 'bg-[#FFF9EA]'}
          >
            <td className="p-3 border-b-[2px] border-[#1E1E1E]">{item.time}</td>
            <td className="p-3 border-b-[2px] border-[#1E1E1E]">
              {item.activity}
            </td>
            <td className="p-3 border-b-[2px] border-[#1E1E1E]">
              {item.duration}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
