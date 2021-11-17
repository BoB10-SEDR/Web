import axios from 'axios';

export const fetcher = async (url, ...args) => {
    const response = await axios.get(url, args);
    return response.data.outputs;
};
