import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";

class SisApi {
    token = 'ea61e6fb61ed7ed1e06ebcd96eb46c3f5789098e';
    username = 'vcheng33';
    password = 'password';

    static async login() {
        const result = await axios.post(
            `${BASE_URL}/api/-token/`,
            { username, password },
        )
        console.log({ result });
        this.token = result.token;
        return result;
    }

    static async getUpcoming() {

    }

    static async getCohort() {
        const result = await axios.get(
            `${BASE_URL}/api/cohorts`,
            {
                auth: {
                    username: 'vcheng33',
                    password: 'password',
                }
            },
        );
        console.log({ result });
        return result;
    }
}

export default SisApi;