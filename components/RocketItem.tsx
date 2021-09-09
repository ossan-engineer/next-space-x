import React from 'react'
import { Rocket } from 'types/types'

type Props = {
  rocket: Rocket
}

const RocketItem: React.FC<Props> = ({ rocket }) => {
  return (
    <li key={rocket.id}>
      <div>{rocket.name}</div>
      <div>
        {'-> '}
        {rocket.mass.kg}
        {'[kg]'}
        {rocket.height.meters}
        {'[m]'}
        {rocket.diameter.meters}
        {'[m]'}
      </div>
    </li>
  )
}

export default RocketItem
