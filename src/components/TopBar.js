import _ from 'lodash'
import React, {useState} from 'react'
import {
  Autocomplete, CircularProgress, FontIcon, Button,
} from 'react-md'
import {FetchAutocompleteCargoes, FetchCargoes, UpdateCargo} from 'store/actions/cargo'
import {useDispatch, useSelector} from 'react-redux'
import {useDebounce, useDidUpdate} from 'hooks/utils'

export default function TopBar({history}) {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 1000)

  const dispatch = useDispatch()
  const cargoes = useSelector(state => state.cargo.autocompleteCargoes)
  const fetching = useSelector(state => state.cargo.fetchingAutocompleteCargoes)
  const form = useSelector(state => state.cargo.cargoForm)

  const doSaveForm = () => {
    dispatch(UpdateCargo(form))
  }

  const doLoadCargoes = () => {
    dispatch(FetchCargoes())
  }

  const doFindCargo = () => {
    dispatch(FetchAutocompleteCargoes(debouncedSearch))
  }

  const doChange = val => {
    setSearch(val)
  }

  const doKeypress = (e) => {
    if (e.key === 'Enter') doFindCargo(debouncedSearch)
  }

  const doAutoComplete = (index, matches, suggestion) => {
    const selected = suggestion[matches]
    history.push(`/cargoes/${selected.id}`)
  }

  const formatData = data => {
    if (data.length) return data.map(e => ({...e, dataLabel: `${e.name} [${e.id}]`}))
    if (fetching) return []
    return [{dataLabel: 'No Result Found'}]
  }

  useDidUpdate(() => {
    if (!_.isNil(debouncedSearch)) doFindCargo(debouncedSearch)
  }, [debouncedSearch])

  return (
    <div className="search-bar">
      <h3 className="title">Cargo Planner</h3>

      <Autocomplete
        id="search"
        label="Search Cargo"
        placeholder="Find a Cargo by Name"
        value={search}
        data={formatData(cargoes)}
        onChange={doChange}
        onAutocomplete={doAutoComplete}
        onKeyPress={doKeypress}
        dataLabel="dataLabel"
        leftIcon={fetching ? <CircularProgress id="fetching cargoes" /> : <FontIcon>search</FontIcon>}
        inlineIndicator={search ? (
          <Button icon className="clear-search" onClick={() => setSearch('')}>
            clear
          </Button>
        ) : undefined}
      />

      <div className="controls-container">
        <Button flat primary className="btn-control" onClick={doLoadCargoes}>Load</Button>

        <Button flat secondary className="btn-control" onClick={doSaveForm}>Save</Button>
      </div>
    </div>
  )
}
