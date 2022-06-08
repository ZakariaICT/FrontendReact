import React from "react";
import "./LoginStyle.css"



export class LoginForm extends React.Component {

    
  constructor(props) {
    super(props);
    this.state = {
        firstName: "",
        lastName: "",
      emailID: "",
      password: "",
      phoneNumber: "",
      age: "",
    };
    
  }

 



  render() {
    const { firstName, lastName, emailID, password, phoneNumber, age } = this.state;
    
    const handleClick=(e)=>{
        e.preventDefault()
        const student={ firstName, lastName, emailID, password, phoneNumber, age}
        console.log(student)
        fetch("http://localhost:8080/account/add", {
            method:"POST",
            headers:{ Accept: 'application/json',
              "Content-Type":"application/json",
          },
            body:JSON.stringify(student)
            

        }).then(() =>{
            console.log("New Account added")
        })
    }
    return (
      <form onSubmit={this.handleSubmit}>
           <label htmlFor="age">Age</label>
        <input
          name="age"
          type="text"
          placeholder="Enter your age"
          value={age}
          onChange={this.handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          name="emailID"
          type="text"
          placeholder="Enter your email"
          value={emailID}
          onChange={this.handleChange}
        />
        <label htmlFor="firstName">Firstname</label>
        <input
          name="firstName"
          type="text"
          placeholder="Enter your firstname"
          value={firstName}
          onChange={this.handleChange}
        />
        <label htmlFor="lastName">Lastname</label>
        <input
          name="lastName"
          type="text"
          placeholder="Enter your lastname"
          value={lastName}
          onChange={this.handleChange}
        /> 
        
         <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={this.handleChange}
        />
         <label htmlFor="phoneNumber">PhoneNumber</label>
        <input
          name="phoneNumber"
          type="text"
          placeholder="Enter your phonenumber"
          value={phoneNumber}
          onChange={this.handleChange}
        />
        
        <button type="submit" onClick={handleClick}>Register</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("Submitting");
    console.log(this.state);
  };
}
