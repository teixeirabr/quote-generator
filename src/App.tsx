import React, { useState, useEffect } from 'react'
import getHexColor from './utils/getHexColor'
import axios from 'axios'
import Content from './components/Content'
import './App.css'
import fade from './utils/animations/fade'
import './utils/animations/fade.css'

function App() {
  const [color, setColor] = useState<string>(''),
    [quote, setQuote] = useState({
      id: 0,
      starWarsQuote: '',
      faction: 0,
    }),
    background = { backgroundColor: color }
  const getQuote = (): void => {
    axios
      .get('https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
      .then((res) => setQuote(res.data))
      .catch((err) => console.log(err))
  }
  const getColor = (): void => setColor(getHexColor())
  useEffect(() => {
    if (!background.backgroundColor) getColor()
    if (!quote.starWarsQuote) {
      getQuote()
      fade('text', true)
    }
  })
  return (
    <Content
      background={background}
      quote={quote}
      getColor={getColor}
      getQuote={getQuote}
      fade={fade}
    />
  )
}

export default App
