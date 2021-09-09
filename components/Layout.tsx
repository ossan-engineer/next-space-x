import React from 'react'
import Head from 'next/head'
import Imnage from 'next/image'

type Props = {
  title: string
}

const Layout: React.FC<Props> = ({
  title = 'Welcome to Next.js',
  children
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>HEADER</header>
      <main>{children}</main>
      <footer>FOOTER</footer>
    </div>
  )
}

export default Layout
