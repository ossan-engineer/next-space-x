import React from 'react'
import { Rocket } from 'types/types'
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button
} from '@material-ui/core'

type Props = {
  rocket: Rocket
  style?: React.CSSProperties
}

const RocketItem: React.FC<Props> = ({ rocket, style }) => {
  return (
    <Card key={rocket.id} style={style}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {rocket.id}
        </Typography>
        <Typography variant="h5" component="h2">
          {rocket.name}
        </Typography>
        <Typography color="textSecondary" style={{ marginBottom: 12 }}>
          {rocket.mass.kg}
          {' kg / '}
          {rocket.height.meters}
          {' m / '}
          {rocket.diameter.meters}
          {' m'}
        </Typography>
        <Typography variant="body2" component="p">
          {rocket.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={rocket.wikipedia} target="_blank">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default RocketItem
