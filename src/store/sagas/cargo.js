import {
  call, put, takeLatest, all,
} from 'redux-saga/effects'
import axios from 'utils/axios'
import {ActionStart, ActionError, ActionSuccess} from 'store/actions/action'
import {ResetCargoes} from 'store/actions/cargo'
import actionTypes from '../types'

const {
  FETCH_AUTOCOMPLETE_CARGOES,
  FETCH_CARGOES,
  REQUESTED,
} = actionTypes

const {REACT_APP_API} = process.env

function *FetchCargoes() {
  const config = {
    method: 'GET',
    url: `${REACT_APP_API}/cargoes`,
  }

  try {
    yield put(ActionStart(FETCH_CARGOES))
    const {payload} = yield call(axios, config, FETCH_CARGOES)

    yield all([
      put({payload, type: 'FETCH_CARGOES'}),
      put(ActionSuccess(FETCH_CARGOES, payload))
    ])
  } catch (error) {
    yield put(ActionError(FETCH_CARGOES, error))
    console.error('@error', error)
  }

  yield put(ResetCargoes())
}

function *FetchAutocompleteCargoes() {
  const config = {
    method: 'GET',
    url: `${REACT_APP_API}/cargoes`,
  }

  try {
    yield put(ActionStart(FETCH_AUTOCOMPLETE_CARGOES))
    const {payload} = yield call(axios, config, FETCH_AUTOCOMPLETE_CARGOES)

    yield all([
      put({payload, type: 'FETCH_AUTOCOMPLETE_CARGOES'}),
      put(ActionSuccess(FETCH_AUTOCOMPLETE_CARGOES, payload))
    ])
  } catch (error) {
    yield put(ActionError(FETCH_AUTOCOMPLETE_CARGOES, error))
    console.error('@error', error)
  }

  yield put(ResetCargoes())
}

export default function *() {
  // GET
  yield takeLatest(`${FETCH_CARGOES}__${REQUESTED}`, FetchCargoes)
  yield takeLatest(`${FETCH_AUTOCOMPLETE_CARGOES}__${REQUESTED}`, FetchAutocompleteCargoes)
}
