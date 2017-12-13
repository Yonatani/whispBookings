import React, { Component } from "react";
import styles from './SideBoard.module.scss';
import RecentActivity from "./recentActivity/RecentActivity";
import _ from 'lodash';
import SalesCompetition from "./salesCompetition/SalesCompetition";


export default class SideBar extends Component {

    componentDidMount() {
        this.props.getRecentActivity()
        let that = this;
        setInterval(function(){ that.props.getRecentActivity(); }, 30000);
    }

    sliceActivities(recentActivities) { // wasn't sure if i need only 4.. took it from the design, otherwise it can be a long list.
        return _.take(recentActivities, 4);
    }

    render() {
        const { recentActivities, bestSellers, isLoadingRecentActivity, isLoadingBookings } = this.props;
        let slicedActivities =  !_.isEmpty(recentActivities) ? this.sliceActivities(recentActivities) : [];
        return (
            <div className={styles.sideBoardContainer}>
                <h3>Recent activity</h3>
                { !isLoadingRecentActivity || slicedActivities.length > 0 ? <RecentActivity recentActivities={slicedActivities}/> : <div>Loading...</div> }
                <h3>Employee stats</h3>
                { !isLoadingBookings ? <SalesCompetition bestSellers={bestSellers}/> : <div>Loading...</div> }
            </div>
        );
    }
}
