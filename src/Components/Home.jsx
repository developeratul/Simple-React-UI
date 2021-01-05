import React from 'react'
import '../index.css'
import '../tabres.css'
import '../responsive.css'
import { NavLink } from 'react-router-dom'

function Home() {
  document.title = 'Brigrate - Home'
  return (
    <>
      <header>
        <div id="Container">
          <div id="HeaderContentWrapper">
            <div id="HeaderDesc">
              <h1>Create All You Need. From One Drawing.</h1>
              <p>
                We are always with you to build your dream house. We are the
                best builder around <span> asia</span>
              </p>
              <NavLink exact to="/start">
                Get started
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default Home
