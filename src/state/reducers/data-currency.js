
import { Actions } from '../actions';
const initialState = {
  data: null,
  loading: false
};

const dataCurrency = (state = initialState, action) => {

  switch (action.type) {
    case Actions.GET_DATA_SUCCESS: {
      const { payload: data } = action;
      return {
        ...state,
        data,
        loading: false
      };
    }
    default:
      return state;
  }


};

export default dataCurrency;
