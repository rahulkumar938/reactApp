import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: { name: '', password: '' } }
        this.setEmpState = this.setEmpState.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    };

    setEmpState(e) {
        var field = e.target.name;
        var value = e.target.value;
        this.state.data[field] = value;
        this.setState({ data: this.state.data });
    }

    handleLogin(e) {
        e.preventDefault();
        if ((this.refs.name.value == "") || (this.refs.pwd.value == "")) { alert(" Please enter data "); }
        else {
            { this.props.history.push('/home/'+this.refs.name.value); }
        }
    }

    render() {
        return <form>
            <h2> Login </h2>
             <h1>{"I'm rendered"} here!!</h1>
            <input type="text" ref = "name"  name="name" placeholder="UserName" value={this.state.data.name} onChange={this.setEmpState} /><br /><br />
            <input type="password"  ref = "pwd"     name="password" value={this.state.data.password} placeholder="Password" onChange={this.setEmpState} /><br /><br />
            <input type="submit" onClick={this.handleLogin} />
        </form>
    }
}

export default Login;
