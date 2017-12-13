import bookingsService from '../services/bookingService';

export const UPDATE_RECENT_ACTIVITY = 'UPDATE_RECENT_ACTIVITY';
export const IS_LOADING_RECENT = 'IS_LOADING_RECENT';


export function getRecentActivity() {
    return (dispatch) => {
        dispatch(updateIsLoading());
        bookingsService.getRecentActivity().then((data) => {
            dispatch(updateRecentActivity(data));
        });

    };
}

function updateRecentActivity(recentActivity) {
    return {
        type: UPDATE_RECENT_ACTIVITY,
        recentActivity,
    };
}

function updateIsLoading() {
    return {
        type: IS_LOADING_RECENT,
        isLoading: true,
    };
}




