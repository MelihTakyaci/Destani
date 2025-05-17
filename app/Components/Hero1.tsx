import Image from 'next/image'
import React from 'react'


const Hero = () => {
  return (
    <div>
          <p className="heroText">Mit <b>Erfahrung</b> bauen, mit <b>Leidenschaft</b> <br/> gestalten – das ist, was uns antreibt.</p>
          <p>Seit 2002 stehen wir für echtes Handwerk, höchste Qualität und zuverlässige Umsetzung.</p>
          <Image src="/uberuns/Hero1.svg" width={1} height={1} alt="Hero Section" className='heroImage' />
    </div>
  )
}

export default Hero