import React from 'react'
import {renderRoutes} from 'react-router-config'
import TopBar from 'components/TopBar'
import CargoList from 'components/CargoList'

export default function App({route, history}) {
  return (
    <div>
      <TopBar history={history} />

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
