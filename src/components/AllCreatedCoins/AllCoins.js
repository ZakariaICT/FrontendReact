import React, { Component } from 'react'
import CoinService from './CoinService';
import {FaHeadphones, FaRegClock, FaHeart, FaRegHeart} from 'react-icons/fa'


class GetAllAccounts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          coins: []
        }
      }


      componentDidMount(){
          CoinService.getAllCoins().then((res) => {
                this.setState({ coins: res.data})
          });
      }


      saveFavourite(coinId) {
        CoinService.saveFavourite(localStorage.getItem('userID'), coinId).then(() => {
            this.componentDidMount()
            console.log(localStorage.getItem('userID'));

        })
    }

    // deleteFavourite(songID) {
    //     SongService.deleteFavourite(localStorage.getItem('userID'), songID).then(() => {
    //         this.getSongs()
    //     })
    // }

    render() {
        return (
              <div>
                  <h2 className='text-center'> Coins </h2>
                  <div className='row'>
                  </div>
                  <div className='row'>
                      <table className='table table-striped table-bordered'>
                          <thead>
                              <tr>
                                  <th> Coin Name</th>
                                  <th> Coin Description</th>
                              </tr>
                          </thead>

                          <tbody>
                                {
                                    this.state.coins.map(
                                        coin => 
                                        <tr key={coin.coinID}>
                                            <td> {coin.coinName}</td>
                                            <td> {coin.coinDescription}</td>
                                            <td> 
                                            <div className="favourite">
                                                {
                                                   coin.favourite ? (
                                                        <button onClick={() => this.deleteFavourite(coin.coinID)}>
                                                            <i>
                                                                <FaHeart />
                                                            </i>
                                                        </button>
                                                   ) : (
                                                        <button onClick={() => this.saveFavourite(coin.coinID, localStorage.getItem('userID'))}>
                                                            <i>
                                                                <FaRegHeart />
                                                            </i>
                                                        </button>
                                                   )
                                                }
                                            </div>

                                            </td>

                                        </tr>
                                    )
                                }
                          </tbody>
                      </table>
                  </div>
              </div>
            )  
    }
    
}



export default GetAllAccounts