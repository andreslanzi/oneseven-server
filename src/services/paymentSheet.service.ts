import { Injectable } from '@nestjs/common';
import { CreatePaymentIntentDto } from 'src/dtos/createPaymentIntentDto';

@Injectable()
export class PaymentSheetService {
  async postPaymentSheet(paymentIntentDto: CreatePaymentIntentDto) {
    const { amount } = paymentIntentDto;
    const stripe = require('stripe')(
      'sk_test_51NE1X5AdurOGssyHqhgbwGD5DwGyeByxpN5gcwnT7lLfFRl8gOXY5UuH7vDR0M9IuEjFkGxth01N3FlkUWDvgwMY00iUUrZHxO',
    );
    const customer = await stripe.customers.create();

    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customer.id },
      { apiVersion: '2022-11-15' },
    );

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      customer: customer.id,
    });

    return {
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
      publishableKey:
        'pk_test_51NE1X5AdurOGssyHj83AvYTwx4YNrrU4ZxaQl4l62135xD4jsLpWdMkspcjmXzX28e3WT3IDfisshziMR5kYyhVX00lVLvqJDh',
    };
  }
}
