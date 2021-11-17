import axios from "axios";
import base64 from 'react-native-base64';
if (!global.btoa) { global.btoa = base64.encode }
if (!global.atob) { global.atob = base64.decode }

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://r23:8000";
const username = 'ahlerliz';
const password = 'password';

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://r1:8000";
// const username = 'testuser';
// const password = 'password';

/** Class that holds static functions to make API calls
 * 
 */

class SisApi {

    /** API call to get information
     * filtered on status: "published"
     * Returning only the URLs
     * @param {*} endpoint 
     * @returns {} ["url1", "url2", ...]
     */
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
        const urls = result.data.results
            .filter(data => data.status === "published")
            .map(data => data.api_url);
        return urls;

    }

    /** API call to get detailed information
     * from array of URLs
     * @param {*} urls 
     * @returns {} [{title: "title"}, {title: "title2"}, ...]
     */
    static async getPublishedDetails(urls){
        const results = await Promise.all(urls.map(url => 
            axios.get(url,
                {auth: {
                    username: username,
                    password: password,
                    }
                })
            )
        )
        return results.map(result => result.data);
    }

    /** Formats exercise sessions to make start_at and end_at accessible
     * 
     * @param {*} exercisesessions 
     * @returns {} [{exercise: "exercise1", start_at: "Nov 10"}...]
     */
    static retrieveLabSessions(exercisesessions){
        const exercisesWithLabs = [];

        exercisesessions.forEach(e => {
            const labs = e.exerciselabsession_set
                .map(labsession => {
                    return { ...labsession, ...e }
                });
            exercisesWithLabs.push(...labs);
        })

        return exercisesWithLabs;
    }

    /** Takes in an array of upcoming events/lecturesessions/exercisesessions. First, it filters
     *  for activities that will occur in the future. And then it sorts the array with the most
     *  recent events/lecturesessions/exercisessions first.
     */
    static async filterAndSortUpcoming(upcoming){
        const currentTime = new Date();
        const filteredUpcoming = upcoming.filter(u => new Date(u.start_at) >= currentTime);
        const sortedUpcoming = filteredUpcoming.sort((a, b) => new Date(a.start_at) - new Date(b.start_at));
        return sortedUpcoming;
    }

    /** Main function that calls API functions and sorting functions
     * Returns data in accessible format for rendering
     */
    static async getUpcoming() {
        const exercisesUrls = await this.getPublishedUrls('exercisesessions');
        const lecturesUrls = await this.getPublishedUrls('lecturesessions');
        const eventsUrls = await this.getPublishedUrls('events');

        const exercisesessions = await this.getPublishedDetails(exercisesUrls);
        const exercisesWithLabs = this.retrieveLabSessions(exercisesessions);

        const lectureSessions = await this.getPublishedDetails(lecturesUrls);
        const events = await this.getPublishedDetails(eventsUrls);
        const sortedUpcoming = await this.filterAndSortUpcoming([...lectureSessions, ...exercisesWithLabs, ...events]);
        
        return sortedUpcoming;
    }

}

export default SisApi;
export {BASE_URL};