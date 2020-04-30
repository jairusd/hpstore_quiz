import {
  call, put, takeLatest, all,
} from 'redux-saga/effects'
import axios from 'utils/axios'
import {ActionStart, ActionError, ActionSuccess} from 'store/actions/action'
import {ResetCargoes} from 'store/actions/cargo'
import actionTypes from '../types'

const {
  FETCH_SOURCES,
  REQUESTED,
} = actionTypes

const baseParams = {
  country: 'NO',
  municipality: 'HALDEN',
  types: 'SensorSystem',
}

const {REACT_APP_API_USERNAME} = process.env

function *FetchSources({payload}) {
  const params = payload ? {...baseParams, name: payload} : baseParams

  const config = {
    auth: {
      username: REACT_APP_API_USERNAME,
    },
    method: 'GET',
    params,
    url: '/sources/v0.jsonld',
  }

  try {
    yield put(ActionStart(FETCH_SOURCES))
    const {payload: {data}} = yield call(axios, config, FETCH_SOURCES)

    yield all([
      put({payload: data, type: 'FETCH_SOURCES'}),
      put(ActionSuccess(FETCH_SOURCES, data))
    ])
  } catch (error) {
    yield put(ActionError(FETCH_SOURCES, error))
    console.error('@error', error)
  }

  yield put(ResetCargoes())
}

export default function *() {
  // GET
  yield takeLatest(`${FETCH_SOURCES}__${REQUESTED}`, FetchSources)
}
