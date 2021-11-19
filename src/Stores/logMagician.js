import { observable } from 'mobx';

const logMagician = {
    deviceList: [],
    fdList: [],
    setDeviceList(value) {
        this.deviceList = value;
        console.log(value);
    },
    setFdList(value) {
        this.fdList = value;
    },
};

export default observable(logMagician);
