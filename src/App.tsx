import React, { useState, useEffect } from 'react'
import getHexColor from './utils/getHexColor'
// import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import './App.css'

interface Style {
  backgroundColor: string
}
function App() {
  const [color, setColor] = useState<string>('')
  const Background: Style = { backgroundColor: color }
  useEffect(() => {
    if (!Background.backgroundColor) setColor(getHexColor())
  })
  return (
    <div style={Background} className='App'>
      {/* <Card> */}
      {/* <Card.Body> */}
      {/* <Card.Text>blah</Card.Text> */}
      <Button
        onClick={() => {
          setColor(getHexColor())
        }}
      >
        Random Quote
      </Button>
      {/* </Card.Body> */}
      {/* </Card> */}
    </div>
  )
}

export default App
