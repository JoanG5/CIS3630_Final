import React from 'react'

function CardCartItem( props ) {
    const numbers = Array.from({ length: 100 }, (_, index) => index + 1);

  return (
    <div className="card card-side bg-base-100 shadow-xl w-full my-5">
        <figure><img src={props.image} style={{ height: '250px', width: '250px' }} alt={props.alt}/></figure>
            <div className="card-body place-content-between">

                <div>
                    <h1 className="card-title text-3xl text-white">{props.title}</h1>
                    <h1 className="card-title text-2xl text-white">${props.price}</h1>
                    <br />
                    <h1>{props.description}</h1>
                </div>

                <div className="card-actions justify-end btn-group">
                    <select className="select select-bordered w-20 max-w-xs">
                    {numbers.map((number) => (
                        <option key={number} value={number}>
                            {number}
                        </option>
                        ))}
                    </select>
                    <button onClick={() => props.onchange(props.index)} className="btn btn-primary">Delete</button>
                </div>
                
            </div>
    </div>
  )
}

export default CardCartItem