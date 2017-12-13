import _ from 'lodash';
import React, { Component } from "react";
import styles from './ArrivedClients.module.scss';
import ClientRow from './ClientRow.jsx';
import moment from 'moment';

export default class ArrivedClientsTable extends Component {

    getClientsForThePasWeek() {
        const { bookings } = this.props;
        let bookingArr = _.cloneDeep(bookings)
        bookingArr.sort(function(reservation1, reservation2){
            let date1 = moment(reservation1.checkInDate, 'DD-MM-YYYY');
            let date2 = moment(reservation2.checkInDate, 'DD-MM-YYYY');
            return date2-date1;
        });
        return _.remove(bookingArr, (reservation) => {

            return moment().diff(moment(reservation.checkInDate, 'DD-MM-YYYY'), 'days') < 8 ? reservation : null
        });
    }

    render() {
        let lastWeekReservations = this.getClientsForThePasWeek()
        return (
            <table className={styles.arrivedContainer}>
                <tbody>
                    {_.map(lastWeekReservations, (client)=> <ClientRow key={client.id} client={client}/>)}
                </tbody>
            </table>
        );
    }
}
