import axios from 'axios';

export const fetcher = async (url, ...args) => {
    const response = await axios.get(url, args);
    const { outputs, errors } = response.data;

    return outputs;
};

export const remover = (url, ...args) => {
    const deleteSomething = async () => {
        try {
            const reponse = await axios.delete(url, args);
        } catch (error) {
            alert('error');
        }
    };

    // eslint-disable-next-line no-restricted-globals
    const isConfirmed = confirm('정말 삭제하시겠습니까?');
    isConfirmed && deleteSomething();
};
