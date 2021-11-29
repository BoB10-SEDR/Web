import { observable } from 'mobx';

const logMagician = {
    deviceList: [],
    fdList: [],
    isSubmitted: false,
    activeTab: 0,
    setDeviceList(value) {
        this.deviceList = value;
    },
    setFdList(value) {
        this.fdList = value;
    },
    addFdList(value) {
        this.fdList.push(...value);
        console.log(value);
    },
    setIsSubmitted(value) {
        this.isSubmitted = value;
    },
    setActiveTab(value) {
        this.activeTab = value;
    },
};

export default observable(logMagician);
