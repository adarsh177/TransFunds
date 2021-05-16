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
    },
    sendOtp: (regId, cb) => {
        axios({
            method: 'post',
            url: `http://localhost:2020/AddNGO_SendOTP`,
            data: JSON.stringify({ngoId: regId})
        }).then(
            details => {
                console.log('details', details);
                cb(details.body.v_id, details.body.email);
            }
        ).catch(err => {
            console.log('Error sending otp', err);
            cb(null, null);
        });
    },
    verifyOtp: (regId, otp, vid, wallet, cb) => {
        axios({
            method: 'post',
            url: `http://localhost:2020/AddNGO_VerifyOTP`,
            data: JSON.stringify({v_id: vid, otp: otp, ngoId: regId, wallet: wallet})
        }).then(
            details => {
                console.log('details', details);
                cb(true);
            }
        ).catch(err => {
            console.log('Error verifying otp', err);
            cb(false);
        });
    },
    getNGOId: (cb) => {
        window.contract.methods.getNGOIdFromAddress(window.accountId)
            .call({from: window.accountId})
            .then(rslt => {
                console.log(rslt);
                if(rslt[0] == false){
                    cb(null);
                }else{
                    cb(rslt[1]);
                }
            }).catch(err => {
                console.log('error getting id', err);
                cb(null);
            });
    },
    getTotalDonation: (cb) => {
        window.contract.methods.GetTotalDonationOfNGO(window.accountId)
            .call({from: window.accountId})
            .then(rslt => {
                console.log('total donation', rslt);
                cb(rslt);
            }).catch(err => {
                console.log('error getting td', err);
                cb(null);
            });
    },
    getAvailableDonation: (cb) => {
        window.contract.methods.GetAvailableDonationOfNGO()
            .call({from: window.accountId})
            .then(rslt => {
                console.log('ava donation', rslt);
                cb(rslt);
            }).catch(err => {
                console.log('error getting ad', err);
                cb(null);
            });
    }
};