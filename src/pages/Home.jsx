import React from 'react'
import Card from '../components/Card'
import CardSide from '../components/CardSide'
import oldgames from '../assets/oldgames.gif'
import newgames from '../assets/newgames.jpg'

import temp1 from "../assets/temp1.jpg"
import temp2 from "../assets/temp2.jpg"
import temp3 from "../assets/temp3.gif"

function Home() {
  return (
    <div>
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
            <img src={temp1} className="w-full" style={{ width: '100%wv', height: '400px' }} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
            <img src={temp2} className="w-full" style={{ width: '100%wv', height: '400px' }} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
            <img src={temp3} className="w-full" style={{ width: '100%wv', height: '400px' }} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div> 
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
            <a href="#slide1" className="btn btn-xs">1</a> 
            <a href="#slide2" className="btn btn-xs">2</a> 
            <a href="#slide3" className="btn btn-xs">3</a> 
        </div>

        <div className='flex flex-wrap justify-evenly mb-80 mt-10'>

            <CardSide
                image={oldgames}
                alt="Old Games"
                title="Checkout The Classics!"
                description="Dive in to find the nostalgic games that made your childhood!
                Click to relive the magic!"
            />
            <CardSide
                image={newgames}
                alt="New Games"
                title="Checkout Recent Releases!"
                description="Discover the latest gaming thrills! 
                Explore a world of endless possibilities with our newest game releases. 
                Click to experience excitement now!"
            />
            
        </div>

        <div className='flex flex-wrap justify-evenly my-20'>

            <Card
                image={temp1}
                alt="Game"
                title="Horror"
                description="Spooky games"
            />
            <Card
                image={temp1}
                alt="Game"
                title="Horror"
                description="Spooky games"
            />
            <Card
                image={temp1}
                alt="Game"
                title="Horror"
                description="Spooky games"
            />
            <Card
                image={temp1}
                alt="Game"
                title="Horror"
                description="Spooky games"
            />

        </div>

    </div>
  )
}

export default Home