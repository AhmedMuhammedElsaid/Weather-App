import React from 'react'
import Hero from './Hero';
import Title from './Title'
import GameForm from './GameForm'
import GameDetails from './GameDetails';

const UI = () => {
    return(
   <>
        <Hero title='Horse Betting Game' />
        <Title title='Your Game Information' center/>
        <div className='container'>
        <GameForm/>
        <GameDetails/>
        </div>
     </>  
    )
}


export default UI;