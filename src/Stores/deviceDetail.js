import { observable } from 'mobx';

const deviceDetail = {
    openedTabList: [],
    openTab(tabName) {
        this.openedTabList.push(tabName);
    },
    closeTab(idx) {
        this.openedTabList.splice(idx, 1);
    },
};

export default observable(deviceDetail);
