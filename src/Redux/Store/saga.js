import { put, takeEvery, all } from 'redux-saga/effects'
import helloSaga from '../Saga/sagas'
import {watchIncrementAsync} from '../Page3/saga'

export default function* rootSaga() {
    yield all([
      helloSaga(),
      watchIncrementAsync()
    ])
}