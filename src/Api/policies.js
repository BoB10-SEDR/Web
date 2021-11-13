import axios from 'axios';

export const getPolicies = async (page, limit) => {
    const response = await axios.get(`policies?page=${page}&limit=${limit}`);
    return response.data;
};

export const getPolicy = async idx => {
    const response = await axios.get(`policies/${idx}`);
    return response.data;
};

export const getPolicyAvailableDevices = async idx => {
    const response = await axios.get(`policies/${idx}/devices`);
    return response.data;
};

export const postPolicyRegister = async () => {
    const response = await axios.post(`policies`);
    return response.data;
};

export const postPolicyActivate = async (idx, deviceIdx) => {
    const response = await axios.post(`policies/${idx}/activate/${deviceIdx}`);
    return response.data;
};

export const postPolicyInActivate = async (idx, deviceIdx) => {
    const response = await axios.post(`policies/${idx}/inactivate/${deviceIdx}`);
    return response.data;
};

export const putPolicyUpdate = async idx => {
    const response = await axios.put(`policies/${idx}`);
    return response.data;
};

export const deletePolicy = async idx => {
    const response = await axios.delete(`policies/${idx}`);
    return response.data;
};
