import GridLayout from '../modules/projects/GridLayout'
import ProjectsBanner from '../modules/projects/ProjectsBanner'
import {sanityClient} from '../sanity'
import HeaderMeta from '../shared/HeaderMeta'

const ServicePage = ({info}: any) => {
  const {slug, galleryImages} = info
  return (
    <>
      <HeaderMeta
        pageTitle={`${
          slug?.charAt(0).toUpperCase() + slug.slice(1)
        } | BN Square Architects}`}
      />
      <ProjectsBanner title={slug} banner={galleryImages[0]} />
      <GridLayout images={galleryImages} />
    </>
  )
}

export default ServicePage

export async function getStaticPaths() {
  const servicesQuery = `*[_type == "serviceDetails"]`
  const services = await sanityClient.fetch(servicesQuery)
  const paths = services.map((item: any) => ({
    params: {
      slug: item?.slug?.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({params}: any) {
  const servicesQuery = `*[_type == "serviceDetails"]`
  const services = await sanityClient.fetch(servicesQuery)
  const galleryQuery = `*[_type == "gallery"]`
  const gallery = await sanityClient.fetch(galleryQuery)
  const slugId = services?.find(
    (item: any) => item?.slug?.current == params?.slug
  )

  const galleryImages = gallery.filter(
    (item: any) => item?.categories[0]?._ref == slugId?._id
  )
  const info = {
    slug: params?.slug,
    galleryImages,
  }

  return {
    props: {
      info,
    },
    revalidate: 50000,
  }
}
