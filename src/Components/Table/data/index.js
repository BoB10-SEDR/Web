import {
    exampleSchema,
    sparklineSchema,
    solutionsSchema,
    simpleSolutionsSchema,
    deviceTableSchema,
    simpleDeviceSchema,
    eventViewerSchema,
    logMagicianSchema,
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
        case 'simplesolutions':
            return simpleSolutionsSchema;
        case 'devicetable':
            return deviceTableSchema;
        case 'simpledevice':
            return simpleDeviceSchema;
        case 'eventviewer':
            return eventViewerSchema;
        case 'logmagician':
            return logMagicianSchema;
        default:
            return exampleSchema;
    }
};

export default getSchemaData;
