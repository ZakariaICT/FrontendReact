import React, { Component } from 'react'
import AccountService from './AccountService';
import { useNavigate } from "react-router-dom";




class GetAllAccounts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          accounts: []
        }
        // this.addEmployee = this.addEmployee.bind(this);
        this.editAccount = this.editAccount.bind(this);
        this.deleteaCCOUNT = this.deleteaCCOUNT.bind(this);
      }

      editAccount(id){
            this.props.history.push(`/UpdateAccount/${id}`)
      }

      deleteaCCOUNT(id){
        // rest api call
        AccountService.deleteAccount(id).then(res => {
            this.setState({accounts: this.state.accounts.filter(account => account.id !== id)});
        })

  }

      componentDidMount(){
          AccountService.getAllAccounts().then((res) => {
                this.setState({ accounts: res.data})
          });
      }


      
    
     
    
    render() {
        return (
              <div>
                  <h2 className='text-center'> Accounts </h2>
                  <div className='row'>
                      <button className='btn btn-primary' onClick={() => {window.location.href="/CreateAccount"}}> Add addEmployee</button>
                  </div>
                  <div className='row'>
                      <table className='table table-striped table-bordered'>
                          <thead>
                              <tr>
                                  <th> First Name</th>
                                  <th> Last Name</th>
                                  <th> Email</th>
                                  <th> Password</th>
                                  <th> PhoneNumber</th>
                                  <th> Age </th>
                                  <th> Actions </th>
                              </tr>
                          </thead>

                          <tbody>
                                {
                                    this.state.accounts.map(
                                        account => 
                                        <tr key={account.id}>
                                            <td> {account.firstName}</td>
                                            <td> {account.lastName}</td>
                                            <td> {account.emailID}</td>
                                            <td> {account.password}</td>
                                            <td> {account.phoneNumber}</td>
                                            <td> {account.age}</td>
                                            <td> 
                                                <button onClick={() => {window.location.href=`/UpdateAccount/${account.id}`}} className="btn btn-info"> Update</button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteaCCOUNT(account.id)} className="btn btn-danger"> Delete</button>
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