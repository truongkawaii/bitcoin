import { combineReducers } from 'redux';
import dataCurrencyReducer from './data-currency';
import CurrencyReducer from './currency';
import valCurrencyReducer from './val-currency';

// Combine reducer
const rootReducer = combineReducers({
    currency: CurrencyReducer,
    dataCurrency: dataCurrencyReducer,
    valCurrency: valCurrencyReducer
});

export default rootReducer; 