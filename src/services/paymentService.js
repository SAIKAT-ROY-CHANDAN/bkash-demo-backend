const axios = require('axios');
const { getToken } = require('../utils/tokenManager');

const createPayment = async (productId, productName, price) => {
    try {
        const token = await getToken();

        const response = await axios.post(
            process.env.BKASH_CREATE_PAYMENT_URL,
            {
                mode: "0011",
                payerReference: "valid_payer_reference",
                callbackURL: "https://your-callback-url.com/",
                merchantAssociationInfo: "MI05MID54RF09123456One",
                amount: `${price}`,
                currency: "BDT",
                intent: "sale",
                merchantInvoiceNumber: "Inv-1734675169109"
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`,
                    "X-App-Key": process.env.BKASH_API_KEY
                }
            }
        );

        console.dir(response, {statusbar: null})
        return response.data;
    } catch (error) {
        console.log(error)
        throw new Error('Error creating payment: ' + error.message);
    }
};

module.exports = { createPayment };
