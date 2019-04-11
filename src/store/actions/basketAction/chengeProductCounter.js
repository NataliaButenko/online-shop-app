export const INCREASE_COUNTER = 'increase_counter';

export const DECREASE_COUNTER = 'decrease_counter';

let func = (product) => {
  if(product.counter <= 0) {
    return 0
  } else {
    return product.counter - 1
  }
};

export const increaseCounter = (product) => {
  return {
    type: INCREASE_COUNTER,
    payload: { ...product, counter: product.counter + 1 }
  }
};

export const decreaseCounter = (product) => {
  return {
    type: DECREASE_COUNTER,
    payload: { ...product, counter: func(product) }
  }
};
