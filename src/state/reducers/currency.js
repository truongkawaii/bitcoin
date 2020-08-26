
import { Actions } from '../actions';
const initialState = {
  data: null
};
const currency = (state = initialState, action) => {

  switch (action.type) {
    case Actions.SHOW_LOADER:
      return {
        ...state
      };

    case Actions.GET_DATA_CURRENCY_SUCCESS: {
      const { payload: data } = action;
      return {
        ...state,
        data
      };
    }

    case Actions.HIDE_LOADER:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default currency;
