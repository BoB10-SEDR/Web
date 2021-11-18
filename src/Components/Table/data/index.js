import { exampleSchema, sparklineSchema, solutionsSchema, deviceTableSchema } from './schema';

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
        default:
            return exampleSchema;
    }
};

export default getSchemaData;
