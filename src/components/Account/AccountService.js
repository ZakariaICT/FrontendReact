import axios from "axios";

const ACCOUNT_API_BASE_URL = "http://localhost:8080/account/accounts";
const ACCOUNTS_API_BASE_URL = "http://localhost:8080/account/add";
const ACCOUNTT_API_BASE_URL = "http://localhost:8080/account/accounts";
const LOGIN_API_BASE_URL = "http://localhost:8080/account/email";

class AccountService{

    getAllAccounts(){
        return axios.get(ACCOUNT_API_BASE_URL);
    }

    createAccount(account){
        return axios.post(ACCOUNTS_API_BASE_URL, account)
    }

    getAccountbyId(accountId){
        return axios.get(ACCOUNTT_API_BASE_URL + '/' + accountId);
    }

    updateAccount(accountId, account){
        return axios.put(ACCOUNTT_API_BASE_URL + '/' + accountId, account);
    }

    deleteAccount(accountId){
        return axios.delete(ACCOUNTT_API_BASE_URL + '/' + accountId)
    }

    LoginUser (emailID) {
        return axios.get(LOGIN_API_BASE_URL + "/" + emailID);
    }

}

export default new AccountService()