import { DECREMENT, DOUBLE, INCREMENT } from './actionTypes';

export const incrementCount = () => ({
  type: INCREMENT
});

export const deccrementCount = () => ({
  type: DECREMENT
});

export const doubleCount = () => ({
  type: DOUBLE
});
