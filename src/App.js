import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Coins from './components/Coins';
// import Navbar from './components/Navbar';
import Navbar from './Navigation/Navbar';
import { Routes, Route,  BrowserRouter as Router} from 'react-router-dom';
import Coin from './routes/Coin';
import { LoginForm } from './components/Account/Login';
import Loginn, {LoginFormm } from './components/Account/Loginn';
import Favourites from './components/Account/Favourites';
import Exchanges from './components/Account/Exchanges/Exchanges';
import GetAllAccounts from './components/Account/GetAllAccounts';
import CreateAccount from './components/Account/CreateAccount';
import UpdateAccount from './components/Account/UpdateAccount';
import ChatRoom from './components/Chatroom/Chatroom';
import Login from './components/Account/Login/LoginUser';
import AllCoins from './components/AllCreatedCoins/AllCoins';


function App() {


  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

   const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false'
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
    setLogged(localStorage.getItem('logged'))

      // console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])



  const [logged, setLogged] = useState(false);

  const [userID, setuserID] = useState(-1);

  const loginData = (loginValue) => {
    if (loginValue !== '') {
      localStorage.setItem('logged', true)
      localStorage.setItem('userID', loginValue.userID)
      setLogged(true)
      setuserID(loginValue.userID)
    }


  }

  console.log(localStorage.getItem('userID'));


  return (
    <>
      <Navbar  logged={localStorage.getItem('logged')} />
      <Routes>
        <Route path='/' element={<Coins coins={coins} />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
        <Route path='/Exchanges' element={<Exchanges />} />
        <Route path='/Login' element={<LoginForm />} />
        <Route path='/Loginn' element={<Loginn />} />
        <Route path='/Favourites' element={<Favourites />} />
        <Route exact path='/GetAllAccounts' element={<GetAllAccounts/>} />      
        <Route exact path='/CreateAccount' element={<CreateAccount/>} />      
        <Route exact path='/UpdateAccount/:id' element={<UpdateAccount/>} />      
        <Route exact path='/Chatroom' element={<ChatRoom/>} />      
        <Route exact path='/AllCoins' element={<AllCoins/>} />      
        <Route path='/LoginUser' element={<Login loginData={loginData}/>} />      
      </Routes>
    </>
  );
}

export default App;
