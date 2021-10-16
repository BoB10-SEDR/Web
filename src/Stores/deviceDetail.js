import { observable } from 'mobx';

const deviceDetail = {
    tabs: [],
    openTab(tab) {
        if (this.tabs.length > 6) {
            alert('too many tabs');
            return;
        }
        this.tabs.push(tab);
    },
    closeTab(idx) {
        this.tabs.splice(idx, 1);
    },
};

export default observable(deviceDetail);
