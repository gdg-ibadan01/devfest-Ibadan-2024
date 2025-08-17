'use client';

import React, { useMemo, useState } from 'react';
import { TableClass as styles } from '../styles/admin.classes';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
} from '@tanstack/react-table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import CheckCircleIcon from '@/app/_module/components/icons/CheckCircleIcon';
import SuccessModal from './SuccessModal';

const AttendeesList = () => {
  // State for managing the success modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAttendee, setSelectedAttendee] = useState<string>('');

  // Handler for checkbox change
  const handleCheckboxChange = (attendeeName: string) => {
    setSelectedAttendee(attendeeName);
    setIsModalOpen(true);
  };

  const data = useMemo(
    () => [
      {
        ticketId: '#DF82481',
        datetime: 'July 25, 2025',
        fullname: 'Mary Esivue',
        email: 'maryesivue@gmail.com',
        code: 'WKS-18820',
        eventDays: 'Sat + Fri',
        amount: '#8,000',
        status: 'Successful',
      },
      {
        ticketId: '#DF82482',
        datetime: 'July 26, 2025',
        fullname: 'John Doe',
        email: 'john@example.com',
        code: 'WKS-18821',
        eventDays: 'Sat',
        amount: '#10,000',
        status: 'Pending',
      },
      {
        ticketId: '#DF82483',
        datetime: 'July 27, 2025',
        fullname: 'Jane Doe',
        email: 'jane@example.com',
        code: 'WKS-18822',
        eventDays: 'Fri',
        amount: '#12,000',
        status: 'Successful',
      },
      {
        ticketId: '#DF82481',
        datetime: 'July 25, 2025',
        fullname: 'Mary Esivue',
        email: 'maryesivue@gmail.com',
        code: 'WKS-18820',
        eventDays: 'Sat + Fri',
        amount: '#8,000',
        status: 'Successful',
      },
      {
        ticketId: '#DF82482',
        datetime: 'July 26, 2025',
        fullname: 'John Doe',
        email: 'john@example.com',
        code: 'WKS-18821',
        eventDays: 'Sat',
        amount: '#10,000',
        status: 'Pending',
      },
      {
        ticketId: '#DF82483',
        datetime: 'July 27, 2025',
        fullname: 'Jane Doe',
        email: 'jane@example.com',
        code: 'WKS-18822',
        eventDays: 'Fri',
        amount: '#12,000',
        status: 'Successful',
      },
      {
        ticketId: '#DF82481',
        datetime: 'July 25, 2025',
        fullname: 'Mary Esivue',
        email: 'maryesivue@gmail.com',
        code: 'WKS-18820',
        eventDays: 'Sat + Fri',
        amount: '#8,000',
        status: 'Successful',
      },
      {
        ticketId: '#DF82482',
        datetime: 'July 26, 2025',
        fullname: 'John Doe',
        email: 'john@example.com',
        code: 'WKS-18821',
        eventDays: 'Sat',
        amount: '#10,000',
        status: 'Pending',
      },
      {
        ticketId: '#DF82483',
        datetime: 'July 27, 2025',
        fullname: 'Jane Doe',
        email: 'jane@example.com',
        code: 'WKS-18822',
        eventDays: 'Fri',
        amount: '#12,000',
        status: 'Successful',
      },
    ],
    []
  );

  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      { accessorKey: 'ticketId', header: 'Ticket Id' },
      { accessorKey: 'datetime', header: 'Datetime' },
      { accessorKey: 'fullname', header: 'Fullname' },
      { accessorKey: 'email', header: 'Email' },
      { accessorKey: 'code', header: 'Code' },
      { accessorKey: 'eventDays', header: 'Event Day(s)' },
      { accessorKey: 'amount', header: 'Amount' },
      { accessorKey: 'status', header: 'Payment Status' },
      {
        id: 'action',
        header: 'Action',
        cell: ({ row }) => (
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange(row.original.fullname)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          />
        ),
      },
    ],
    [handleCheckboxChange]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      {/* Table */}
      <table className={styles.table}>
        <thead className={styles.thead}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={styles.th}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={styles.tbody}>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={styles.td}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-5 mt-4">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="px-6 py-[10px] border rounded font-normal text-[#474C52] text-[14px] bg-white disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page{' '}
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="px-6 py-[10px] font-normal border text-[#474C52] text-[14px] rounded bg-white disabled:opacity-50"
        >
          Next
        </button>

        {/* Rows per page selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className={styles.dropdown}>
            <button className="flex items-center justify-between">
              Show {table.getState().pagination.pageSize}{' '}
              <ChevronDown className="w-4 h-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[130px]">
            {[5, 10, 15].map((s) => (
              <DropdownMenuItem
                key={s}
                onClick={() => table.setPageSize(s)}
                className="flex items-center text-[#474C52] text-[14px] font-normal justify-between"
              >
                {s}
                {table.getState().pagination.pageSize === s && (
                  <CheckCircleIcon />
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Success Modal */}
      <SuccessModal
        message={`Action completed successfully for ${selectedAttendee}!`}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
};

export default AttendeesList;
