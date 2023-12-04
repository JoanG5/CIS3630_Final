import React, { useEffect, useState } from 'react'
import CardItem from '../components/CardItem'
import Sidebar from '../components/Sidebar'
import newgames from '../assets/newgames.json'
import axios from "axios"



function NewGames() {
  // const [games, setGames] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post(
  //         'http://localhost:5000/api/games',  // Point to your Express server
  //         {
  //           fields: 'name,summary,cover.url',
  //           limit: 10,
  //         }
  //       );
  //       const formattedGames = response.data.map(game => ({
  //         name: game.name,
  //         summary: game.summary,
  //         coverUrl: game.cover ? game.cover.url : null, // Check if cover is available
  //       }));
  //       setGames(formattedGames);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // console.log(games)

  return (
    <div className='flex flex-box'>
        <Sidebar/>
        <div className='flex flex-box flex-wrap justify-start left-0'>
            <CardItem
                image="https://media.rawg.io/media/games/a8a/a8a74f30ce82dbde168176a4aa04ac58.jpg"
                alt="Marvel's Spider-Man 2 - PS5"
                title="Marvel's Spider-Man 2 - PS5"
                price="69.99"
            />
            <CardItem
                image="https://media.rawg.io/media/games/63b/63bd91ad9f2b896cdb067ad3a5542c9e.jpg"
                alt="Little Devil Inside"
                title="Little Devil Inside - PC"
                price="69.99"
            />
            <CardItem
                image="https://media.rawg.io/media/games/fbd/fbd0128013b7965904be571e75fb30c0.jpg"
                alt="Assassins Creed Mirage"
                title="Assassins Creed Mirage - PS5"
                price="69.99"
            />
            <CardItem
                image="https://media.rawg.io/media/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg"
                alt="Vampire The Masquerade Bloodlines 2"
                title="Vampire The Masquerade Bloodlines 2"
                price="69.99"
            />
            <CardItem
                image="https://media.rawg.io/media/games/699/69907ecf13f172e9e144069769c3be73.jpg"
                alt="Baldurs Gate 3"
                title="Baldurs Gate 3"
                price="69.99"
            />
            <CardItem
                image="https://media.rawg.io/media/games/22e/22e68bb62b3013283972cecf98ed51dc.jpg"
                alt="Final Fantasy XVI"
                title="Final Fantasy XVI"
                price="69.99"
            />
            <CardItem
                image="https://media.rawg.io/media/games/1de/1de8ff69ed31d7a47d4f7770f23f20b8.jpg"
                alt="Sea of Stars 2"
                title="Sea of Stars 2"
                price="69.99"
            />
            <CardItem
                image="https://media.rawg.io/media/games/cc3/cc3231b0e4ef970590eeb2ce23f60ca0.jpg"
                alt="Lies of P"
                title="Lies of P"
                price="69.99"
            />
            <CardItem
                image="https://media.rawg.io/media/games/94c/94cc56251973600816cf50fb3323d6c8.jpg"
                alt="Atlas Fallen"
                title="Atlas Fallen"
                price="69.99"
            />
            {newgames["newgames"].map((games, index) => (
                <CardItem
                    key={index}
                    alt={games.title}
                    title={games.title}
                    price={games.price}
                />
            ))}
        </div>
    </div>
  )
}

export default NewGames
