import React from "react";
import styles from './SalesCompetition.module.scss';
import _ from 'lodash';
import EmployeeStatistic from "./EmployeeStatistic";

const SalesCompetition = ({ bestSellers }) => (
    <div className={styles.recentActivityContainer}>
        {_.map(bestSellers, (sellerStatistic, index) => <EmployeeStatistic key={sellerStatistic.employee.id} sellerStatistic={sellerStatistic}/>)}
    </div>
);

export default SalesCompetition;
