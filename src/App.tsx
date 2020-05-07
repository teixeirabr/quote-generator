import React, { useState, useEffect } from 'react'
import getHexColor from './utils/getHexColor'
import axios from 'axios'
import rebels from './assets/rebels.png'
import empire from './assets/empire.png'
import { Button, Card, Row, Col, Image } from 'react-bootstrap'
import './App.css'

interface Style {
  backgroundColor: string
}
interface Quote {
  id: number
  starWarsQuote: string
  faction: number
}
function App() {
  const [color, setColor] = useState<string>(''),
    [quote, setQuote] = useState<Quote>({
      id: 0,
      starWarsQuote: '',
      faction: 0,
    }),
    background: Style = { backgroundColor: color }
  const getQuote = (): void => {
    axios
      .get('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
      .then((res) => setQuote(res.data))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    if (!background.backgroundColor) setColor(getHexColor())
    if (!quote.starWarsQuote) getQuote()
  })
  return (
    <div style={background} className='App'>
      <Card className='card'>
        <Card.Header as='h2'>Star Wars Quotes</Card.Header>
        <Card.Body>
          <Row>
            <Col md={10}>
              <h4>
                <strong>"</strong>
                {quote.starWarsQuote}
              </h4>
            </Col>
            <Col md={2}>
              <Image
                src={quote.faction === 0 ? rebels : empire}
                fluid
                className='mt-2 mt-md-0'
              />
            </Col>
          </Row>
          <Row className='mt-2 mt-md-3'>
            <Col md={6}>
              <a
                href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${quote.starWarsQuote}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button
                  block
                  style={background}
                  variant='outline-light'
                  size={'lg'}
                >
                  Tweet
                </Button>
              </a>
            </Col>
            <Col md={6} className='mt-2 mt-md-0'>
              <Button
                block
                style={background}
                variant='outline-light'
                size={'lg'}
                onClick={() => {
                  setColor(getHexColor())
                  getQuote()
                }}
              >
                Random Quote
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default App
