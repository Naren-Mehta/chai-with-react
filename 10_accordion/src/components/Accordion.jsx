import React from 'react'

const Accordion = ({title, description, isOpen, setIsOpen}) => {
  return (
    <div className='border border-black'>
      <h1 className='font-bold' onClick={setIsOpen}>{title}</h1>
      {isOpen && <p>{description}</p>}
    </div>
  )
}

export default Accordion
