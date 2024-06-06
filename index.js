// import express from 'express';
// import dotenv from'dotenv';
// import cors from 'cors';
// import PayOS from "@payos/node";
// dotenv.config();

// const payOS = new PayOS(process.env.PAYOS_CLIENT_ID, process.env.PAYOS_API_KEY, process.env.PAYOS_CHECKSUM_KEY);

// const app = express();
// const PORT = process.env.PORT || 3030;
// dotenv.config();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));



// app.post('/create-payment-link', async (req, res) => {
//     const body = {
//         orderCode: Number(String(Date.now()).slice(-6)),
//         amount: 5000,
//         description: 'Thanh toan don hang',
//         returnUrl: `localhost/success.html`,
//         cancelUrl: `localhost/cancel.html`
//     };

//     try {
//         const paymentLinkResponse = await payOS.createPaymentLink(body);
//         res.redirect(paymentLinkResponse.checkoutUrl);  
//     } catch (error) {
//         console.error(error);
//         res.send('Something went error');
//     }
// });

// app.listen(PORT, function () {
//     console.log(`Server is listening on port ${PORT}`);
// });