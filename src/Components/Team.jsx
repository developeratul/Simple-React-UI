import React from 'react'
import '../index.css'
import '../tabres.css'
import '../responsive.css'
import TeamData from './TeamData'
import SingleTeam from './SingleTeam'
import SectionTitle from './SectionTitle'

function Team() {
  document.title = 'Brigrate - Team'
  return (
    <>
      <section id="Team">
        <div id="Container">
          <SectionTitle title="Our Team" desc="We work together and build" />
          <div id="TeamContentWrapper">
            {TeamData.map((data, index) => {
              return (
                <SingleTeam
                  key={data.id}
                  src={data.src}
                  desc={data.desc}
                  name={data.name}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
export default Team
