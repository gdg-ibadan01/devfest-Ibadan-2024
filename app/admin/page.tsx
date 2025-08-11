import React from 'react';
import { AdminClass as styles } from './styles/admin.classes';
import AttendeesList from './components/AttendeesList';
import ExportIcon from '../_module/components/icons/ExportIcon';

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>all attendees</h3>
        <div className={styles.searchInputContainer}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Search by name/email/code"
              className={styles.searchInput}
            />
            <select name="day" id="" className={styles.dropdown}>
              <option value="">Day</option>
              <option value="">Sat + Fri</option>
              <option value="">Sat</option>
              <option value="">Fri</option>
            </select>
            <select name="status" id="" className={styles.dropdown}>
              <option value="">Status</option>
              <option value="">All Status</option>
              <option value="">Successful</option>
              <option value="">Pending</option>
              <option value="">Failed</option>
            </select>
          </div>
          <div className={styles.actionBtnsContainer}>
            <button className={styles.exportBtn}>
              <ExportIcon /> <span>Export</span>
            </button>
            <button className={styles.addBtn}>Add attendee</button>
          </div>
        </div>
        <AttendeesList />
      </div>
    </div>
  );
};

export default page;
