function getDateDifference(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    const difference = Math.round((secondDate - firstDate) / oneDay);
    return difference;
}

module.exports = getDateDifference;