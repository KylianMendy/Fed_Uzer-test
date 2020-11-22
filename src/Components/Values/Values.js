import React from 'react'
import '../Values/Values.scss'
import Valid from '../Valid/Valid'
function Values(props) {
  const handleNewValues = props.handleNewValues
  const handleSetValues = props.handleSetValues
  const isCorrect = props.isCorrect
  let classNameValid = isCorrect ? 'valid' : 'valid incorrect'
  if(isCorrect){
    classNameValid = 'valid'
  }
  else{
    classNameValid = 'valid incorrect'
  }
    return (
    <div className='values'>
      <h2 className='values__title'>“Renseignez une valeur pour chaque champs”</h2>
        <form className='values__inputs' onSubmit={handleSetValues} >
          <div>
            <input required id='x' onChange={handleNewValues} className='values__input' type='text' placeholder='Valeur X'></input>
            <Valid className={classNameValid}/>
          </div>
          <div>
            <input required id='y' onChange={handleNewValues} className='values__input' type='text' placeholder='Valeur Y'></input>
            <Valid className={classNameValid}/>
          </div>
          <button type='submit' className='values__button'>Visualiser</button>
        </form>
    </div>
  )
}

export default Values
