import React from 'react'
import Form from '../components/forms/loginform'


class Loginpage extends React.Component{


    submit= (data) =>{
        console.log(data)
    }

    render(){
        return(
            <>
            <h3>Login Page</h3>
                <Form submit={this.submit}/>
            </>
        )
    }
}

export default Loginpage;