import React from 'react';
import GooglePayButton from '@google-pay/button-react';
import { toastFailed } from '../common/toast';

const GooglePayUpi = () => {
  return (
    <GooglePayButton
      environment="TEST"
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['MASTERCARD', 'VISA'],
            },
            tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                gateway: 'example',
                gatewayMerchantId: 'exampleGatewayMerchantId',
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: 'BCR2DN4T6G2LHXIM',
          merchantName: 'learning',
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPriceLabel: 'Total',
          totalPrice: '1.00',
          currencyCode: 'INR',
          countryCode: 'IN',
        },
      }}
      onLoadPaymentData={(paymentData) => {
        console.log('load payment data', paymentData);
      }}
      onCancel={() => {
        return toastFailed('Payment Cancelled');
      }}
      onError={(error) => {
        if (error instanceof Error) {
          console.error('Error', error, error.message, error.stack);
        } else {
          console.error('Error', error.statusCode, error.statusMessage);
        }
      }}
    />
  );
};

export default GooglePayUpi;
