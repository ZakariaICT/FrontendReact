import axios from "axios";

const COIN_API_BASE_URL = "http://localhost:8080/coin/Coins";
const COINN_API_BASE_URL = "http://localhost:8080/coin";
class AccountService{

    getAllCoins(){
        return axios.get(COIN_API_BASE_URL);
    }

    saveFavourite(userID, coinID){
        return axios.post(COIN_API_BASE_URL + "/" + userID + "&" + coinID)
    }

}

export default new AccountService()