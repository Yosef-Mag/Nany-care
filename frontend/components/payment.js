// import React, { Component } from 'react';
// import { WebView, Platform, View, ViewPropTypes } from 'react-native';
// import { PropTypes } from 'prop-types';
// import { PaymentsStripe as Stripe } from 'expo-payments-stripe';

// // Stripe.setOptionsAsync({
// //   publishableKey: 'pk_test_51H6yuOIerYxcshQSFtCn0MUyus4WtwKR8UWmBFXp4Qam7Galc9DlO6n5MilK33VNqtlQLMH3EYY2zZDtiZ6hbvea000rqec5fF', // Your key
// //   androidPayMode: 'test', // [optional] used to set wallet environment (AndroidPay)
// //   merchantId: 'your_merchant_id', // [optional] used for payments with ApplePay
// // });

// // const params = {
// //   // mandatory
// //   number: '4242424242424242',
// //   expMonth: 11,
// //   expYear: 17,
// //   cvc: '223',
// //   // optional
// //   name: 'Test User',
// //   currency: 'usd',
// //   addressLine1: '123 Test Street',
// //   addressLine2: 'Apt. 5',
// //   addressCity: 'Test City',
// //   addressState: 'Test State',
// //   addressCountry: 'Test Country',
// //   addressZip: '55555',
// // };

// // const token = await Stripe.createTokenWithCardAsync(params);

// class StripeCheckout extends Component {
//   render() {
//     const {
//       publicKey,
//       amount,
//       allowRememberMe,
//       currency,
//       description,
//       imageUrl,
//       storeName,
//       prepopulatedEmail,
//       style,
//       onPaymentSuccess,
//       onClose
//     } = this.props;
//     const jsCode = `(function() {
//                     var originalPostMessage = window.postMessage;
//                     var patchedPostMessage = function(message, targetOrigin, transfer) {
//                       originalPostMessage(message, targetOrigin, transfer);
//                     };
//                     patchedPostMessage.toString = function() {
//                       return String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage');
//                     };
//                     window.postMessage = patchedPostMessage;
//                   })();`;
//     return (
//       <WebView
//         javaScriptEnabled={true}
//         scrollEnabled={false}
//         bounces={false}
//         injectedJavaScript={jsCode}
//         source={{ html: `<script src="https://checkout.stripe.com/checkout.js"></script>
//             <script>
//             var handler = StripeCheckout.configure({
//               key: '${publicKey}',
//               image: '${imageUrl}',
//               locale: 'auto',
//               token: function(token) {
//                 window.postMessage(token.id, token.id);
//               },
//             });
//             window.onload = function() {
//               handler.open({
//                 image: '${imageUrl}',
//                 name: '${storeName}',
//                 description: '${description}',
//                 amount: ${amount},
//                 currency: '${currency}',
//                 allowRememberMe: ${allowRememberMe},
//                 email: '${prepopulatedEmail}',
//                 closed: function() {
//                   window.postMessage("WINDOW_CLOSED", "*");
//                 }
//               });
//             };
//             </script>`, baseUrl: ''}}
//         onMessage={event => event.nativeEvent.data === 'WINDOW_CLOSED' ? onClose() : onPaymentSuccess(event.nativeEvent.data)}
//         style={[{ flex: 1 }, style]}
//         scalesPageToFit={Platform.OS === 'android'}
//       />
//     );
//   }
// }
// StripeCheckout.propTypes = {
//   publicKey: PropTypes.string.isRequired,
//   amount: PropTypes.number.isRequired,
//   imageUrl: PropTypes.string.isRequired,
//   storeName: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   allowRememberMe: PropTypes.bool.isRequired,
//   onPaymentSuccess: PropTypes.func.isRequired,
//   onClose: PropTypes.func.isRequired,
//   currency: PropTypes.string,
//   prepopulatedEmail: PropTypes.string,
//   style: ViewPropTypes.object
// };

// StripeCheckout.defaultProps = {
//   prepopulatedEmail: '',
//   currency: 'USD',
// };
// export default StripeCheckout;
