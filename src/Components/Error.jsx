import React from 'react'
import { useHistory } from 'react-router-dom'
import ErrorSrc from './img/Error.png'

function Error() {
  document.title = '404 not Found'
  const history = useHistory()
  const ErrorSection = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }
  const ErrorImage = {
    width: '60%',
    margin: 'auto',
  }
  return (
    <>
      <section style={{ padding: '50px 0px' }} id="Error">
        <div id="Container">
          <div style={ErrorSection} id="ErrorContentWrapper">
            <div style={ErrorImage} id="ErrorImage">
              <img
                style={{ width: '100%' }}
                src={ErrorSrc}
                alt="Failed To load"
              />
            </div>
            <div
              style={{
                textAlign: 'center',
                fontSize: '2.2rem',
                fontFamily: '"open sans",cursive',
              }}
              id="ErrorDesc"
            >
              <h2>
                Seems Like The adress you have typed is incorrect.{' '}
                <span style={{ color: 'red' }}> 404 not found </span>
              </h2>
              <button
                onClick={() => {
                  history.goBack()
                }}
                style={{
                  padding: '10px 20px',
                  color: 'white',
                  background: 'linear-gradient(to left, red,blue)',
                  border: 'none',
                  outline: 'none',
                  fontSize: '1.5rem',
                  display: 'inline-block',
                  margin: ' 30px 0px',
                  borderRadius: '5px',
                }}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Error
