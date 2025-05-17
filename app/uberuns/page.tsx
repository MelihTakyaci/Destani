import React from 'react'
import "./page.css"
import Hero1 from '../Components/Hero1'
import InfoCards from '../Components/InfoCards'
import Image from 'next/image'
import Description from '../Components/Description'


const uberuns = () => {
  return (
    <div className='container'>
      <Hero1 />
      <InfoCards />
      <Image src="/uberuns/Hero1.svg" width={100} height={100} alt="uberuns" className='Image2' />
      <Description />
      <div className='contact'>
        <p className='title'><b>Kontaktieren</b> Sie uns!</p>
        <p className='contactText'>
          Sie haben Fragen oder möchten ein Projekt mit uns starten?
          <br/>
          Wir freuen uns auf Ihre Nachricht und beraten Sie gerne persönlich
        </p>
        <div className='contactContainer'>
          <div className='contactImage'>
            <Image src="/uberuns/contactImg.svg" width={20} height={20} alt="contact" className='img' />
          </div>
          <div className="contact-form">
            <form>
              <p>Name</p>
              <input type="text" id="name" placeholder="Geben Sie Ihren vollständigen Namen ein" />
              <p>Email</p>
              <input type="email" id="email" placeholder="Geben Sie Ihre E-Mail-Adresse ein" />
              <p>Nachricht</p>
              <input type="text" id="email" placeholder="Geben Sie Ihre E-Mail-Adresse ein" />
              <button type="submit">Senden Sie Ihre Nachricht</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default uberuns