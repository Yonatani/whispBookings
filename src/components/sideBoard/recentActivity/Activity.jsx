import React, { Component } from "react";
import moment from 'moment';
import styles from './Activity.module.scss';
import { humanize } from '../../../utils/utils'

class Activity extends Component {

    getTimeAgo(time) {
        let now = moment();
        let timePassed =  now.diff(moment(time), 'minutes')
        if(timePassed > 0) {
            return `${timePassed}min.`
        }
        return "now";
    }

    getTypeColor(type) {
        switch (type) {
            case "MAINTENANCE":
                return 'red';
            case "CHECK_IN":
                return 'green';
            default:
                return 'yellow'
        }
    }

    render() {
        const {activity} = this.props
        return(
            <div className={styles.activityContainer}>
                <div className={styles.rightDivider}>
                    <div style={{border: `solid 2px ${this.getTypeColor(activity.activityType)}`}} className={styles.circle}/>
                    <div className={styles.line}/>
                </div>
                <div className={styles.activityContent}>
                    <div className={styles.activityHeader}>
                        <p className={styles.status}>{humanize(activity.activityType)}</p>
                        <div className={styles.timeContainer}>
                            <p className={styles.time}>{this.getTimeAgo(activity.occurredAt)}</p>
                        </div>

                    </div>
                    <div>
                        <p className={styles.description}>{activity.description}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Activity;
