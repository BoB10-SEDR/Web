import { observable } from 'mobx';

const deviceDetail = {
    tabs: [],
    openTab(tab) {
        this.tabs.push(tab);
        console.log(this.tabs.length);
    },
    closeTab(idx) {
        this.tabs.splice(idx, 1);
    },
};

export default observable(deviceDetail);
