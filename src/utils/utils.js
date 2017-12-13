import moment from 'moment'

export function humanize(str) {
    str = str.toLowerCase()
    let frags = str.split('_');
    for (let i=0; i<frags.length; i++) {
        frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
}

export function getNumberOfDays(checkInDate, checkOutDate, timeType) {
    return moment(checkOutDate, "DD-MM-YYYY").diff(moment(checkInDate,  "DD-MM-YYYY"), timeType);
}
