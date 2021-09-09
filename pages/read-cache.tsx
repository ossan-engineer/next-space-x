import React from 'react'
import Link from 'next/link'
import Layout from 'components/Layout'
import { useQueryClient } from 'react-query'
import { Typography, Container, Button } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import RocketItem from 'components/RocketItem'
import { Rocket } from 'types/types'

const ReadCache: React.FC = () => {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<Rocket[]>('rockets')
  return (
    <Layout title="read cache">
      <Container>
        <Typography variant="h6" style={{ margin: '16px 0' }}>
          Read out cache data
        </Typography>
        {data?.map((rocket) => (
          <RocketItem
            key={rocket.id}
            rocket={rocket}
            style={{ marginBottom: 16 }}
          ></RocketItem>
        ))}
        <Link href="/" passHref>
          <Button startIcon={<ChevronRightIcon />}>HOME</Button>
        </Link>
      </Container>
    </Layout>
  )
}

export default ReadCache
