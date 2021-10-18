import { observable } from 'mobx';

const deviceTabs = {
    tabs: [],
    activeTab: 0,
    getActiveTab() {
        return this.activeTab;
    },
    setActiveTab(idx) {
        this.activeTab = idx;
    },
    openTab(tab) {
        if (this.tabs.length > 6) {
            alert('Too many tabs');
            return;
        }
        this.tabs.push(tab);
    },
    closeTab(idx) {
        this.tabs.splice(idx, 1);
    },
};

export default observable(deviceTabs);
