import Image from 'next/image'
import React from 'react'
import {MdLocationOn, MdOutlinePhoneIphone} from 'react-icons/md'
import {SiGmail} from 'react-icons/si'
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import {BiPaperPlane} from 'react-icons/bi'
import {ImSpinner3} from 'react-icons/im'
import {urlFor} from '../../sanity'
import {useForm, ValidationError} from '@formspree/react'

const Contact = ({data}: any) => {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMS_ID as string,
    {
      data: {
        subject: 'Someone submitted the form from our website',
        pageTitle: function () {
          // This function will be evaluated at submission time
          return document.title
        },
      },
    }
  )

  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>
  // }
  const {
    address,
    contactImage,
    contactLeftDescription,
    contactLeftHeading,
    contactRightDescription,
    contactRightHeading,
    email,
    faceBookURL,
    instagramURL,
    linkedInURL,
    phoneNumber,
    twitterURL,
  } = data
  return (
    <div className='contact_container'>
      <div className='container'>
        <div className='contact_wrapper'>
          <div className='contact_left'>
            <div className='contact_wrapper'>
              <h2>{contactLeftHeading}</h2>
              <p>{contactLeftDescription}</p>
            </div>
            <div className='contact_info'>
              <div className='office_image'>
                <Image
                  src={urlFor(contactImage).url()}
                  alt='Image'
                  layout='fill'
                  objectFit='cover'
                  priority={true}
                />
              </div>
              <div className='info_case'>
                <MdLocationOn />
                <p>{address}</p>
              </div>
              <div className='info_case'>
                <SiGmail />
                <a href={`mailto:${email}`}>{email}</a>
              </div>
              <div className='info_case'>
                <MdOutlinePhoneIphone />
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
              </div>
            </div>
            <div className='socials'>
              <div className='social_wrapper'>
                <a href={faceBookURL} target='_blank' rel='noopener noreferrer'>
                  <FaFacebookF />
                </a>
              </div>
              <div className='social_wrapper'>
                <a
                  href={instagramURL}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaInstagram />
                </a>
              </div>
              <div className='social_wrapper'>
                <a href={linkedInURL} target='_blank' rel='noopener noreferrer'>
                  <FaLinkedinIn />
                </a>
              </div>
              <div className='social_wrapper'>
                <a href={twitterURL} target='_blank' rel='noopener noreferrer'>
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          <div className='contact_right'>
            <div className='contact_wrapper'>
              <h2>{contactRightHeading}</h2>
              <p>{contactRightDescription}</p>
              <form onSubmit={handleSubmit}>
                <div className='form_wrapper'>
                  <label htmlFor='fullName'>Full Name</label>
                  <input
                    type='text'
                    placeholder='John Doe'
                    name='fullName'
                    required
                  />
                  <ValidationError
                    prefix='Full Name'
                    field='fullName'
                    errors={state.errors}
                  />
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    placeholder='John@gmail.com'
                    name='email'
                    required
                  />
                  <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                  />
                  <label htmlFor='phoneNumber'>Phone Number</label>
                  <input
                    type='tel'
                    placeholder='7569984640'
                    name='phoneNumber'
                    required
                  />
                  <ValidationError
                    prefix='Phone Number'
                    field='phoneNumber'
                    errors={state.errors}
                  />
                  <label htmlFor='message'>Message</label>
                  <textarea
                    name='message'
                    id='message'
                    placeholder='Tell me about your interior'
                    required
                  ></textarea>
                  <ValidationError
                    prefix='Message'
                    field='message'
                    errors={state.errors}
                  />

                  <div className='submit_btn'>
                    <button className='btn_brand' disabled={state.submitting}>
                      {state?.submitting ? (
                        <>
                          Submitting... <ImSpinner3 />
                        </>
                      ) : (
                        <>
                          Send <BiPaperPlane />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact