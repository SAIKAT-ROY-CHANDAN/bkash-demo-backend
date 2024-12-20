const { createPayment } = require('../services/paymentService');

const createPaymentController = async (req, res) => {
    try {
        const { productId, productName, price } = req.body;
        if (!productId || !productName || !price) {
            return res.status(400).json({ message: 'Missing required fields.' });
        }
        const paymentResponse = await createPayment(productId, productName, price);
        return res.status(200).json(paymentResponse);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { createPaymentController };
