import axios from 'axios'

export default () => {
  let quote = {}
  axios
    .get('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => console.log(err))
  // const { id, faction, starWarsQuote } = data.Promise
  // return {}
  console.log(quote)
}
