import { put, takeEvery, call,takeLatest } from 'redux-saga/effects'
import * as ACTION from "./actions";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* incrementAsync(value) {
  yield call(delay, 1000); 
  yield put({ type: ACTION.INCREMENT_VALUE,
              value:    value.value            })
}

export function* watchIncrementAsync() {
   yield takeEvery(ACTION.INCREMENT_ASYNC, incrementAsync)
}