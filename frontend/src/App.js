import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from "./components/Users";
import axios from "axios";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': []
        };
    }

    componentDidMount() {
        // const users = [
        //     {
        //         "username": "archy",
        //         "first_name": "Artur",
        //         "last_name": "Arturov",
        //         "email": "archy@local.host",
        //     },
        //     {
        //         "username": "olya",
        //         "first_name": "Olga",
        //         "last_name": "Olgeeva",
        //         "email": "olya@local.host",
        //     },
        // ];

        axios.get('http://127.0.0.1:8000/api/usersapp/').then(response => {
            const users = response.data;
            this.setState({'users': users});
            }).catch(
                error => console.log(error)
            );
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
