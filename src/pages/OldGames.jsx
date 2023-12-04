import React, { useEffect, useState } from 'react'
import CardItem from '../components/CardItem'
import Sidebar from '../components/Sidebar'
import oldgames from "../assets/oldgames.json"

function OldGames() { 
  return (
    <div className='flex flex-box'>
    <Sidebar/>
    <div className='flex flex-box flex-wrap justify-start left-0'>
        {oldgames["oldgames"].map((games, index) => (
            <CardItem
                key={index}
                alt={games.title}
                title={games.title}
                price={games.price}
                image={games.image}
            />
        ))}
    </div>
</div>
  )
}

export default OldGames