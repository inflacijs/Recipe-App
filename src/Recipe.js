import React from "react"
import style from "./recipe.module.css"
import { FaRegClock, FaCookieBite } from 'react-icons/fa';
import TimeConvert from "./TimeConvert"


const Recipe = ({title, ingredients, image, time, diet}) => {
    
    let convertedTime =  <TimeConvert timeInMinutes={time}/>
    return(
        <div className={style.recipe}>
            <img className={style.image} src={image} alt="food"/>
            <h2 className={style.header}>{title}</h2>
            {time > 0 && (<div><FaRegClock /> {convertedTime}</div>)}

            {diet.length > 0 && (<div><FaCookieBite /> Diet Label: {diet} </div>)}
            <ul className={style.lists}>
                {ingredients.map(ingredient => 
                    (<li>{ingredient}</li>)      
                )}
            </ul>
            
        </div>
    )
}
export default Recipe