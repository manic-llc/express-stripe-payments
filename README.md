# @wearemanic/express-stripe-payments

Plug and play Stripe payments for Express. 

## Installation

```zsh
npm install --save @wearemanic/express-stripe-payments
```

## Usage

```javascript
import express from 'express';
import StripePayments from '@wearemanic/express-stripe-payments'

const app = express()

StripePayments(app, {
  baseUrl: '/api/stripe',
  secretKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
})

app.listen(3000)
```