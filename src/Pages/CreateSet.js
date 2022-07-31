import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateSet = ({exportData}) => {
    const [formFields, setFormFields] = useState([
        { term: '', definition: '' },
    ])
    
    const handleFormChange = (event, index) => {
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
    }
    
    const submit = (e) => {
        e.preventDefault();
        exportData(formFields);
        navigate("/learn");
    }
    
    const addFields = () => {
        let object = {
          term: '',
          definition: ''
        }
    
        setFormFields([...formFields, object])

        window.scrollBy({ 
            top: 104, 
            behavior: 'smooth' 
          });
    }

    let navigate = useNavigate();

  return (
    <div className='center margin-bottom'>
        <div className='create-set-container create-set '>
            <form onSubmit={submit}>
            <input type='text' className='titleinput input form-row' id="title" placeholder='ENTER QUIZ NAME'/>
            <hr/>
            {formFields.map((form, index) => {
            return (
                <div key={index} className='form-row'>
                    <div className='form-child'>
                        <input
                            name='term'
                            className='forminput input'
                            onChange={event => handleFormChange(event, index)}
                            value={form.term}
                        />
                        <br/> 
                        <label>TERM</label>
                    </div>
                    <div className='form-child'>
                        <input
                            name='definition'
                            className='forminput input'
                            onChange={event => handleFormChange(event, index)}
                            value={form.definition}
                        />
                        <br/> 
                        <label>DEFINITION</label>
                    </div>
                </div>
            )
            })}
            </form>
            <div className='center'>
            <button className='form-button' onClick={addFields}>New card</button>
            <button className='form-button' onClick={submit}>Start</button>
            </div>

        </div>
    </div>
  )
}

export default CreateSet