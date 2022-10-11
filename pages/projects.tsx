import React from 'react'
import GridLayout from '../modules/projects/GridLayout'
import ProjectsBanner from '../modules/projects/ProjectsBanner'
import HeaderMeta from '../shared/HeaderMeta'
import {sanityClient} from '../sanity'

const projects = (props: any) => {
  return (
    <>
      <HeaderMeta pageTitle='Projects | BN Square Architects' />
      <ProjectsBanner title='Great Projects' banner={props?.gallery[0]} />
      <GridLayout images={props?.gallery} />
    </>
  )
}

export default projects

export async function getStaticProps() {
  const galleryQuery = `*[_type == "gallery"]| order(_createdAt desc, _updatedAt desc)`
  const gallery = await sanityClient.fetch(galleryQuery)

  return {
    props: {
      gallery,
    },
    revalidate: 50000,
  }
}
