/* eslint-disable sort-keys */
import NotFound from 'components/NotFound'
import App from 'components/App'
import CargoInfo from 'components/CargoInfo'

const Routes = [
  {
    component: App,
    routes: [
      {path: '/cargoes/:id', component: CargoInfo},
      {path: '*', component: NotFound},
    ],
  },
]

export default Routes
