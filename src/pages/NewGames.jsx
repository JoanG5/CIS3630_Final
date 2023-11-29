import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardItem from '../components/CardItem'
import Sidebar from '../components/Sidebar'

// const options = {
//   method: 'GET',
//   url: 'https://all-in-one-all-in-one.p.rapidapi.com/category',
//   params: {
//     platform: 'playstation',
//     page_no: '1'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'e596ff4a8emshb56dc10f4742f74p1c5247jsna327d8994d77',
//     'X-RapidAPI-Host': 'all-in-one-all-in-one.p.rapidapi.com'
//   }
// };

function NewGames() {
  
    // const [games, setGames] = useState();

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.request(options);
    //       setGames(response.data);
    //       console.log(games)
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
  
    //   fetchData();
    // }, [])

  return (
    <div>
        
        <div className="float-left">
            <Sidebar/>
        </div>

        <div className='flex flex-box flex-wrap justify-start'>
            <CardItem
                image="https://media.rawg.io/media/games/a8a/a8a74f30ce82dbde168176a4aa04ac58.jpg"
                alt="Marvel's Spider-Man 2 - PS5"
                title="Marvel's Spider-Man 2 - PS5"
                price="69.99"
            />
            <CardItem
                image="https://media.rawg.io/media/games/63b/63bd91ad9f2b896cdb067ad3a5542c9e.jpg"
                alt="Little Devil Inside"
                title="Little Devil Inside"
                price="69.99"
            />
            <CardItem
                image="https://media.rawg.io/media/games/fbd/fbd0128013b7965904be571e75fb30c0.jpg"
                alt="Assassins Creed Mirage"
                title="Assassins Creed Mirage"
                price="69.99"
            />
            <CardItem
                image="https://media.rawg.io/media/games/a8a/a8a74f30ce82dbde168176a4aa04ac58.jpg"
                alt="Marvel's Spider-Man 2 - PS5"
                title="Marvel's Spider-Man 2 - PS5"
                price="69.99"
            />
            <CardItem
                image="https://media.rawg.io/media/games/63b/63bd91ad9f2b896cdb067ad3a5542c9e.jpg"
                alt="Little Devil Inside"
                title="Little Devil Inside"
                price="69.99"
            />
            <CardItem
                image="https://media.rawg.io/media/games/fbd/fbd0128013b7965904be571e75fb30c0.jpg"
                alt="Assassins Creed Mirage"
                title="Assassins Creed Mirage"
                price="69.99"
            />
            <CardItem
                image="https://media.rawg.io/media/games/a8a/a8a74f30ce82dbde168176a4aa04ac58.jpg"
                alt="Marvel's Spider-Man 2 - PS5"
                title="Marvel's Spider-Man 2 - PS5"
                price="69.99"
            />
            <CardItem
                image="https://media.rawg.io/media/games/63b/63bd91ad9f2b896cdb067ad3a5542c9e.jpg"
                alt="Little Devil Inside"
                title="Little Devil Inside"
                price="69.99"
            />
            <CardItem
                image="https://media.rawg.io/media/games/fbd/fbd0128013b7965904be571e75fb30c0.jpg"
                alt="Assassins Creed Mirage"
                title="Assassins Creed Mirage"
                price="69.99"
            />
        </div>
    </div>
  )
}

export default NewGames