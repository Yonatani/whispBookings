import axios from 'axios';
//import propertySerializer from '../serializers/property';
//import reviewSerializer from '../serializers/review';

class bookingService {

    static getBookings = () => {
        return axios({
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            },
            url: 'https://interview-booking-api.herokuapp.com/api/bookings'
        })
            .then((data) => {
                return data.data;
            })
            .catch(() => {
                console.log('error');
            });
    };

    static getBookingsSnapshot = () => {
        return axios({
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            },
            url: 'https://interview-booking-api.herokuapp.com/api/booking-snapshot'
        })
            .then((data) => {
                return data.data;
            })
            .catch(() => {
                console.log('error');
            });
    };

    static getRecentActivity = () => {
        return axios({
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            },
            url: 'https://interview-booking-api.herokuapp.com/api/recent-activity'
        })
            .then((data) => {
                return data.data;
            })
            .catch(() => {
                console.log('error');
            });
    };
}


export default bookingService;




