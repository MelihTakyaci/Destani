import React from 'react'
import Image from 'next/image'

type HeroProps = {
  heading: React.ReactNode
  description: string
  imageSrc: string
  isVideo?: boolean;
}

const Hero = ({ heading, description, imageSrc, isVideo }: HeroProps) => {
  return (
    <div className='heroContainer'>
      <p className="heroText">{heading}</p>
      <p style={{
        // marginLeft: "5%" ??
      }}>{description}</p>

      {!isVideo ? (
        <Image src={imageSrc} width={1500} height={1500} alt="Hero Section" className='heroImage' />
      ) : (
        <div className="landingpage_video_banner">
          <video
            src={imageSrc}
            autoPlay
            loop
            muted
            playsInline
            className="video_background"
            ></video>
        </div>
    )}
      
    </div>
  )
}

export default Hero