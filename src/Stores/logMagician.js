import { observable } from 'mobx';
import { GiTrojanHorse } from 'react-icons/gi';

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
    setNextTab() {
        this.activeTab += 1;
    },
    isLastTab() {
        return this.activeTab === this.fdList.length - 1;
    },
};

export default observable(logMagician);
