import { exampleSchema, sparklineSchema, solutionsSchema } from './schema';

const getSchemaData = (type = '') => {
    if (!type) return [];

    switch (type.toLowerCase()) {
        case 'example':
            return exampleSchema;
        case 'sparkline':
            return sparklineSchema;
        case 'solutions':
            return solutionsSchema;
        default:
            return exampleSchema;
    }
};

export default getSchemaData;
