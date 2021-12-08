import { observable } from 'mobx';

const inspection = {
    isSubmitted: false,
    selectedInspections: [],
    selectedTask: 0,
    setIsSubmitted(value) {
        this.isSubmitted = value;
    },
    setSelectedInspections(value) {
        this.selectedInspections = value;
    },
    setSelectedTask(value) {
        this.selectedTask = value;
    },
};

export default observable(inspection);
