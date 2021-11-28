import { observable } from 'mobx';

const logMagician = {
    deviceList: [],
    fdList: [],
    isSubmitted: false,
    setDeviceList(value) {
        this.deviceList = value;
    },
    setFdList(value) {
        this.fdList = value;
    },
    addFdList(value) {
        this.fdList.push(...value);
        console.log(this.fdList.length);
    },
    setIsSubmitted(value) {
        this.isSubmitted = value;
    },
};

export default observable(logMagician);
