import { exampleSchema, sparklineSchema } from './schema';

const getSchemaData = (type = '') => {
    if (!type) return [];

    switch (type.toLowerCase()) {
        case 'example':
            return exampleSchema;
        case 'sparkline':
            return sparklineSchema;
        default:
            return exampleSchema;
    }
};

export default getSchemaData;
