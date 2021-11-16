import axios from "axios";
import base64 from 'react-native-base64';
if (!global.btoa) { global.btoa = base64.encode }
if (!global.atob) { global.atob = base64.decode }

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://r23:8000";
// const username = 'ahlerliz';
// const password = 'password';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://r1:8000";
const username = 'vcheng33';
const password = 'password';

class SisApi {

    static async getPublishedUrls(endpoint){
        const result = await axios.get(
            `${BASE_URL}/api/${endpoint}/`,
            {
                auth: {
                    username: username,
                    password: password,
                }
            },
        );
        console.log({ result });
        const urls = result.data.results
            .filter(data => data.status === "published")
            .map(data => data.api_url)
        return urls;

    }

    static async getPublishedDetails(urls){
        console.log({urls})
        const results = await Promise.all(urls.map(url => 
            axios.get(url,
                {auth: {
                    username: username,
                    password: password,
                    }
                })
            )
        )
        return results.map(result => result.data)
    }

    static retrieveLabSessions(exercisesessions){
        const exercisesWithLabs = [];

        exercisesessions.forEach(e => {
            const labs = e.exerciselabsession_set
                .map(labsession => {
                    return { ...labsession, ...e }
                });
            exercisesWithLabs.push(...labs)
        })
        console.log("inside retribeLabSessions", {exercisesWithLabs});

        return exercisesWithLabs;
    }

    /** Takes in an array of upcoming events/lecturesessions/exercisesessions. First, it filters
     *  for activities that will occur in the future. And then it sorts the array with the most
     *  recent events/lecturesessions/exercisessions first.
     */
    static async filterAndSortUpcoming(upcoming){
        const currentTime = new Date();
        console.log({currentTime});
        const filteredUpcoming = upcoming.filter(u => new Date(u.start_at) >= currentTime);
        console.log({filteredUpcoming});
        const sortedUpcoming = filteredUpcoming.sort((a, b) => new Date(a.start_at) - new Date(b.start_at));
        console.log({sortedUpcoming});
        return sortedUpcoming;
    }

    static async getUpcoming() {
        const exercisesUrls = await this.getPublishedUrls('exercisesessions');
        console.log("getUpcoming exercisesUrls", exercisesUrls);
        const lecturesUrls = await this.getPublishedUrls('lecturesessions');
        console.log("getUpcoming lecturesUrls", lecturesUrls);
        const eventsUrls = await this.getPublishedUrls('events');
        console.log("getUpcoming eventsUrls", eventsUrls);

        const exercisesessions = await this.getPublishedDetails(exercisesUrls);
        console.log("getUpcoming exercisesessions", exercisesessions);
        const exercisesWithLabs = this.retrieveLabSessions(exercisesessions);
        console.log({exercisesWithLabs});

        const lectureSessions = await this.getPublishedDetails(lecturesUrls);
        console.log("getUpcoming lectureSessions", lectureSessions);
        const events = await this.getPublishedDetails(eventsUrls);
        console.log({lectureSessions, events});
        const sortedUpcoming = await this.filterAndSortUpcoming([...lectureSessions, ...exercisesWithLabs, ...events])
        console.log("in getUpcoming function:", {sortedUpcoming});
        return sortedUpcoming;
    }

}

export default SisApi;