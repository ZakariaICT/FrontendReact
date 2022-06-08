import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props )
    this.state = {
      emailID: "",
      password: "",
    }
  }


  render() {
    const { emailID, password} = this.state;
    const handleClick=(e)=>{
        e.preventDefault()
        const student={ emailID, password}
        console.log(student)
        fetch("http://localhost:8080/api/v1/accounts", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)

        }).then(() =>{
            console.log("New Account added")
        })
    }

    return (
    <form onSubmit={this.handleSubmit}>
 <label htmlFor="email">Email</label>
 <input
   name="emailID"
   type="text"
   placeholder="Enter your email"
   value={emailID}
   onChange={this.handleChange}
 />

 
  <label htmlFor="email">Password</label>
 <input
   name="password"
   type="password"
   placeholder="Enter your password"
   value={password}
   onChange={this.handleChange}
 />

 
 <button type="submit" onClick={handleClick}>Register</button>
</form>
);
  }
}