import Stripe from 'stripe';

export default (app, config = {}) => {
  const { secretKey, apiVersion, baseUrl } = {
    apiVersion: '2023-10-16',
    baseUrl: '/api/stripe',
    ...config,
  };

  const stripe = Stripe(secretKey, { apiVersion });

  app.get(`${baseUrl}/payment-intent/:amount`, async (req, res) => {
    try {
      const { amount } = req.params;
      const paymentIntent = await stripe.paymentIntents.create({
        currency: 'usd',
        amount,
        automatic_payment_methods: { enabled: true },
      });

      res.send({ success: true, secret: paymentIntent.client_secret });
    } catch (e) {
      console.log(e);
      res.status(500);
      res.send({ success: false, error: 'Could not create payment intent.' });
    }
  });
};
