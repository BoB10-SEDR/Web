import { observable } from 'mobx';

const dashboard = {
    totalLogs: 0,
    threatType: 0,
    threatLogs: 0,
    devices: 0,
    modules: 0,
    setTotalLogs(value) {
        this.totalLogs = value;
    },
    setThreatType(value) {
        this.threatType = value;
    },
    setThreatLogs(value) {
        this.threatLogs = value;
    },
    setDevices(value) {
        this.devices = value;
    },
    setModules(value) {
        this.modules = value;
    },
};

export default observable(dashboard);
