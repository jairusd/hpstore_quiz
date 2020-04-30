import React, {useState} from 'react'
import Search from 'components/Search'
import CargoInfo from 'components/CargoInfo'

export default function App() {
  const [cargo, setCargo] = useState({id: 1})

  const doSelectStation = selected => {
    setCargo(selected)
  }

  return (
    <div>
      <Search onSelectStation={doSelectStation} />
      <CargoInfo cargo={cargo} key={cargo.id} />
    </div>
  )
}
