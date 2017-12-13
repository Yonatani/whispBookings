import React from "react";
import styles from './Snapshot.module.scss';
import Snapshot from './Snapshot'

const Snapshots = ({ snapshots }) => (
    <div className={styles.snapshotsContainer}>
        <div className={styles.contentContainer}>
            <Snapshot title={"Rooms available"} amount={snapshots.availableRooms} />
            <Snapshot title={"Reserved rooms"} amount={snapshots.reservedRooms} />
            <Snapshot title={"Checked in"} amount={snapshots.checkedIn} />
        </div>
        <div className={styles.breakWidth}/>
    </div>
);

export default Snapshots;

