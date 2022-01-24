import { all } from 'redux-saga/effects'
import user from './saga'

export default function* rootSaga() {
  yield all([
    user(),
  ])
}