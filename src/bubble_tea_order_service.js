const bubbleTeaMessenger = require('./bubble_tea_messenger');
const logMessage = require('./simple_logger');

const createOrderRequest = (bubbleTeaRequest) => {
  logMessage(`Creating an Order Request for the following` +
  ` Bubble Tea Request  ${JSON.stringify(bubbleTeaRequest)}`);

  const {
    paymentDetails: {
      name,
      address,
      debitCard: {digits},
    },
    bubbleTea: {type},
  } = bubbleTeaRequest;

  const orderRequest = {
    /* this is being picked up from the values in the
    anonymous object literal above it. */
    name,
    address,
    digits,
    type,
  };

  logMessage(`The following Bubble Tea Order Request ` +
  `has been created  ${JSON.stringify(orderRequest)}`);

  sendEmail(orderRequest);

  return orderRequest;
};

const sendEmail = (orderRequest) => {
  bubbleTeaMessenger.sendBubbleTeaOrderRequestEmail(orderRequest);
};

module.exports = {
  createOrderRequest,
};
