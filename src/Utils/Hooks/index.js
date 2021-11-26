import axios from 'axios';

export const fetcher = async (url, ...args) => {
    const response = await axios.get(url, args);
    const { outputs, errors } = response.data;

    return outputs;
};
