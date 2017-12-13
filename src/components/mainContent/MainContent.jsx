import React, { Component } from "react";
import styles from './MainContent.module.scss';
import Snapshots from './snapshots/Snapshots'
import ArrivedClientsTable from "./arrivedClientsTable/ArrivedClientsTable";
import WeekAvailability from "./weekAvailablity/WeekAvailability";

export default class MainContent extends Component {

    componentDidMount() {
        this.props.getBookings();
        this.props.getBookingsSnapshot();
    }

    render() {
        const { snapshots, bookings, isLoadingBookings, isLoadingSnapshots } = this.props;
        const { weekAvailabilityPercent } = snapshots;
        return (
            <div className={styles.mainContainer}>
                { !isLoadingSnapshots ? <Snapshots snapshots={snapshots}/> : <div>Loading...</div> }
                <div className={styles.contentContaienr}>
                    <div className={styles.arrivedClientsContainer}>
                        <h3>Arrived this week</h3>
                        { !isLoadingBookings ? <ArrivedClientsTable bookings={bookings} /> : <div>Loading...</div> }
                    </div>
                    <div className={styles.weekAvailablityContainer}>
                        <h3>Week availability</h3>
                        { !isLoadingSnapshots ? <WeekAvailability weekAvailabilityPercent={weekAvailabilityPercent}/> : <div>Loading...</div> }
                    </div>
                </div>
            </div>
        );
    }
}
