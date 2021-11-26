import axios from 'axios';

export const fetcher = async (url, ...args) => {
    const response = await axios.get(url, args);
    const { outputs, errors } = response.data;

    if (errors) {
        const error = new Error('An error occurred while fetching the data.');
        error.info = errors;
        throw error;
    }
    return outputs;
};
