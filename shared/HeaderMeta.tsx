import Head from 'next/head'
import React from 'react'

interface I_HeaderMeta {
  pageTitle: string
}

const HeaderMeta = ({pageTitle}: I_HeaderMeta) => {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>{pageTitle}</title>
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='meta/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='meta/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='meta/favicon-16x16.png'
      />
      <link rel='manifest' href='meta/site.webmanifest' />
      <link rel='mask-icon' href='meta/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  )
}

export default HeaderMeta
