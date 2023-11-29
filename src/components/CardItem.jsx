import React from 'react'

function CardItem( props ) {
  return (
    <div className="card w-56 bg-base-100 card-compact shadow-xl m-5 ">
        <figure><img src={props.image} alt={props.alt} style={{ minHeight: '200px', minWidth: '300px' }} /></figure>
        <div className="card-body">
            <h2 className="card-title text-ellipsis overflow-hidden">{props.title}</h2>

            <div className="rating rating-sm pointer-events-none">
                <input type="radio" name="rating-1" className="mask mask-star" />
                <input type="radio" name="rating-1" className="mask mask-star" />
                <input type="radio" name="rating-1" className="mask mask-star" />
                <input type="radio" name="rating-1" className="mask mask-star" />
                <input type="radio" name="rating-1" className="mask mask-star" checked />
            </div>

            <h2 className="card-title">${props.price}</h2>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default CardItem