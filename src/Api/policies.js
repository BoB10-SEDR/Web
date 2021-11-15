import axios from 'axios';

// 전체 대응 정책 리스트 조회
export const getPolicies = async (page, limit) => {
    const response = await axios.get(`policies?page=${page}&limit=${limit}`);
    return response.data;
};

// 대응 정책 정보 조회
export const getPolicy = async idx => {
    const response = await axios.get(`policies/${idx}`);
    return response.data;
};

// 대응 정책 별 적용 가능한 장비 리스트 조회
export const getPolicyDevices = async idx => {
    const response = await axios.get(`policies/${idx}/devices`);
    return response.data;
};

// 대응 정책 등록
export const postPolicyRegister = async () => {
    const response = await axios.post(`policies`);
    return response.data;
};

// 대응 정책 적용
export const postPolicyActivate = async (idx, deviceIdx, data = {}) => {
    const response = await axios.post(`policies/${idx}/activate/${deviceIdx}`, data);
    return response.data;
};

// 대응 정책 해제
export const postPolicyInactivate = async (idx, deviceIdx) => {
    const response = await axios.post(`policies/${idx}/inactivate/${deviceIdx}`);
    return response.data;
};

// 대응 정책 정보 수정
export const putPolicyUpdate = async idx => {
    const response = await axios.put(`policies/${idx}`);
    return response.data;
};

// 대응 정책 정보 삭제
export const deletePolicy = async idx => {
    const response = await axios.delete(`policies/${idx}`);
    return response.data;
};
