function Card(props) {

    // container fuction clicked fires 3 seperate fucntions passed to the Card component as props when an element is clicked
    const clicked = (event) => {
        props.shuffle() // <-- from Cardmat component
        props.increment() // <-- from App component
        props.picked(event) // <-- from Cardmat component
    }

    // creates an array of elements using the props.cards as parameter array
    const array = props.cards.map(card => {
        return <h1 key={card.id} id = {card.id} onClick={clicked}>{card.name}</h1>
    })   
    return (
        <div>
            {array}
        </div>
    )
}

export default Card