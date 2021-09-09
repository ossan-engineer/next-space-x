import React from 'react'
import Link from 'next/link'
// import styled from 'styled-components'
import { Typography, Container, Button } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import Layout from 'components/Layout'
import { useQueryRockets } from 'hooks/useQueryRockets'
import RocketItem from 'components/RocketItem'

const Home: React.FC = () => {
  const { status, data } = useQueryRockets()

  if (status === 'loading') {
    return <Layout title="home">Loading...</Layout>
  }

  if (status === 'error') {
    return <Layout title="home">Error</Layout>
  }

  return (
    <Layout title="home">
      <Container>
        <Typography variant="h6" style={{ margin: '16px 0' }}>
          Fetching by useQuery
        </Typography>
        {data?.map((rocket) => (
          <RocketItem
            key={rocket.id}
            rocket={rocket}
            style={{ marginBottom: 16 }}
          ></RocketItem>
        ))}

        <Link href="/read-cache" passHref>
          <Button startIcon={<ChevronRightIcon></ChevronRightIcon>}>
            READ CACHE
          </Button>
        </Link>
      </Container>
    </Layout>
  )
}

export default Home
