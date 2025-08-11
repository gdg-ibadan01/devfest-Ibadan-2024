import React from 'react';
import { TableClass as styles } from '../styles/admin.classes';

const AttendeesList = () => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.th}>Ticket Id</th>
          <th className={styles.th}>Datetime</th>
          <th className={styles.th}>Fullname</th>
          <th className={styles.th}>Email</th>
          <th className={styles.th}>Code</th>
          <th className={styles.th}>Event Day(s)</th>
          <th className={styles.th}>Amount</th>
          <th className={styles.th}>Payment Status</th>
          <th className={styles.th}>Action</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
          return (
            <tr key={item}>
              <td className={styles.td}>#DF82481</td>
              <td className={styles.td}>July 25, 2025</td>
              <td className={styles.td}>Mary Esivue</td>
              <td className={styles.td}>maryesivue@gmail.com</td>
              <td className={styles.td}>WKS-18820</td>
              <td className={styles.td}>Sat + Fri</td>
              <td className={styles.td}>#8,000</td>
              <td className={styles.td}>Successful</td>
              <td className={styles.td}>
                <input type="checkbox" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AttendeesList;
