import { observable } from 'mobx';
import { GiTrojanHorse } from 'react-icons/gi';

const logMagician = {
    deviceList: [],
    fdList: [],
    isSubmitted: false,
    activeTab: 0,
    isOpen: false,
    selectedList: [],
    activeTab: 0,
    sectionIndexList: [false, false, false],
    isSubmitted: false,
    selectedDeviceIndex: null,
    selectedProcessIndex: null,
    selectedProcessName: null,
    setActiveTab(value) {
        this.activeTab = value;
    },
    setIsOpen(value) {
        this.isOpen = value;
    },
    setSelectedList(value = []) {
        this.selectedList = value;
    },
    setSectionIndexList(index, value) {
        this.sectionIndexList[index] = value;
        const nextIndex = index + 1;
        if (this.sectionIndexList.length <= nextIndex) return;

        for (let i = nextIndex; i < this.sectionIndexList.length; i++) {
            this.sectionIndexList[i] = false;
        }
    },
    setIsSubmitted(value) {
        this.isSubmitted = value;
    },
    setDeviceList(value) {
        this.deviceList = value;
    },
    setFdList(value) {
        this.fdList = value;
    },
    addFdList(value) {
        this.fdList.push(...value);
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
    setSelectedDeviceIndex(value) {
        this.selectedDeviceIndex = value;
    },
    setSelectedProcessIndex(value) {
        this.selectedProcessIndex = value;
    },
    setSelectedProcessName(value) {
        this.selectedProcessName = value;
    },
};

export default observable(logMagician);
