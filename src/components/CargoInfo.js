import React, {useEffect} from 'react'
import {
  Card, CardTitle, CardText, LinearProgress,
} from 'react-md'
import {useSelector, useDispatch} from 'react-redux'
import {FetchCargo} from 'store/actions/cargo'

export default function CargoInfo({match}) {
  const dispatch = useDispatch()
  const cargo = useSelector(state => state.cargo.cargo)
  const fetching = useSelector(state => state.cargo.fetchingCargo)

  useEffect(() => {
    dispatch(FetchCargo(match.params.id))
  }, [match.params.id])

  if (fetching) {
    return <LinearProgress />
  }

  if (!cargo) return null
  const {name, email} = cargo

  return (
    <Card className="card-station">
      <CardTitle title={name} />
      <CardText>
        <p>{email}</p>
        <p>Number of required cargo bays: 1</p>
        <p>Cargo Boxes</p>
      </CardText>
    </Card>
  )
}
