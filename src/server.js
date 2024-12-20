const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const paymentRoutes = require('./routes/paymentRoutes')

dotenv.config() 

const app = express();

app.use(express.json());
app.use(cors())

app.get('/test', (req, res) => {
    res.json({ message: 'Payment route working!' });
});

app.use('/api', paymentRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
