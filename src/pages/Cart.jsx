import React from 'react'
import CardCartItem from '../components/CardCartItem'
import newgames from '../assets/newgames.json'
import oldgames from "../assets/oldgames.json"
import { useState } from 'react'

function Cart() {

  const [cartItems, setCartItems] = useState([
    {
      title: oldgames["oldgames"][0].title,
      alt: oldgames["oldgames"][0].title,
      price: oldgames["oldgames"][0].price,
      description: oldgames["oldgames"][0].description,
      image: oldgames["oldgames"][0].image
    },
    {
      title: oldgames["oldgames"][1].title,
      alt: oldgames["oldgames"][1].title,
      price: oldgames["oldgames"][1].price,
      description: oldgames["oldgames"][1].description,
      image: oldgames["oldgames"][1].image
    },
    {
      title: newgames["newgames"][1].title,
      alt: newgames["newgames"][1].title,
      price: newgames["newgames"][1].price,
      description: newgames["newgames"][1].description,
      image: newgames["newgames"][1].image
    }
  ]);

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
    setCartItems(updatedCartItems);
  };
  
  let totalCost = 0;
  cartItems.forEach(games => {
  totalCost += games.price;
  });
  return (
    <div className='h-screen mt-10 mb-72'>
      <div className='flex flex-col mx-56 bg-base-200 p-10 rounded-3xl'>
      <h1 className="card-title text-3xl text-white">Cart:</h1>
          {cartItems.map((games, index) => (
              <CardCartItem
                  key={index}
                  alt={games.title}
                  title={games.title}
                  price={games.price}
                  description={games.description}
                  onchange={handleRemoveItem}
                  index={index}
                  image={games.image}
              />
          ))}

        <div className="flex justify-between mt-5">
          <div>
            <h1 className="card-title text-3xl text-white">Subtotal: ${totalCost}</h1>
          </div>
          <div>
            <button className='btn btn-primary'>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart