import { observable } from 'mobx';

const magician = {
    isOpen: false,
    selectedPolicies: [],
    activeTab: 0,
    sectionIndexList: [false, false, false, false],
    setActiveTab(value) {
        this.activeTab = value;
    },
    setIsOpen(value) {
        this.isOpen = value;
    },
    setSelectedPolicies(value = []) {
        this.selectedPolicies = value;
    },
    setSectionIndexList(index, value) {
        this.sectionIndexList[index] = value;
        const nextIndex = index + 1;
        if (this.sectionIndexList.length <= nextIndex) return;

        for (let i = nextIndex; i < this.sectionIndexList.length; i++) {
            this.sectionIndexList[i] = false;
        }

        console.log(this.sectionIndexList);
    },
};

export default observable(magician);
