import { DECREMENT, DOUBLE, INCREMENT } from '../action/actionTypes';

export const INITIAL_STATE = { count: 0 };

export const reducer = (state, action) => {
    const { type } = action || {};

    if (!type) throw new Error('Action type must be defined');
    switch (type) {
        case INCREMENT:
            return { count: state.count + 1 };
        case DECREMENT:
            return { count: state.count - 1 };
        case DOUBLE:
            return { count: state.count * 2 };
        default:
            return state;
    }
}
   
