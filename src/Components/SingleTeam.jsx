import React from 'react'
import '../index.css'
import '../tabres.css'
import '../responsive.css'

function SingleTeam(TeamProp) {
  return (
    <>
      <div id="SingleTeam">
        <img draggable="false" src={TeamProp.src} alt="Error" />
        <div id="TeamDesc">
          <h2> {TeamProp.name} </h2>
          <p> {TeamProp.desc} </p>
        </div>
      </div>
    </>
  )
}
export default SingleTeam
