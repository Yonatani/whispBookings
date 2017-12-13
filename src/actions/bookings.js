import bookingsService from '../services/bookingService';
import { getNumberOfDays } from '../utils/utils'
import _ from 'lodash';
export const UPDATE_BOOKINGS = 'UPDATE_BOOKINGS';
export const UPDATE_BEST_SELLERS = 'UPDATE_BEST_SELLERS';
export const IS_LOADING_BOOKINGS = 'IS_LOADING_BOOKINGS';

export function getBookings() {
    return (dispatch) => {
        dispatch(updateIsLoading())
        bookingsService.getBookings().then((data) => {
            dispatch(updateBookings(data));
            const bestSellers = calculateSalesCompetition(data);
            dispatch(updateBestThreeSellers(bestSellers));
        });
    };
}

function updateIsLoading() {
    return {
        type: IS_LOADING_BOOKINGS,
        isLoading: true,
    };
}

function updateBookings(bookings) {
    return {
        type: UPDATE_BOOKINGS,
        bookings,
    };
}

function calculateSalesCompetition(bookings) {
    let clonedBookings = _.cloneDeep(bookings)
    const removeBookingsWithoutEmployee = _.remove(clonedBookings, (bookingReservation) => !_.isEmpty(bookingReservation.employee))
    const vacationsByEmployeeGroups = _.groupBy(removeBookingsWithoutEmployee, (booking) => booking.employee.id)
    let numberOfVacationHoursSoldByEmployee = _.map(vacationsByEmployeeGroups, (vacationsByEmployee) => {
        let sumOfHoursSold = 0;
        _.forEach(vacationsByEmployee, (vacation) => {
            sumOfHoursSold += getNumberOfDays(vacation.checkInDate, vacation.checkOutDate, 'hours')
        });
        return {employee: vacationsByEmployee[0].employee, sumOfHoursSold}
    })
    let sortedArray = _.orderBy(numberOfVacationHoursSoldByEmployee, 'sumOfHoursSold', 'desc');
    return _.take(sortedArray, 3); // return best three sellers
}



function updateBestThreeSellers(bestThreeSellers) {
    return {
        type: UPDATE_BEST_SELLERS,
        bestThreeSellers,
    };
}




