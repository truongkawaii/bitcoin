import { call, put, takeLatest, all } from 'redux-saga/effects';
import { Actions, getDataCurrencySuccess, getValCurrencySuccess } from '../actions';
import TableService from '../../services/table.services';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    const user = yield call(TableService.list, action.payload);

    yield put({ type: Actions.GET_DATA_SUCCESS, payload: user });

  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }

}

function* fetchCurrency() {
  try {

    const list = yield call(TableService.listCurrency);
    yield put(getDataCurrencySuccess(list));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* fetchChangeValCurrency(action) {
  try {
    yield put(getValCurrencySuccess(action.payload));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* mySaga() {
  yield takeLatest(Actions.GET_DATA, fetchUser);
  yield takeLatest(Actions.GET_DATA_CURRENCY, fetchCurrency);
  yield takeLatest(Actions.GET_VAL_CURRENCY, fetchChangeValCurrency);

}

export default function* rootSaga() {
  yield all([mySaga()]);
}