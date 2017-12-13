import { combineReducers } from 'redux';
import bookings from './bookings';
import bestSellers from './bestSellers';
import snapshots from './snapshots';
import recentActivity from './recentActivities';

const bookingApp = combineReducers({
    bookings,
    snapshots,
    recentActivity,
    bestSellers
});

export default bookingApp;
