import React from 'react'
import { useState } from 'react'

const Learn = ({data}) => {

    const [index, setIndex] = useState(0);
    const [showReverse, setShowReverse] = useState(false);

    

  return (
    <div className='center learn'>
        <div className='learn-row'>
            <div className='arrow' onClick={() => {index > 0 ? setIndex(index-1) : console.log("")}}>
                {"<"}
            </div>
            <div className='middle-column'>
                <div className={showReverse ? 'card cardback' : 'card'} onClick={() => {setShowReverse(!showReverse)}}>
                    {showReverse ? data[index].definition : data[index].term}
                    
                </div>
                <div className='center progress'>
                    {index+1}/{data.length} flashcards
                </div>
            </div>

            <div className='arrow' onClick={() => {index < data.length-1 ? setIndex(index+1) : console.log("")}}>
                {">"}
            </div>
        </div>

    </div>
  )
}

export default Learn