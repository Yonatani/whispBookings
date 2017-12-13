import { UPDATE_RECENT_ACTIVITY, IS_LOADING_RECENT } from '../actions/recentActivity';

const initialState = {
    recentActivity: [],
    isLoading: false
};

const recentActivity = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_RECENT_ACTIVITY: {
            const {recentActivity} = action;
            return {...state, recentActivity, isLoading: false};
        }
        case IS_LOADING_RECENT: {
            const {isLoading} = action;
            return {...state, isLoading};
        }
        default:
            return state;
    }
};

export default recentActivity;
