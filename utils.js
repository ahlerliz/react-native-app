

function getCohort(url){
    const api = new URL(url);
    console.log({api});
    const cohort = api.hostname;
    console.log({cohort});
    return cohort;
}

function convertDateAndTime(dateAndTime){

    return new Date(dateAndTime).toUTCString()
    // const fullDate = new Date(dateAndTime)
    // const month = fullDate.getMonth()
    // const day = fullDate.getDay()
    // const hour = fullDate.getHours()
    // const minutes = fullDate.getMinutes()
    
    // return (`${month}, ${day} 
    //         ${hour}:${minutes} PST`)

}

export {convertDateAndTime, getCohort};