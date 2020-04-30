import React from 'react'
import {renderRoutes} from 'react-router-config'
import TopBar from 'components/TopBar'

export default function App({route, history}) {
  const doSelectCargo = ({id}) => {
    history.push(`/cargoes/${id}`)
  }

  return (
    <div>
      <TopBar onSelectCargo={doSelectCargo} />

      {renderRoutes(route.routes)}
    </div>
  )
}
