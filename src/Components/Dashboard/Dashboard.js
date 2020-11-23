import React from 'react';
import Values from '../Values/Values';
import Graphic from '../Graphic/Graphic';
import Notes from '../Notes/Notes'
import '../Dashboard/Dashboard.scss';
import {useState, useEffect} from 'react';


function Dashboard() {

  const [values, setValues] = useState([0,0])
  let newValues = [...values]

  const [isCorrect, setIsCorrect] = useState(false);
 

  const handleNewValues = (e) => {
    const value = e.target.value;
    const currentInput = e.target;
    currentInput.id ==='x' ? newValues[0] = Number(value) : newValues[1] = Number(value);
  }
    useEffect(()=>{

      if(((newValues[0] && newValues[1]) === 0) || ((newValues[0]||newValues[1]) === 0)){
        setIsCorrect(false)
      }
      else{
        setIsCorrect(true)
      }
    })
    

  const handleSetValues = (e) =>{
    e.preventDefault();
    setValues(newValues)
  }

  return (
    <div className='dashboard'>
      <Values className='dashboard__value' isCorrect={isCorrect} handleNewValues={handleNewValues} handleSetValues={handleSetValues}/>
      <div className='dashboard__graphicWrapper'>
      <Graphic className='dashboard__graphic'values={values}>{!isCorrect && <div>Veuillez remplir les champs pour afficher le résultat</div>}</Graphic>
      <Notes></Notes>
      </div>
    </div>
  )
}

export default Dashboard
