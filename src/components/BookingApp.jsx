import React, { Component } from "react";
import styles from './BookingApp.module.scss';
import Header from './header/Header';
import MainContent from './mainContent/MainContentContainer';
import SideBoard from './sideBoard/SideBoardContainer';

export default class BookingApp extends Component {
    render() {
        return (
            <div className={styles.app}>
                <Header/>
                <div className="page-content">
                    <MainContent/>
                    <SideBoard/>
                </div>
            </div>
        );
    }
}
