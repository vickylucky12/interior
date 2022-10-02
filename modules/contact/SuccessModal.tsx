import {useEffect, useRef} from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import party from 'party-js'

const SuccessModal = ({name, setIsModalOpen, setTrackForm}: any) => {
  const modalRef = useRef<any>()
  useEffect(() => {
    let timer: any
    timer = setTimeout(() => {
      setTrackForm(false)
      setIsModalOpen(false)
    }, 10000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    party.confetti(modalRef?.current, {
      count: party.variation.range(20, 280),
      spread: party.variation.range(20, 280),
    })
  }, [])

  const handleClickOutSideOfModal = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setTrackForm(false)
      setIsModalOpen(false)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutSideOfModal)
    return () => {
      document.removeEventListener('mousedown', handleClickOutSideOfModal)
    }
  }, [])

  return (
    <div className='modal'>
      <div className='modal_container' ref={modalRef}>
        <div className='success__message'>
          <div className='ic'>
            <AiOutlineCheck className='ii' />
          </div>
          <h1 className='section_heading'>Dear {name}</h1>
          <p className='section_heading'>
            Thank you for getting in touch! will get back in touch with you as
            soon as possible!
          </p>
          <h5 className='section_heading'>Have a great day !</h5>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal
