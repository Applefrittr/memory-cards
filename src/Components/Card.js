import "../Styles/Card.css"

function Card(props) {

    // container fuction clicked fires 3 seperate fucntions passed to the Card component as props when an element is clicked
    const clicked = (event) => {
        props.shuffle() // <-- from Cardmat component
        props.increment() // <-- from App component
        props.picked(event) // <-- from Cardmat component
    }

    // creates an array of elements using map() and the props.cards as parameter array
    const array = props.cards.map(card => {
        return (
            <div key={card.id} id = {card.id} onClick={clicked} className="card">
                <img src={card.img} alt={card.name} onClick={clicked} id = {card.id}></img>
            </div>
        )
    })   
    return (
        <div id="card-container">
            {array}
        </div>
    )
}

export default Card