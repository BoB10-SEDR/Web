import { observable } from 'mobx';

const inspection = {
    isSubmitted: false,
    selectedInspections: [],
    ticketList: [],
    selectedTaskIndex: 0,
    activeTab: 0,
    setIsSubmitted(value) {
        this.isSubmitted = value;
    },
    setSelectedInspections(value) {
        this.selectedInspections = value;
    },
    setSelectedTaskIndex(value) {
        this.selectedTaskIndex = value;
    },
    setTicketList(value) {
        this.ticketList = value;
    },
    setActiveTab(index) {
        this.activeTab = index;
    },
};

export default observable(inspection);
