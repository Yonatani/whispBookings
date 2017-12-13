import React, { Component } from "react";
import styles from './SalesCompetition.module.scss';
import Progress from 'react-progressbar'

class EmployeeStatistics extends Component {

    render() {
        const {sellerStatistic} = this.props
        return(
            <div className={styles.employeeStatisticsContainer}>
                <img src={sellerStatistic.employee.profileImageUrl} alt="employee profile" />
                <div className={styles.contentContainer}>
                    <div className={styles.statisticHeader}>
                        <p className={styles.name}>{sellerStatistic.employee.firstName + ` ${sellerStatistic.employee.lastName[0]}.`}</p>
                        <p className={styles.time}>{sellerStatistic.sumOfHoursSold} hours</p>
                    </div>
                    <div className={styles.statisticGauge}>
                        <Progress completed={(sellerStatistic.sumOfHoursSold/10)} color={'#25cd6b'} height={2}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default EmployeeStatistics;
