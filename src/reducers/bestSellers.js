import { UPDATE_BEST_SELLERS } from '../actions/bookings';

const initialState = [];

const bestSellers = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_BEST_SELLERS: {
            const {bestThreeSellers} = action;

            return bestThreeSellers;
        }
        default:
            return state;
    }
};

export default bestSellers;
