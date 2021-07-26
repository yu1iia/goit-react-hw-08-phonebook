import React from 'react';
import styles from './ContactFormListItem.module.css';

const ContactFormListItem = ({ id, name, number, onRemove }) => (
  <>
    <li key={id} className={styles.contactListItem}>
      <p>
        {name} : {number}
      </p>
      <button className={styles.deleteButton} type="button" onClick={onRemove}>
        Delete
      </button>
    </li>
  </>
);

export default ContactFormListItem;
