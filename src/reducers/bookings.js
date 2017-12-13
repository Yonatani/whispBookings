import { UPDATE_BOOKINGS, IS_LOADING_BOOKINGS } from '../actions/bookings';

const initialState = {
    bookings: [],
    isLoading: false
};

const bookings = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_BOOKINGS: {
            const {bookings} = action;

            return {...state, bookings, isLoading: false};
        }
        case IS_LOADING_BOOKINGS: {
            const {isLoading} = action;
            return {...state, isLoading};
        }
        default:
            return state;
    }
};

export default bookings;
