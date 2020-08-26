
import { Actions } from '../actions';
const initialState = {
    data: 'btc'
};

const valCurrency = (state = initialState, action) => {
    switch (action.type) {
        case Actions.GET_VAL_CURRENCY_SUCCESS: {
            const { payload: data } = action;
            return {
                ...state,
                data
            };
        }
        default:
            return state;
    }

};

export default valCurrency;
