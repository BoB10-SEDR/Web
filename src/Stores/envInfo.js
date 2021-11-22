import { observable } from 'mobx';

const envInfo = {
    selectedEnv: {
        id: null,
        Icon: null,
        title: '',
        devices: [],
    },
    circleLayers: Array(3).fill([]),
    setSelectedEnv(env) {
        this.selectedEnv = env;
        this.setCircleLayers(env.devices);
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
