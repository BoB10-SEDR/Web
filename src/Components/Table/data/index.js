import {
    exampleSchema,
    sparklineSchema,
    solutionsSchema,
    deviceTableSchema,
    simpleDeviceSchema,
    eventViewerSchema,
} from './schema';

const getSchemaData = (type = '') => {
    if (!type) return [];

    switch (type.toLowerCase()) {
        case 'example':
            return exampleSchema;
        case 'sparkline':
            return sparklineSchema;
        case 'solutions':
            return solutionsSchema;
        case 'devicetable':
            return deviceTableSchema;
        case 'simpledevice':
            return simpleDeviceSchema;
        case 'eventviewer':
            return eventViewerSchema;
        default:
            return exampleSchema;
    }
};

export default getSchemaData;
