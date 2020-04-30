import React from 'react'
import {useSelector} from 'react-redux'
import {LinearProgress} from 'react-md'
import CargoLink from 'components/CargoLink'

export default function CargoList() {
  const cargoes = useSelector(state => state.cargo.cargoes)
  const fetching = useSelector(state => state.cargo.fetchingCargoes)

  if (fetching) {
    return <LinearProgress id="cargo list" />
  }

  if (!cargoes.length) {
    return (
      <div>
        <p>No Data Found</p>
        <p><small>Click the load button to fetch cargo list</small></p>
      </div>
    )
  }

  return (
    <div>
      {cargoes.map(cargo => <CargoLink key={cargo.id} cargo={cargo} />)}
    </div>
  )
}
