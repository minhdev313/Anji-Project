import PayOS from "@payos/node";
import dotenv from "dotenv";
dotenv.config();

const payOS = new PayOS(process.env.PAYOS_CLIENT_ID, process.env.PAYOS_API_KEY, process.env.PAYOS_CHECKSUM_KEY);

export const payOs = async function (req, res) {
  console.log("payment handler");
  const webhookData = payOS.verifyPaymentWebhookData(req.body);

  if (
    ["Ma giao dich thu nghiem", "VQRIO123"].includes(webhookData.description)
  ) {
    return res.json({
      error: 0,
      message: "Ok",
      data: webhookData
    });
  }

  // Source code uses webhook data

  return res.json({
    error: 0,
    message: "Ok",
    data: webhookData
  });
};
export const createPayment =  async (req, res) => {
  const body = {
      orderCode: Number(String(Date.now()).slice(-6)),
      amount: 25000,
      description: 'Nang cap Premium',
      returnUrl: `http://localhost:3000/api/payment/create-payment`,
      cancelUrl: `http://localhost:3000/api/payment/create-payment`
  };
  try {
      const paymentLinkResponse = await payOS.createPaymentLink(body);
      res.redirect(paymentLinkResponse.checkoutUrl);  
  } catch (error) {
      console.error(error);
      res.send('Something went error');
  }
};

