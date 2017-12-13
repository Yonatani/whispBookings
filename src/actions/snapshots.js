import bookingsService from '../services/bookingService';
export const UPDATE_BOOKINGS_SNAPSHOT = 'UPDATE_BOOKINGS_SNAPSHOT';
export const IS_LOADING_SNAPSHOTS = 'IS_LOADING_SNAPSHOTS';



export function getBookingsSnapshot() {
    return (dispatch) => {
        dispatch(updateIsLoading())
        bookingsService.getBookingsSnapshot().then((data) => {
            dispatch(updateBookingsSnapshot(data));
        });

    };
}

function updateBookingsSnapshot(snapshots) {
    return {
        type: UPDATE_BOOKINGS_SNAPSHOT,
        snapshots,
    };
}

function updateIsLoading() {
    return {
        type: IS_LOADING_SNAPSHOTS,
        isLoading: true,
    };
}
