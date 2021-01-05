import React from 'react'
import '../index.css'
import '../tabres.css'
import '../responsive.css'
import ServiceData from './ServiceData'
import SectionTitle from './SectionTitle'

function Service() {
  document.title = 'Brigrate - Service'
  function SingleService(data) {
    return (
      <div key={data.id} id="SingleServices">
        <div id="ServiceLogo">
          <img draggable="false" src={data.src} alt="Error" />
        </div>
        <div id="ServiceDesc">
          <h2> {data.title} </h2>
          <p> {data.desc} </p>
        </div>
      </div>
    )
  }
  return (
    <>
      <section id="Service">
        <div id="Container">
          <SectionTitle
            title="Our Services"
            desc="We will provide you those services below"
          />
          <div id="ServiceContentWrapper">{ServiceData.map(SingleService)}</div>
        </div>
      </section>
    </>
  )
}
export default Service
