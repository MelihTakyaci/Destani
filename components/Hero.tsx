import React from 'react'
import Image from 'next/image'

type HeroProps = {
  heading: React.ReactNode
  description: string
  imageSrc: string
}

const Hero = ({ heading, description, imageSrc }: HeroProps) => {
  return (
    <div className='heroContainer'>
      <p className="heroText">{heading}</p>
      <p>{description}</p>
      <Image src={imageSrc} width={1500} height={1500} alt="Hero Section" className='heroImage' />
    </div>
  )
}

export default Hero