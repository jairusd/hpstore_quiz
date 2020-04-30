import React from 'react'
import {renderRoutes} from 'react-router-config'
import {useSelector} from 'react-redux'
import TopBar from 'components/TopBar'
import CargoList from 'components/CargoList'
import Toasts from 'components/Toasts'

export default function App({route, history}) {
  const toast = useSelector(state => state.toast.toast)

  return (
    <div>
      <Toasts toast={toast} autoDismiss />

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
