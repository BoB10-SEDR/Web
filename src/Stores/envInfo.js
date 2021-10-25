import { observable } from 'mobx';

const envInfo = {
    selectedEnvId: 0,
    devices: [],
    circleLayers: Array(3).fill([]),
    setEnv(id, devices) {
        this.selectedEnvId = id;
        this.devices = devices;
        this.setCircleLayers(devices);
    },
    setCircleLayers(devices) {
        this.clearCircleLayers();
        devices.map(device => this.circleLayers[device.level].push(device));
    },
    clearCircleLayers() {
        this.circleLayers = Array(3).fill([]);
    },
};

export default observable(envInfo);
