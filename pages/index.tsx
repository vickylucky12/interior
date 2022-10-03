//Components
import Hero from '../modules/hero/Hero'
import Testimonial from '../modules/testimonial/Testimonial'
import {NextPage} from 'next'
import Services from '../modules/services/Services'
import Contact from '../modules/contact/Contact'
import Showcase from '../modules/showcase/Showcase'
import ProjectsShowcase from '../modules/projectsShowcase/ProjectsShowcase'
import About from '../modules/about/About'
import {sanityClient} from '../sanity'
import {useEffect} from 'react'
import HeaderMeta from '../shared/HeaderMeta'

const Index: NextPage = (props: any) => {
  const {services, pageInfo, gallery} = props
  const {about, contact, banner, viewPort, testimonials, serviceDescription} =
    pageInfo[0]

  return (
    <>
      <HeaderMeta pageTitle='Home | BN Square Architects' />
      <Hero data={banner} />
      <Showcase data={viewPort} />
      <Services data={services} title={serviceDescription} />
      <About data={about} />
      <ProjectsShowcase data={gallery} services={services} />
      <Testimonial data={testimonials} />
      <Contact data={contact} />
    </>
  )
}

export default Index

export async function getStaticProps() {
  const servicesQuery = `*[_type == "serviceDetails"]`
  const pageInfoQuery = `*[_type == "basicInfo"]`
  const galleryQuery = `*[_type == "gallery"][0..4] | order(_createdAt desc, _updatedAt desc)`

  const pageInfo = await sanityClient.fetch(pageInfoQuery)
  const services = await sanityClient.fetch(servicesQuery)
  const gallery = await sanityClient.fetch(galleryQuery)

  return {
    props: {
      pageInfo,
      services,
      gallery,
    },
    revalidate: 60,
  }
}
