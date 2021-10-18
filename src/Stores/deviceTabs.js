import { observable } from 'mobx';

const deviceTabs = {
    tabs: [],
    activeTab: 0,
    getActiveTab() {
        return this.activeTab;
    },
    setActiveTab(idx) {
        if (this.tabs.length - 1 < idx) return;
        this.activeTab = idx;
        console.log(idx);
    },
    openTab(tab) {
        if (6 < this.tabs.length) {
            alert('Too many tabs');
            return;
        }
        this.tabs.push(tab);
    },
    closeTab(idx) {
        if (idx <= this.activeTab) this.setActiveTab(this.activeTab === 0 ? 0 : this.activeTab - 1);
        this.tabs.splice(idx, 1);
    },
};

export default observable(deviceTabs);
