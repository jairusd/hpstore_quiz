import _ from 'lodash'
import React, {useState} from 'react'
import {
  Autocomplete, CircularProgress, FontIcon, Button,
} from 'react-md'
import {FetchCargoes} from 'store/actions/cargo'
import {useDispatch, useSelector} from 'react-redux'
import {useDebounce, useDidUpdate} from 'hooks/utils'

export default function Search({onSelectCargo}) {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 1000)

  const dispatch = useDispatch()
  const cargoes = useSelector(state => state.cargo.cargoes)
  const fetching = useSelector(state => state.cargo.fetching)

  const doFindStation = () => {
    dispatch(FetchCargoes(debouncedSearch))
  }

  const doChange = val => {
    setSearch(val)
  }

  const doKeypress = (e) => {
    if (e.key === 'Enter') doFindStation(debouncedSearch)
  }

  const doAutoComplete = (index, matches, suggestion) => {
    onSelectCargo(suggestion[matches])
  }

  const formatData = data => {
    if (data.length) return data.map(e => ({...e, dataLabel: `${e.name} [${e.id}]`}))
    if (fetching) return []
    return [{dataLabel: 'No Result Found'}]
  }

  useDidUpdate(() => {
    if (!_.isNil(debouncedSearch)) doFindStation(debouncedSearch)
  }, [debouncedSearch])

  return (
    <Autocomplete
      id="search"
      label="Search Cargo"
      placeholder="Find a Cargo"
      value={search}
      data={formatData(cargoes)}
      onChange={doChange}
      onAutocomplete={doAutoComplete}
      onKeyPress={doKeypress}
      dataLabel="dataLabel"
      leftIcon={fetching ? <CircularProgress id="fetch sations" /> : <FontIcon>search</FontIcon>}
      inlineIndicator={search && (
        <Button icon className="clear-search" onClick={() => setSearch('')}>
          clear
        </Button>
      )}
    />
  )
}
