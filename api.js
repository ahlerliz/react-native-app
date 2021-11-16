import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://r23:8000";
const username = 'ahlerliz';
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

    static retrieveLabSessions(exercisesession){

        const result = exercisesession.exerciselabsession_set
            .map(labsession => {
                return {...labsession, ...exercisesession}})

        return result;
    }

    static async filterAndSortUpcoming(upcoming){
        


    }
   
    static async getPublishedLecturesUrls() {
        const result = await axios.get(
            `${BASE_URL}/api/lecturesessions/`,
            {
                auth: {
                    username: username,
                    password: password,
                }
            },
        );
        console.log({ result });
        const urls = result.data.results
            .filter(lecture => lecture.status === "published")
            .map(lecture => lecture.api_url)
        return urls;
    }

    static async getPublishedExercisesUrls() {
        const result = await axios.get(
            `${BASE_URL}/api/exercisesessions/`,
            {
                auth: {
                    username: username,
                    password: password,
                }
            },
        );
        console.log({ result });
        const urls = result.data.results
            .filter(exercise => exercise.status === "published")
            .map(exercise => exercise.api_url)
        return urls;
    }

    static async getPublishedEventsUrls() {
        const result = await axios.get(
            `${BASE_URL}/api/events/`,
            {
                auth: {
                    username: username,
                    password: password,
                }
            },
        );
        console.log({ result });
        const urls = result.data.results
            .filter(event => event.status === "published")
            .map(event => event.api_url)
        return urls;
    }

    static async getCohort() {
        const result = await axios.get(
            `${BASE_URL}/api/cohorts/`,
            {
                auth: {
                    username: username,
                    password: password,
                }
            },
        );
        console.log({ result });
        return result;
    }


}

export default SisApi;