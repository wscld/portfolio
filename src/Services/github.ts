import axios from 'axios';

export const fetchRepos = async (user: string) => {
    const url = "https://api.github.com/users/" + user + "/repos";
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        throw Error(err);
    }

}

export default {fetchRepos};