import React, { useState } from 'react'
import '../index.css'
import '../tabres.css'
import '../responsive.css'
import Brightness4TwoToneIcon from '@material-ui/icons/Brightness4TwoTone'
import Brightness7TwoToneIcon from '@material-ui/icons/Brightness7TwoTone'
import Button from '@material-ui/core/Button'

const Mode = () => {
  const [mode, setMode] = useState(false)
  const [icon, setIcon] = useState(false)
  function Mode() {
    document.querySelector('html').style.background = '#171E24'
    document.querySelector('html').style.color = 'white'
    setMode(!mode)
    setIcon(!icon)
  }
  function ChangeMode() {
    document.querySelector('html').style.background = 'white'
    document.querySelector('html').style.color = 'black'
    setMode(!mode)
    setIcon(!icon)
  }
  return (
    <>
      <div id="Mode">
        <Button color="secondary">
          {icon ? (
            <Brightness7TwoToneIcon
              onClick={mode ? ChangeMode : Mode}
              title="Dark Mode"
              id="ModesIcons"
            />
          ) : (
            <Brightness4TwoToneIcon
              onClick={mode ? ChangeMode : Mode}
              title="Dark Mode"
              id="ModesIcons"
            />
          )}
        </Button>
      </div>
    </>
  )
}
export default Mode
