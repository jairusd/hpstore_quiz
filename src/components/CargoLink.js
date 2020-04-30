import React from 'react'
import {Link} from 'react-router-dom'

export default function CargoLink({cargo}) {
  return (
    <div className="cargo-link">
      <Link to={`/cargoes/${cargo.id}`}>
        {cargo.name}
      </Link>
    </div>
  )
}
