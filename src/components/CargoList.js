import React from 'react'
import {useSelector} from 'react-redux'

export default function CargoList() {
  const cargoes = useSelector(state => state.cargo.cargoes)

  return (
    <div>
      {cargoes.map(cargo => <div>{cargo.name}</div>)}
    </div>
  )
}
