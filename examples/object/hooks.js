const verifyStock = (context) => {

  if (context.self.stock - context.params.quantity < 0) {
    throw new Error('The stock is not enought!');
  }
  return context;
};

const decrementStock = (context) => {
  context.self.stock -= context.params.quantity;
  return context;
};

export const before = {
  buy: [verifyStock]
};

export const after = {
  buy: [decrementStock]
};