import React from 'react'
import { useState } from 'react';

function Sidebar() {

  const [rangeValue, setRangeValue] = useState(25);
  const [inputValue, setInputValue] = useState('Enter price here');

  // Event handler for the range input
  const handleRangeChange = (event) => {
    const value = event.nativeEvent.target.value;
    setRangeValue(value);
    setInputValue(`$${value}`);
  };

  // Event handler for the text input
  const handleInputChange = (event) => {
    const value = event.target.value.replace('$', '');
    const parsedValue = parseInt(value, 10) || 0; // Ensure it's a valid number
    setRangeValue(parsedValue);
    setInputValue(`$${parsedValue}`);
  };

  return (
    <div className="drawer-open ">
  
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side ">
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content sticky pt-20">

              <h1 className='text-lg my-5'>Search:</h1>
              <label className="form-control w-full max-w-xs">
                <input type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs" />
              </label>

              <h1 className='text-lg my-5'>Console:</h1>
              <select className="select select-bordered w-full max-w-xs">
                <option defaultChecked value="">Select</option>
                <option value="PS5">PS5</option>
                <option value="Xbox">Xbox</option>
                <option value="Nintendo Switch">Nintendo Switch</option>
                <option value="PC">PC</option>
              </select>

              <h1 className='text-lg my-5'>Genre:</h1>
              <select className="select select-bordered w-full max-w-xs">
                <option defaultChecked value="">Action</option>
                <option value="New">Action</option>
                <option value="Barely Used">Horror</option>
                <option value="Used">Casual</option>
                <option value="Digital Code">Open World</option>
              </select>

              <h1 className='text-lg my-5'>Condition:</h1>
              <select className="select select-bordered w-full max-w-xs">
                <option defaultChecked value="">Select</option>
                <option value="New">New</option>
                <option value="Barely Used">Barely Used</option>
                <option value="Used">Used</option>
                <option value="Digital Code">Digital Code</option>
              </select>

              <h1 className='text-lg my-5'>Price Range:</h1>
              <input type="range" min={0} max="100" className="range" value={rangeValue} onChange={handleRangeChange}/>
              <div className="w-full flex justify-between text-xs px-2 my-3">
                <span>$0</span>
                <span>$20</span>
                <span>$40</span>
                <span>$60</span>
                <span>$80</span>
                <span>$100</span>
              </div>
              <label className="form-control w-full max-w-xs">
                <input type="text" placeholder="Enter price here" value={inputValue} onChange={handleInputChange} className="input input-bordered w-full max-w-xs" />
              </label>
            </ul>
        
        </div>
    </div>
  )
}

export default Sidebar