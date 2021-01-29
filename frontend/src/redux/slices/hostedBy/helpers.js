import axios from 'axios';

export const getHostedByData = async function (id) {
    const { data } = await axios.get(`/api/hostedbyService/${id}`);
    console.log(data);
    return data;
};
