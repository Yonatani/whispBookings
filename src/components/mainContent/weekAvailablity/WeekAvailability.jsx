import React, { Component } from "react";
import styles from './WeekAvailability.module.scss'

class WeekAvailability extends Component {

    getPrecentColor(precent) {
        switch (true) {
            case precent < 40:
                return 'red';
            case precent > 40 && precent < 85:
                return 'yellow';
            default:
                return 'green'
        }
    }

    render() {
        const { weekAvailabilityPercent } = this.props;
        return (
            <div className={styles.weekAvailabilityContainer}>
                <p style={{color: this.getPrecentColor(weekAvailabilityPercent)}}>{weekAvailabilityPercent}%</p>
            </div>
        )
    }
}


export default WeekAvailability;
