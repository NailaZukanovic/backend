import './Game.css';
import React, {useState, useEffect} from 'react';
import SingleCard from './SingleCard';

const cardImages = [
  { "src" : "/img/helmet-1.png"},
  { "src" : "/img/potion-1.png"},
  { "src" : "/img/ring-1.png"},
  { "src" : "/img/scroll-1.png"},
  { "src" : "/img/shield-1.png"},
  { "src" : "/img/sword-1.png"},
]
function Game() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((cards) => ({...cards, id:Math.random}))


    setCards(shuffleCards);
    setTurns(0);
  }

  const handleChoice = (card) => {
    console.log(card);
  }

  return (
    <div className="Game">
      <h1>Magic Match</h1>
      <button className="gameButton" onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
          key={card.id} 
          card={card}
          handleChoice={handleChoice}/>
        ))}
      </div>

    </div>
  )
}

export default Game;