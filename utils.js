
/** Takes in string URL and retrieves the cohort name 
 * 
 * @param {*} url 
 * @returns "cohort-name"
 */
function getCohort(url){
    const arr = url.split('/');
    const cohort = arr[arr.length - 2];
    return cohort;
}

/** Converts string date and time into readable format and local time zone
 * 
 * @param {*} dateAndTime 
 * @returns "Thu, Nov 18
     10:42 AM"
 */
function readableDateAndTime(dateAndTime) {
    const dateOptions = { weekday: 'short', month: 'short', day: 'numeric'};
    const date = new Date(dateAndTime).toLocaleDateString('en-US', dateOptions);

    const timeOptions = { hour: '2-digit', minute: '2-digit' };
    const time = new Date(dateAndTime).toLocaleTimeString('en-US', timeOptions);
    return `${date}
     ${time}`;
}


export {getCohort, readableDateAndTime};