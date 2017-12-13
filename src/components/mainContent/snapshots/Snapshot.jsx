import React from "react";
import styles from './Snapshot.module.scss';

const Snapshot = ({ title, amount }) => (
    <div className={styles.snapshotContainer}>
        <p className={styles.amount}>{amount}</p>
        <p className={styles.title}>{title}</p>
    </div>
);

export default Snapshot;
