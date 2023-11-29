import React from 'react'

function CardSide( props ) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-5">

        <figure><img src={props.image} alt={props.alt} style={{ minWidth: '400px', minHeight: '400px' }} /></figure>


        <div className="card-body max-w-sm">
            <h1 className="card-title uppercase text-white">{props.title}</h1>
            <p className='text-white'>{props.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Go</button>
            </div>
        </div>

    </div>
  )
}

export default CardSide