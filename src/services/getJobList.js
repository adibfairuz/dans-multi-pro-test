import axios from 'axios';

const getJobList = async (params) => {
    const res = await axios.get('http://dev3.dansmultipro.co.id/api/recruitment/positions.json', {
        params,
    });
    return res.data;
};

export default getJobList;