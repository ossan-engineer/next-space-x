import React from 'react'
import Link from 'next/link'
import Layout from 'components/Layout'
import { useQueryClient } from 'react-query'
import RocketItem from 'components/RocketItem'
import { Rocket } from 'types/types'

const ReadCache: React.FC = () => {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<Rocket[]>('rockets')
  return (
    <Layout title="read cache">
      <div>Read out cache data</div>
      <ul>
        {data?.map((rocket) => (
          <RocketItem key={rocket.id} rocket={rocket}></RocketItem>
        ))}
      </ul>
      <Link href="/" passHref>
        HOME
      </Link>
    </Layout>
  )
}

export default ReadCache
