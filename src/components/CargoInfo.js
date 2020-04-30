import React, {useEffect, useState} from 'react'
import {
  Card, CardTitle, CardText, LinearProgress, TextField,
} from 'react-md'
import {useSelector, useDispatch} from 'react-redux'
import {FetchCargo, UpdateCargoForm} from 'store/actions/cargo'
import {calcCargoBays} from 'utils/core'

export default function CargoInfo({match}) {
  const dispatch = useDispatch()
  const cargo = useSelector(state => state.cargo.cargo)
  const fetching = useSelector(state => state.cargo.fetchingCargo)

  const {name, email, boxes} = cargo || {}

  const [form, setForm] = useState({boxes: ''})
  const [errors, setErrors] = useState({boxes: false})

  const doChange = (value, e) => {
    const formUpdate = {...form, [e.target.id]: value}

    setForm(formUpdate)
    setErrors({...errors, boxes: Number.isNaN(calcCargoBays(value))})

    dispatch(UpdateCargoForm(formUpdate))
  }

  useEffect(() => {
    const formUpdate = {...form, boxes}

    setForm(formUpdate)
    setErrors({...errors, boxes: Number.isNaN(calcCargoBays(form.boxes))})

    dispatch(UpdateCargoForm(formUpdate))
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
          value={Number.isNaN(calcCargoBays(form.boxes)) ? '' : calcCargoBays(form.boxes)}
          error={errors.boxes}
          errorText="Invalid cargo boxes value"
        />

        <TextField
          id="boxes"
          label="Cargo Boxes"
          placeholder="Cargo Boxes delimited by comma"
          value={form.boxes}
          onChange={doChange}
          error={errors.boxes}
          errorText="Invalid cargo boxes value"
        />
      </CardText>
    </Card>
  )
}
