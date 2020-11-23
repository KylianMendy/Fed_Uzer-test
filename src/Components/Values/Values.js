import React from 'react'
import '../Values/Values.scss'
import Valid from '../Valid/Valid'
function Values(props) {
  const handleNewValues = props.handleNewValues
  const handleSetValues = props.handleSetValues
  const isCorrect = props.isCorrect
  let classNameValid;
  if(isCorrect){
    classNameValid = 'valid';
    console.log(classNameValid);
  }
  else{
    classNameValid = 'valid incorrect';
    console.log(classNameValid);
  }


    return (
    <div className='values'>
      <h2 className='values__title'>“Renseignez une valeur pour chaque champs”</h2>
        <form className='values__inputs' onSubmit={handleSetValues} >
          <div>
            <input required id='x' onChange={handleNewValues} className='values__input' type='number' placeholder='Valeur X'></input>
            <Valid classNameValid={classNameValid}/>
          </div>
          <div>
            <input required id='y' onChange={handleNewValues} className='values__input' type='number' placeholder='Valeur Y'></input>
            <Valid classNameValid={classNameValid}/>
          </div>
          <button type='submit' className='values__button'>Visualiser</button>
        </form>
    </div>
  )
}

export default Values
