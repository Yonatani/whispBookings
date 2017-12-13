import React, { Component } from "react";
import styles from './Header.module.scss';
import userImage2 from '../../assets/user/user@3x.png';

export default class Header extends Component {
    render() {
        return (
            <div className={styles.headerContainer}>
                <p>BOOKING</p>
                <img src={userImage2} alt={'userImage'}/>
            </div>
        );
    }
}
