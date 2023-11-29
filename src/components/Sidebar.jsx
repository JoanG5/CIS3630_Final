import React from 'react'

function Sidebar() {
  return (
    <div className="drawer lg:drawer-open sticky">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content ">
            {/* Sidebar content here */}
              <h1 className='text-lg my-5'>Console:</h1>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Select</option>
                <option>PS5</option>
                <option>XboX</option>
                <option>Nintendo Switch</option>
                <option>PC</option>
              </select>
              <h1 className='text-lg my-5'>Price Range:</h1>
              <input type="range" min={0} max="100" value="25" className="range" />
              <h1 className='text-lg my-5'>Condition:</h1>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Select</option>
                <option>New</option>
                <option>Barely Used</option>
                <option>Used</option>
                <option>Digital Code</option>
              </select>
            </ul>
        
        </div>
    </div>
  )
}

export default Sidebar