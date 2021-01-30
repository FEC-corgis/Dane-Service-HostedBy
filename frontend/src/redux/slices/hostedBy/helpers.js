import axios from 'axios';

export const getHostedByData = async function (id) {
    const res = await axios.get(`/api/hostedbyService/${id}`);

    return res.data;
};
