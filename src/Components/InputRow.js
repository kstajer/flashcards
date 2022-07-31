import React from 'react'

const InputRow = () => {
  return (
    <div className='form-row'>

      <div className='form-child'>
        <input type='text' className='forminput input'/>
        <br/> 
        <label>TERM</label>
      </div>

      <div className='form-child'>
        <input type='text' className='forminput input'/>
        <br/>
        <label>DEFINITION</label> 
      </div>

    </div>

  )
}

export default InputRow