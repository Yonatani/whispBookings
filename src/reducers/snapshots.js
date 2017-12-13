import {IS_LOADING_SNAPSHOTS, UPDATE_BOOKINGS_SNAPSHOT} from "../actions/snapshots";

const initialState = {
    snapshots: [],
    isLoading: false
};

const snapshot = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_BOOKINGS_SNAPSHOT: {
            const {snapshots} = action;
            return {...state, snapshots, isLoading: false};
        }
        case IS_LOADING_SNAPSHOTS: {
            const {isLoading} = action;
            return {...state, isLoading};
        }
        default:
            return state;
    }
};

export default snapshot;
