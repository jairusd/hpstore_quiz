import {
  call, put, takeLatest, all,
} from 'redux-saga/effects'
import axios from 'utils/axios'
import {ActionStart, ActionError, ActionSuccess} from 'store/actions/action'
import {AddToast} from 'store/actions/toast'
import actionTypes from '../types'

const {
  FETCH_AUTOCOMPLETE_CARGOES,
  FETCH_CARGOES,
  FETCH_CARGO,
  REQUESTED,
  UPDATE_CARGO,
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
      put({payload, type: FETCH_CARGOES}),
      put(ActionSuccess(FETCH_CARGOES, payload))
    ])
    localStorage.setItem('cargoes', JSON.stringify(payload))
  } catch (error) {
    yield all([
      put(ActionError(FETCH_CARGOES, error)),
      put(AddToast({text: 'something went wrong', type: 'error'}))
    ])
    console.error('@error', error)
  }
}

function *FetchCargo({payload: id}) {
  const config = {
    method: 'GET',
    url: `${REACT_APP_API}/cargoes/${id}`,
  }

  try {
    yield put(ActionStart(FETCH_CARGO))
    const {payload} = yield call(axios, config, FETCH_CARGO)

    yield all([
      put({payload, type: FETCH_CARGO}),
      put(ActionSuccess(FETCH_CARGO, payload))
    ])
  } catch (error) {
    yield all([
      put(ActionError(FETCH_CARGO, error)),
      put(AddToast({text: 'something went wrong', type: 'error'}))
    ])
    console.error('@error', error)
  }
}

function *FetchAutocompleteCargoes({payload: keyword}) {
  const config = {
    method: 'GET',
    params: keyword && {name_like: keyword},
    url: `${REACT_APP_API}/cargoes`,
  }

  try {
    yield put(ActionStart(FETCH_AUTOCOMPLETE_CARGOES))
    const {payload} = yield call(axios, config, FETCH_AUTOCOMPLETE_CARGOES)

    yield all([
      put({payload, type: FETCH_AUTOCOMPLETE_CARGOES}),
      put(ActionSuccess(FETCH_AUTOCOMPLETE_CARGOES))
    ])
  } catch (error) {
    yield all([
      put(ActionError(FETCH_AUTOCOMPLETE_CARGOES)),
      put(AddToast({text: 'something went wrong', type: 'error'})),
    ])
    console.error('@error', error)
  }
}

function *UpdateCargo({payload: form}) {
  const config = {
    data: form,
    method: 'PUT',
    url: `${REACT_APP_API}/cargoes/${form.id}`,
  }

  try {
    yield put(ActionStart(UPDATE_CARGO))
    const {payload} = yield call(axios, config, UPDATE_CARGO)

    yield all([
      put({payload, type: UPDATE_CARGO}),
      put(ActionSuccess(UPDATE_CARGO)),
      put(AddToast({text: 'successfully updated', type: 'success'}))
    ])
  } catch (error) {
    yield all([
      put(ActionError(UPDATE_CARGO)),
      put(AddToast({text: 'something went wrong', type: 'error'})),
    ])
    console.error('@error', error)
  }
}

export default function *() {
  yield takeLatest(`${FETCH_AUTOCOMPLETE_CARGOES}__${REQUESTED}`, FetchAutocompleteCargoes)
  yield takeLatest(`${FETCH_CARGOES}__${REQUESTED}`, FetchCargoes)
  yield takeLatest(`${FETCH_CARGO}__${REQUESTED}`, FetchCargo)

  yield takeLatest(`${UPDATE_CARGO}__${REQUESTED}`, UpdateCargo)
}
