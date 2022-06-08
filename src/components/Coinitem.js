import React from 'react'
import './Coins.css'


const Coinitem = (props) => {
  // const FavouriteComponent = props.favouriteComponent;
  return (
    <div className='coin-row'>
        <p>{props.coins.market_cap_rank}</p>
        <div className='img-symbol'>
            <img src={props.coins.image} alt='' />
            <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>{props.coins.current_price.toLocaleString()}</p>
        <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='hid_mobile'>${props.coins.total_volume.toLocaleString()}</p>
        <p className='hid_mobile'>${props.coins.market_cap.toLocaleString()}</p>
        {/* <div onClick={()=> props.handlFavouritesClick} className='overlay d-flex align-items-center justify-content-center'>
          <FavouriteComponent/>
        </div> */}

    </div>
  )
}

export default Coinitem