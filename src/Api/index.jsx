import axios from 'axios';

export const getPolicies = async () => {
    const response = await axios.get('policies');
    return response.data;
};
