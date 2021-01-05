import React from 'react'
import '../index.css'
import '../tabres.css'
import '../responsive.css'
import SectionTitle from './SectionTitle'
import SingleProject from './SingleProject'
import ProjectData from './ProjectData'
function Project() {
  document.title = 'Brigrate - Project'
  return (
    <>
      <section id="Project">
        <div id="Container">
          <SectionTitle
            title="Popular Projects"
            desc="we have completed too many projects. Here are some of our projects."
          />
          <div id="ProjectContentWrapper">
            {ProjectData.map((data) => {
              return (
                <SingleProject
                  href={data.href}
                  title={data.title}
                  desc={data.desc}
                  src={data.src}
                  key={data.id}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
export default Project
