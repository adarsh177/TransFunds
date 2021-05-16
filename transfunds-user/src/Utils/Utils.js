const axios = require('axios').default;

module.exports = {
    getNGODetail: (id, cb) => {
        axios({
            method: 'get',
            url: `http://localhost:2020/NGODetail?id=${id}`
        }).then(
            details => {
                console.log('details', details);
                cb(null, details.data.details);
            }
        ).catch(err => {
            console.log('Error getting details', err);
            cb(err, null);
        });
    }
};