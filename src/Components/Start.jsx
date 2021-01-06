import React, { useState } from 'react'
import '../index.css'
import '../tabres.css'
import '../responsive.css'
import TextField from '@material-ui/core/TextField'
import SectionTitle from './SectionTitle'

const Start = () => {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    phone: '',
    name: '',
    country: '',
    choice: '',
  })
  const inputStyle = {
    background: 'white',
    borderRadius: '5px',
  }
  document.title = 'Brigrate - Get Started'
  function GetData(val) {
    const { name, value } = val.target
    setData((preVal) => {
      return { ...preVal, [name]: value }
    })
  }
  const Submit = (val) => {
    alert(
      `Thanks a lot ${data.fullName} for getting started with us
      
      We have just got your whole information.
      You are from ${data.country}.
      You want to build ${data.choice}.

We will contact with you very soon via email. To ${data.email}
      `,
    )
  }
  return (
    <>
      <section id="Start">
        <SectionTitle title="Get Started" />
        <div id="Container">
          <div id="StartContentWrapper">
            <form onSubmit={Submit} autoComplete="off">
              <div id="InputField">
                <TextField
                  style={inputStyle}
                  onChange={GetData}
                  required
                  type="text"
                  name="fullName"
                  value={data.fullName}
                  label="Your Name"
                  variant="outlined"
                />
              </div>
              <div id="InputField">
                <TextField
                  style={inputStyle}
                  variant="outlined"
                  onChange={GetData}
                  required
                  type="email"
                  name="email"
                  label="Your Email"
                />
              </div>
              <div id="InputField">
                <TextField
                  style={inputStyle}
                  onChange={GetData}
                  required
                  variant="outlined"
                  type="number"
                  label="Your Phone Number"
                  name="phone"
                  value={data.phone}
                />
              </div>
              <div id="InputField">
                <TextField
                  style={inputStyle}
                  onChange={GetData}
                  required
                  variant="outlined"
                  type="text"
                  label="Where are you from"
                  name="country"
                  value={data.country}
                />
              </div>
              <div id="InputField">
                <TextField
                  style={inputStyle}
                  onChange={GetData}
                  required
                  variant="outlined"
                  type="text"
                  label="What are you Looking For"
                  name="choice"
                  value={data.choice}
                />
              </div>
              <button style={{ transition: '.5s' }}>Get Started</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
export default Start
