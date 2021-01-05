import React from 'react'
import '../index.css'
import '../tabres.css'
import '../responsive.css'

const SingleProject = (ProjectProp) => {
  return (
    <>
      <div key={ProjectProp.id} id="SingleProject">
        <div id="PojectImage">
          <img draggable="false" src={ProjectProp.src} alt="Error" />
        </div>
        <div id="ProjectDesc">
          <h2> {ProjectProp.title} </h2>
          <p> {ProjectProp.desc} </p>
          <a href={ProjectProp.href} target="_blank" rel="noopener noreferrer">
            Visit
          </a>
        </div>
      </div>
    </>
  )
}
export default SingleProject
