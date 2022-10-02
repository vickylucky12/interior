import React, {useEffect, useId, useState} from 'react'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {sanityClient} from '../../sanity'

const Footer = () => {
  const [socialLinks, setSocialLinks] = useState<any>({
    socialLinks: {},
    webInfo: {},
  })
  const {faceBookURL, instagramURL, linkedInURL, twitterURL} =
    socialLinks && socialLinks?.socialLinks

  const getHeaderInfo = async () => {
    try {
      const pageInfoQuery = `*[_type == "basicInfo"]`
      const pageInfo = await sanityClient.fetch(pageInfoQuery)
      const {webInfo, contact} = pageInfo[0]
      const info = {
        webInfo,
        socialLinks: contact,
      }
      setSocialLinks(info)
    } catch (error) {
      console.log(error)
    }
  }
  getHeaderInfo()

  const socialArray = [
    {
      id: useId(),
      icon: <FaFacebookF />,
      link: faceBookURL,
    },
    {
      id: useId(),
      icon: <AiOutlineTwitter />,
      link: twitterURL,
    },
    {
      id: useId(),
      icon: <BsInstagram />,
      link: instagramURL,
    },
    {
      id: useId(),
      icon: <FaLinkedinIn />,
      link: linkedInURL,
    },
  ]
  return (
    <footer>
      <div className='container'>
        <div className='footer_wrapper'>
          <div className='footer_top'>
            {socialArray?.map((network) => (
              <a
                href={network?.link}
                className='icon'
                target='_blank'
                key={network?.id}
                rel='noopener noreferrer'
              >
                {network?.icon}
              </a>
            ))}
          </div>
          <div className='footer_bottom'>
            @copyright {new Date().getFullYear()}{' '}
            {socialLinks?.headerInfo?.websiteName} - All Rights Received
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
