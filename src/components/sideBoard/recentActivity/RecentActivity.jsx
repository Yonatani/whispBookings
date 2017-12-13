import React from "react";
import styles from './Activity.module.scss';
import _ from 'lodash';
import Activity from "./Activity";

const RecentActivity = ({ recentActivities }) => (
    <div className={styles.recentActivityContainer}>
        {_.map(recentActivities, (activity, index) => <Activity key={activity.id} activity={activity}/>)}
    </div>
);

export default RecentActivity;
