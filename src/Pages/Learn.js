import React from 'react'
import { useState } from 'react'
import anime from 'animejs/lib/anime.es.js';

const Learn = ({data}) => {

    const [index, setIndex] = useState(0);

    const animation = ()  => {

        index < data.length-1 ? setIndex(index+1) : console.log("")
    }

  return (
    <div className='center learn'>
        <div className='learn-row'>
            <div className='arrow' onClick={() => {index > 0 ? setIndex(index-1) : console.log("")}}>
                {"<"}
            </div>
            <div className='middle-column'>
                <div className='card'>
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

            <div className='arrow' id='leftarrow' onClick={animation}>
                {">"}
            </div>
        </div>

    </div>
  )
}

export default Learn