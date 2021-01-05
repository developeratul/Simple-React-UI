import React from 'react'
import '../index.css'
import '../tabres.css'
import '../responsive.css'
import Image from './img/About.png'

function About() {
  document.title = 'Brigrate - About'
  return (
    <>
      <section id="About">
        <div id="Container">
          <div id="AboutContentWrapper">
            <div id="AboutDesc">
              <h2>few words About Us</h2>
              <p>
                Brigade is a leading property developer in South India. Our
                Projects extend across several major cities in South India
                including Apartments and Villas in Bangalore, Chennai,
                Chikmagalur, Hyderabad, Kochi, Mangalore and Mysore. Explore
                Apartments in Bangalore, Apartments in Chennai and Hyderabad.
              </p>
              <p>
                Brigade Group is headquartered in Bangalore, with branch offices
                in several cities in South India and a representative office in
                Dubai. Brigade Group has also established a strong stamp into
                the commercial space by building some of the biggest malls in
                Bangalore City. Brigade Group has a uniquely diverse
                multi-domain portfolio that covers property development,
                property management services, hospitality and education.
              </p>
            </div>
            <div id="AboutImage">
              <img draggable="false" src={Image} alt="Error" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default About
