import React, {useEffect, useState} from 'react'
import {
  Card, CardTitle, CardText, LinearProgress, TextField,
} from 'react-md'
import {useSelector, useDispatch} from 'react-redux'
import {FetchCargo} from 'store/actions/cargo'
import {calcCargoBays} from 'utils/core'

export default function CargoInfo({match}) {
  const dispatch = useDispatch()
  const cargo = useSelector(state => state.cargo.cargo)
  const fetching = useSelector(state => state.cargo.fetchingCargo)

  const {name, email, boxes} = cargo || {}

  const [form, setForm] = useState({boxes: ''})

  const doChange = (value, e) => {
    setForm({
      ...form,
      [e.target.id]: value,
    })
  }

  useEffect(() => {
    setForm({...form, boxes})
  }, [cargo?.id])

  useEffect(() => {
    dispatch(FetchCargo(match.params.id))
  }, [match.params.id])

  if (fetching) {
    return <LinearProgress id="cargo info" />
  }

  if (!cargo) return null

  return (
    <Card className="card-station">
      <CardTitle title={name} subtitle={email} />
      <CardText>
        <TextField
          id="bays"
          label="Number of required cargo bays"
          placeholder="Number of required cargo bays"
          value={isNaN(calcCargoBays(form.boxes)) ? 'Invalid cargo boxes value' : calcCargoBays(form.boxes)}
        />

        <TextField
          id="boxes"
          label="Cargo Boxes"
          placeholder="Cargo Boxes delimited by comma"
          value={form.boxes}
          onChange={doChange}
        />
      </CardText>
    </Card>
  )
}
