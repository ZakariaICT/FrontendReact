import React, { useState } from 'react'
import AddFoavourites from '../AddFoavourites'
import Coins from '../Coins'

const Favourites = () => {

    const [coins, setCoins] = useState([])
    const [favourites, setFavourites] = useState([]);

    const addFavouriteCoin = (coin) => {
        const newFavouriteList = [...favourites, coin];
        setFavourites(newFavouriteList);
    }
  return (
    <div className='row'>
        <Coins 
        coins= {Favourites}
        handleFavouritesClick={addFavouriteCoin}
        favouriteComponent={AddFoavourites} />
    </div>
  )
}

export default Favourites