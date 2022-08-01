import React from 'react'
import { useState, useEffect } from 'react'

const Learn = ({data}) => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const leftArrow = document.getElementById('leftarrow');
        const rightArrow = document.getElementById('rightarrow');
        const card = document.getElementById('card');

        rightArrow.addEventListener('click', () => {
            card.classList.add('move-right-arrow');
        });

        leftArrow.addEventListener('click', () => {
            card.classList.add('move-left-arrow');
        });

        card.addEventListener('animationend', () => {
            card.classList.remove('move-right-arrow');
            card.classList.remove('move-left-arrow');
        });
    }, []);

  return (
    <div className='center learn'>
        <div className='learn-row'>
            <div className='arrow' id='leftarrow' onClick={() => { index > 0 ? setIndex(index - 1) : console.log("") }}>
                {"<"}
            </div>
            <div className='middle-column'>
                <div className='card' id='card'>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <p>{data[index].term}</p>
                        </div>
                        <div className="flip-card-back">
                            <p>{data[index].definition}</p>
                        </div>
                    </div> 
                </div>
                <div className='center progress'>
                    {index+1}/{data.length} flashcards
                </div>
            </div>

            <div className='arrow' id='rightarrow' onClick={() => { index < data.length-1 ? setIndex(index + 1) : console.log("") }}>
                {">"}
            </div>
        </div>

    </div>
  )
}

export default Learn