import { observable } from 'mobx';

const magician = {
    isOpen: false,
    selectedList: [],
    activeTab: 0,
    sectionIndexList: [false, false, false, false],
    isSubmitted: false,
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
};

export default observable(magician);
