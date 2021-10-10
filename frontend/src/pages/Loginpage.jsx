import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/forms/loginform';
import { login } from '../actions/auth'


class Loginpage extends React.Component{


    submit= (data) => this.props.login(data).then(()=>this.props.history.push('/dashboard'))

    render(){
        return(
            <>
            <h2>Login Page</h2>
                <Form submit={this.submit}/>
            </>
        )
    }
}


Loginpage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
}

export default connect(null, { login })(Loginpage);