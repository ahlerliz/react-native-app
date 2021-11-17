

function getCohort(url){
    const arr = url.split('/')
    const cohort = arr[arr.length - 2];
    return cohort;
}

function readableDateAndTime(dateAndTime) {
    const dateOptions = { weekday: 'short', month: 'short', day: 'numeric'};
    const date = new Date(dateAndTime).toLocaleDateString('en-US', dateOptions);

    const timeOptions = { hour: '2-digit', minute: '2-digit' }
    const time = new Date(dateAndTime).toLocaleTimeString('en-US', timeOptions)
    return `${date}
     ${time}`;
}


export {getCohort, readableDateAndTime};