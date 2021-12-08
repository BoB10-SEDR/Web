import { observable } from 'mobx';

const inspection = {
    isSubmitted: false,
    selectedInspections: [],
    setIsSubmitted(value) {
        this.isSubmitted = value;
    },
    setSelectedInspections(value) {
        this.selectedInspections = value;
    },
};

export default observable(inspection);
