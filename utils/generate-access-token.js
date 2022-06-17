const crypto = require('crypto');
const axios = require('axios');
const qs = require('qs');

require('dotenv').config();


async function generateAccessToken(data) {
    data.checksum = crypto.createHash('sha256').update(data.checksum).digest('hex');

    data = qs.stringify(data);
    console.log(data);
    const config = {
        method: 'POST',
        url: 'https://api.kite.trade/session/token',
        headers: { 
            'X-Kite-Version': '3', 
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
    } ;
    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data,null,2));
    })
    .catch(function (error) {
        console.log(error);
    });

}

module.exports = {generateAccessToken};