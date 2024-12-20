const axios = require('axios');

let cachedToken = null;
let tokenExpiryTime = null;

const getToken = async () => {
    if (cachedToken && tokenExpiryTime && Date.now() < tokenExpiryTime) {
        return cachedToken;
    }

    try {
        const response = await axios.post(process.env.BKASH_GRANT_TOKEN_URL, {
            app_key: process.env.BKASH_API_KEY,
            app_secret: process.env.BKASH_SECRET_KEY,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                username: process.env.BKASH_USERNAME,
                password: process.env.BKASH_PASSWORD,
            },
        });

        cachedToken = response.data.id_token;
        tokenExpiryTime = Date.now() + response.data.expires_in * 1000;

        return cachedToken;
    } catch (error) {
        throw new Error('Error fetching token: ' + error.message);
    }
};

module.exports = { getToken };
