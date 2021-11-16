import axios from 'axios';

// 대시보드 통계지수 조회
export const getDashboardStatistics = async (start, time) => {
    const config = { params: { start: start, time: time } };
    const response = await axios.get(`dashboard/statistics`, config);
    return response.data.outputs[0];
};

// 대시보드 시간별 전체 로그 개수 조회
export const getDashboardLogs = async (start, time) => {
    const response = await axios.get(`dashboard/logs?start=${start}&time=${time}`);
    return response.data.outputs[0];
};

// 대시보드 공격 유형별 로그 정보 조회
export const getDashboardAttackLogs = async start => {
    const response = await axios.get(`dashboard/logs?start=${start}`);
    return response.data.outputs[0];
};

// 대시보드 공격 유형별 시간별 로그 개수 조회
export const getDashboardLogsAttackDetail = async (start, time) => {
    const response = await axios.get(`dashboard/logs/attack/detail?start=${start}&time=${time}`);
    return response.data.outputs[0];
};

// 대시보드 구성별 로그 비율 조회
export const getgetDashboardLogsGroup = async start => {
    const response = await axios.get(`dashboard/logs?group=${start}`);
    return response.data.outputs[0];
};

// 대시보드 대응 정책 리스트 조회
export const getDashboardPolicies = async () => {
    const response = await axios.get(`dashboard/policies`);
    return response.data.outputs[0];
};
