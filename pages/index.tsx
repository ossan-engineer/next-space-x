import React from 'react'
import Link from 'next/link'
// import styled from 'styled-components'
// import { Button } from '@material-ui/core'

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
      <div>Fetching by useQuery</div>
      <ul>
        {data?.map((rocket) => (
          <RocketItem key={rocket.id} rocket={rocket}></RocketItem>
        ))}
      </ul>
      <Link href="/read-cache" passHref>
        READ CACHE
      </Link>
    </Layout>
  )
}

export default Home
