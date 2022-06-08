import React, { Component } from 'react';
import AccountService from './AccountService';
import { useParams } from 'react-router-dom';


export const withParams = Component => props => {
    let params = useParams();
    return <Component  {...props} params={params} />;
}

class UpdateAccount extends Component {


    constructor(props) {
        super(props)
        let{id} = props.params;
        this.state = {
            id: id,
            firstName: "",
            lastName: "",
            emailID: "",
            password: "",
            phoneNumber: "",
            age: "",
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateAccount = this.updateAccount.bind(this);
    }

    componentDidMount(){
        AccountService.getAccountbyId(this.state.id).then ((res) => {
            let account = res.data;
            this.setState({firstName: account.firstName,
                lastName: account.lastName,
                emailID: account.emailID,
                password: account.password,
                phoneNumber: account.phoneNumber,
                age: account.age
            })
        });
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value})
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value})
    }

    changeEmailHandler = (event) => {
        this.setState({emailID: event.target.value})
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value})
    }

    changePhoneNumberHandler = (event) => {
        this.setState({phoneNumber: event.target.value})
    }

    changeAgeHandler = (event) => {
        this.setState({age: event.target.value})
    }

    updateAccount =(e) => {
        e.preventDefault();

        let account = {id: this.state.id, firstName: this.state.firstName, lastName: this.state.lastName, emailID: this.state.emailID, password: this.state.password, phoneNumber: this.state.phoneNumber, age: this.state.age}
        console.log('account =>' + JSON.stringify(account));
        AccountService.updateAccount(this.state.id, account);
    
    }

    cancel(){
        this.props.history.push('/');
    }



    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Add Account </h3>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First name" name="firstName" className="form-control"
                                                   value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label> First Name: </label>
                                            <input placeholder="Last name" name="lastName" className="form-control"
                                                   value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailID" className="form-control"
                                                   value={this.state.emailID} onChange={this.changeEmailHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label> Password : </label>
                                            <input placeholder="Password" name="password" type="password" className="form-control"
                                                   value={this.state.password} onChange={this.changePasswordHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label> PhoneNumber: </label>
                                            <input placeholder="PhoneNumber" name="phoneNumber" className="form-control"
                                                   value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label> Age: </label>
                                            <input placeholder="Age" name="age" className="form-control"
                                                   value={this.state.age} onChange={this.changeAgeHandler} />
                                        </div>
                                        <input placeholder="First name" name="firstName" type="hidden" className="form-control"
                                                   value={this.state.id}/>

                                        <button className="btn btn-succes" onClick={this.updateAccount}> Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}> Cancel </button>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withParams(UpdateAccount);