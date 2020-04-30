import React from 'react'
import {
  TextField, Card, CardTitle, CardText
} from 'react-md'

export default function CargoInfo({cargo}) {
  if (!cargo.id) return null

  return (
    <Card className="card-station">
      <CardTitle title="Selected Station" />
      <CardText>
        <TextField id="name" label="Name" readOnly value="test" />
      </CardText>
    </Card>
  )
}
