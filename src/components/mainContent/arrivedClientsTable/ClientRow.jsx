import React, { Component } from "react";
import styles from './ArrivedClients.module.scss';
import {humanize, getNumberOfDays} from '../../../utils/utils'

class ClientRow extends Component {

    humonizeDate(date) {
        return date.replace(/-/g, ".")
    }

    render() {
        const { client } = this.props;
        return (
            <tr className={styles.clientRowContainer}>

                <td className={'name'}>
                    <div className={styles.greenCircle}/>
                    <p>{client.firstName}&nbsp;</p>
                    <p>{client.lastName}</p>
                </td>
                <td>
                    <p>{ humanize(client.roomType) }</p>
                </td>
                <td>
                    <p>{ getNumberOfDays(client.checkInDate, client.checkOutDate, 'days') } nights</p>
                </td>
                <td>
                    <p>{this.humonizeDate(client.checkInDate) + " - " + this.humonizeDate(client.checkOutDate)}</p>
                </td>

            </tr>
        )
    }
}


export default ClientRow;
