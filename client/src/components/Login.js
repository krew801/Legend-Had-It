import React, { Component } from 'react';
import './App.css';

class Login extends Component {
    confirmation (e) {
        e.preventDefault()
        const data = {
            'name': this.loginName.value,
            'password': this.loginPassword.value,
        }
         fetch({
             method: 'POST',
             url: 'http://localhost:3000/index',
             body: data,
             crossDomain: true,
            //  success: result = () => {
            //      console.log('result:', result)
            //  },
            //  error: err = () => {alert('Invalid Login Information')}
         })
    }


render(){
    return (
        <div className="login">
            <form onSubmit={this.confirmation.bind(this)} >
                <label className="label">
                    Name:
                    <input type="text" ref = {node => this.loginName = node}/>
                </label>
                <label className="label">
                    Password:
                    <input type="text" ref = {node => this.loginPassword = node}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            <button onClick={ this.props.nextStep }>Create New User</button>
        </div>
        )
    }
}


export default Login