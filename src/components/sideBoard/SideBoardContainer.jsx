import { getRecentActivity } from '../../actions/recentActivity';
import { connect } from 'react-redux';
import SideBoard from './SideBoard';

const mapDispatchToProps = (dispatch) => {
    return {
        getRecentActivity: () => dispatch(getRecentActivity()),
    };
};

const mapStateToProps = state => {
    return {
        recentActivities: state.recentActivity.recentActivity,
        bestSellers: state.bestSellers,
        isLoadingRecentActivity: state.recentActivity.isLoading,
        isLoadingBookings: state.bookings.isLoading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBoard);
