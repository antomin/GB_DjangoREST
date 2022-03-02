import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from "./components/Users";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': []
        };
    }

    componentDidMount() {
        const users = [
            {
                "username": "archy",
                "first_name": "Artur",
                "last_name": "Arturov",
                "email": "archy@local.host",
            },
            {
                "username": "olya",
                "first_name": "Olga",
                "last_name": "Olgeeva",
                "email": "olya@local.host",
            },
        ];

        this.setState(
            {
                'users': users
            }
        )
    }

    render() {
        return (
            <div>
                <UserList users={this.state.users} />
            </div>
        )
    }

}

    export default App;
