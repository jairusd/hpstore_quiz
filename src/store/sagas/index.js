import {all} from 'redux-saga/effects'
import cargo from './cargo'

export default function *root() {
  yield all([
    cargo(),
  ])
}
