import { useState } from "react";
import Card from "./Card";
import "../Styles/Cardmat.css"
import Aquarius from "../Assets/Aquarius.jpeg"
import Aries from "../Assets/Aries.jpeg"
import Cancer from "../Assets/Cancer.jpeg"
import Capricorn from "../Assets/Capricorn.jpeg"
import Gemini from "../Assets/Gemini.jpeg"
import Leo from "../Assets/Leo.jpeg"
import Libra from "../Assets/Libra.jpeg"
import Pisces from "../Assets/Pisces.jpeg"
import Sagittarius from "../Assets/Sagittarius.jpeg"
import Scorpio from "../Assets/Scorpio.jpeg"
import Taurus from "../Assets/Taurus.jpeg"
import Virgo from "../Assets/Virgo.jpeg"

function Cardmat(props) {

  // Deck of cards represesnted as objects, with text, id, and a picture properties
  const deck = [
    {name: "john", id: 0, img: Aquarius},
    {name: "sara", id: 1, img: Aries},
    {name: "jake", id: 2, img: Cancer},
    {name: "diana", id: 3, img: Capricorn},
    {name: "rebecca", id: 4, img: Gemini},
    {name: "omar", id: 5, img: Leo},
    {name: "steve", id: 6, img: Libra},
    {name: "phillip", id: 7, img: Pisces},
    {name: "tara", id: 8, img: Sagittarius},
    {name: "deb", id: 9, img: Scorpio},
    {name: "clyde", id: 10, img: Taurus},
    {name: "shiv", id: 11, img: Virgo}
  ]

  // state of our Cardmap component, intializes the deck in order
  const [cards, setCards] = useState(deck)

  // our deck shuffle fucntion, calls the shuffle fuction bellow on our cards (state) variable.  A copy of cards shuffled is returned to ensure React render fires when
  // cards is passed to the Card component as a prop
  const cardShuffle = () => {  
    setCards([...shuffle(cards)])
  }

  // the state variable selected will be an array of IDs that have been selcted by the user.  The IDs come from the elements created by the Card component
  const [selected, setSelected] = useState([])

  // picked is passed as a prop function to the Card component, fires when any Card element is clicked
  const picked = (event) => {
    const id = event.target.id
    if (!selected.includes(id)) {
      setSelected([...selected, id])
    } else {
      console.log("GameOver!")
      props.clear()
      setSelected([])
    }
  }

  return (
  <div className="card-mat">
    <h1>Cards</h1>
    <Card cards = {cards} shuffle = {cardShuffle} increment = {props.increment} picked = {picked}/>
  </div>
  )
}

//// shuffle function (Fisher-Yates algorithm)////
const shuffle = (array) => {
  let m = array.length
  let i
  let t
  while(m) {
    i = Math.floor(Math.random() * m--)

    t = array[m]

    array[m] = array[i]
    array[i] = t

  }
  return array;
}

export default Cardmat;
