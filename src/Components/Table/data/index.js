import { exampleSchema } from './schema';

const getSchemaData = (type = '') => {
    if (!type) return [];

    switch (type.toLowerCase) {
        case 'example':
            return exampleSchema;
        default:
            return exampleSchema;
    }
};

export default getSchemaData;
