import React from 'react'
import rebels from '../assets/rebels.png'
import empire from '../assets/empire.png'
import { Button, Card, Row, Col, Image } from 'react-bootstrap'
import './Content.css'

interface Style {
  backgroundColor: string
}
interface Quote {
  id: number
  starWarsQuote: string
  faction: number
}
interface Props {
  quote: Quote
  background: Style
  getColor: () => void
  getQuote: () => void
  fade: (id: string, fadeIn?: boolean) => void
}
export default function Content(props: Props) {
  const { quote, background, getColor, getQuote, fade } = props
  return (
    <div style={background} className='Content'>
      <Card className='card'>
        <Card.Header as='h2'>Star Wars Quotes</Card.Header>
        <Card.Body>
          <Row id='text'>
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
                  getColor()
                  fade('text')
                  setTimeout(() => {
                    fade('text', true)
                    getQuote()
                  }, 500)
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
