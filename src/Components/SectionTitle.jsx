import React from 'react'
import '../index.css'
import '../tabres.css'
import '../responsive.css'

const SectionTitle = (prop) => {
  return (
    <>
      <div id="SectionTitle">
        <h2> {prop.title} </h2>
        <p> {prop.desc} </p>
        <div id="Line"></div>
      </div>
    </>
  )
}
export default SectionTitle
