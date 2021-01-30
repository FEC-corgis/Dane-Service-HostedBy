import axios from 'axios';

export const getHostedByData = async function (id) {
    const res = await axios.get(`http://localhost:5001/api/hostedby/${id}`);

    return res.data;
};
