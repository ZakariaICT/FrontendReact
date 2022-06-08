import React, { useState } from 'react'
import CoinItem from './Coinitem'
import './Coins.css'
import { Link } from 'react-router-dom'
import Coin from '../routes/Coin'
import AddFoavourites from './AddFoavourites'


const Coins = (props) => {

    const [coins, setCoins] = useState([])
    const [favourites, setFavourites] = useState([]);
    // const [coins, setCoins] = useState([]);
    // const [search, setSearch] = useState('')

    // const handleChange = e => {
    //     setSearch(e.target.value)
    // }

    // const filterCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    const addFavouriteCoin = (coin) => {
        const newFavouriteList = [...favourites, coin];
        setFavourites(newFavouriteList);
    }

  return (
    <div className='cointainer'>
        <div>
            {/* <input type='text' placeholder='Search' className='coin-input' onChange={handleChange}/> */}
            <div className='heading'>
                <p></p>
                <p className='coin-name'>Coins</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Mkt Cap</p>
                <p className='hide-mobile'>Add to Favourites</p>
            </div>

            {props.coins.map(coins => {
                return (
                    <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                            <CoinItem coins={coins} handleFavouritesClick={addFavouriteCoin} favouriteComponent={AddFoavourites} />
                        </Link>
                        

                )
            })}
        </div>
        {/* {filterCoins.map(coin => {
            return (
                <Coin 
                key={coin.id} 
                name={coin.name} 
                image={coin.image} 
                symbol={coin.symbol}
                volume={coin.market_cap}
                price={coin.current_price}
                />
            )
        })} */}

    </div>
  )
}

export default Coins