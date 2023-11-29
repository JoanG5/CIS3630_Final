import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardItem from '../components/CardItem'
import Sidebar from '../components/Sidebar'

const options = {
  method: 'GET',
  url: 'https://all-in-one-all-in-one.p.rapidapi.com/category',
  params: {
    platform: 'playstation',
    page_no: '1'
  },
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'all-in-one-all-in-one.p.rapidapi.com'
  }
};

function NewGames() {
    const [games, setGames] = useState();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.request(options);
          setGames(response.data);
          console.log(games)
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, [])

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
