import React from 'react'

function CardSide( props ) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-5">
        <figure><img src={props.image} alt={props.alt} style={{ width: '400px', height: '400px' }} /></figure>
            <div className="card-body max-w-sm">
                <h1 className="card-title uppercase">{props.title}</h1>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Go</button>
            </div>
        </div>
    </div>
  )
}

export default CardSide