import React from 'react'
import {renderRoutes} from 'react-router-config'
import TopBar from 'components/TopBar'
import CargoList from 'components/CargoList'

export default function App({route, history}) {
  const doSelectCargo = ({id}) => {
    history.push(`/cargoes/${id}`)
  }

  return (
    <div>
      <TopBar onSelectCargo={doSelectCargo} />

      <div className="main-partition">
        <div className="side-bar">
          <CargoList />
        </div>

        <div className="main-content">
          {renderRoutes(route.routes)}
        </div>
      </div>
    </div>
  )
}
