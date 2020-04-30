import axios from 'axios'
import actionTypes from 'store/types'

const {
  ERROR,
  ERROR_401,
} = actionTypes

export default (config, type, target) => {
  if (type) {
    return axios(config)
      .then((result) => {
        if (result.status >= 400) {
          result.data.status = result.status // eslint-disable-line

          return {
            payload: result.data,
            type: result.status === 401 ? ERROR_401 : ERROR,
          }
        }

        return {payload: result.data, type}
      })
  }
  return axios(config)
}
