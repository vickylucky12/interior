import React, {useEffect, useId} from 'react'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'

const Footer = ({socialLinks}: any) => {
  const {faceBookURL, instagramURL, linkedInURL, twitterURL} =
    socialLinks && socialLinks?.socialLinks

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
