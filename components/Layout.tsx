import React from 'react'
import Head from 'next/head'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import styled from 'styled-components'

type Props = {
  title: string
}

const Layout: React.FC<Props> = ({
  title = 'Welcome to Next.js',
  children
}) => {
  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
      </Head>
      <AppBar position="static" style={{ alignItems: 'center' }}>
        <Toolbar>
          <Typography variant="h6">SpaceX Rockets</Typography>
        </Toolbar>
      </AppBar>
      <main>{children}</main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 16px 0;
`

export default Layout
