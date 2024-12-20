const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    dbUrl: process.env.DB_URL,
    bkashUsername: process.env.BKASH_USERNAME,
    bkashPassword: process.env.BKASH_PASSWORD,
    bkashApiKey: process.env.BKASH_API_KEY,
    bkashSecretKey: process.env.BKASH_SECRET_KEY,
    bkashGrantTokenUrl: process.env.BKASH_GRANT_TOKEN_URL,
    bkashCreatePaymentUrl: process.env.BKASH_CREATE_PAYMENT_URL,
};
