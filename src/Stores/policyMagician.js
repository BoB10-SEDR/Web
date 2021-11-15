import { observable } from 'mobx';

const magician = {
    isOpen: false,
    selectedPolicies: [],
    activeTab: 0,
    setActiveTab(value) {
        this.activeTab = value;
    },
    setIsOpen(value) {
        this.isOpen = value;
    },
    setSelectedPolicies(value = []) {
        this.selectedPolicies = value;
    },
};

export default observable(magician);
