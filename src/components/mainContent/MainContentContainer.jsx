import { getBookings } from '../../actions/bookings';
import { getBookingsSnapshot } from '../../actions/snapshots';
import { connect } from 'react-redux';
import MainContent from './MainContent';

const mapDispatchToProps = (dispatch) => {
    return {
        getBookingsSnapshot: () => dispatch(getBookingsSnapshot()),
        getBookings: () => dispatch(getBookings()),
    };
};

const mapStateToProps = state => {
    return {
        bookings: state.bookings.bookings,
        snapshots: state.snapshots.snapshots,
        isLoadingBookings: state.bookings.isLoading,
        isLoadingSnapshots: state.snapshots.isLoading
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
