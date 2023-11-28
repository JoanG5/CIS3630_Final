import React from 'react'
import CardItem from '../components/CardItem'
import Sidebar from '../components/Sidebar'

function NewGames() {
  return (
    <div>
        
        <div className="float-left">
            <Sidebar/>
        </div>

        <div className='flex flex-box flex-wrap justify-start'>
            <CardItem
                image=""
                alt="Marvel's Spider-Man 2 - PS5"
                title="Marvel's Spider-Man 2 - PS5"
                price="69.99"
            />
            <CardItem
                image=""
                alt="Marvel's Spider-Man 2 - PS5"
                title="Marvel's Spider-Man 2 - PS5"
                price="69.99"
            />
            <CardItem
                image=""
                alt="Marvel's Spider-Man 2 - PS5"
                title="Marvel's Spider-Man 2 - PS5"
                price="69.99"
            />
        </div>
    </div>
  )
}

export default NewGames