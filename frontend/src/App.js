import React from "react";
import "./App.css";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import axios from "axios";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import UserList from "./components/Users";
import ProjectList from "./components/Projects";
import TodoList from "./components/Todo";
import NotFound404 from "./components/NotFound404";
import ProjectInfo from "./components/ProjectInfo";
import LoginForm from "./components/Auth"
import Cookies from "universal-cookie";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'projects': [],
            'todo': [],
            'token': ''
        };
    }

    load_data() {
        axios.get('http://127.0.0.1:8000/api/users/').then(response => {
            const users = response.data;
            this.setState({'users': users.results});
        }).catch(
            error => console.log(error)
        );

        axios.get('http://127.0.0.1:8000/api/projects/').then(response => {
            const projects = response.data;
            this.setState({'projects': projects.results});
        }).catch(
            error => console.log(error)
        );

        axios.get('http://127.0.0.1:8000/api/todo/').then(response => {
            const todo = response.data;
            this.setState({'todo': todo.results});
        }).catch(
            error => console.log(error)
        );
    }

    componentDidMount() {
        this.load_data()
    }

    set_token(token) {
        const cookies = new Cookies();
        cookies.set({'token': token});
        this.setState({'token': token}, () => this.load_data());
    }

    is_authenticated() {
        return this.state.token !== '';
    }

    logout() {
        this.set_token('');
        console.log('logoutApp');
    }

    get_token_from_storage() {
        const cookies = new Cookies();
        const token = cookies.get('token')
        this.setState({'token': token})
    }

    get_token(username, password) {
        axios.post('http://127.0.0.1:8000/api-token-auth/', {'username': username, 'password': password}).then(
            response => this.set_token(response.data['token'])
        ).catch(
            error => alert('Неверный логин или пароль')
        );
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <NavMenu is_auth={this.is_authenticated} log_out={this.logout}/>
                    <Switch>
                        <Route exact path='/' component={() => <UserList users={this.state.users}/>}/>
                        <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects}/>}/>
                        <Route exact path='/todo' component={() => <TodoList tasks={this.state.todo}/>}/>

                        <Route exact path='/login' component={() => <LoginForm
                            get_token={(username, password) => this.get_token(username, password)}/>}/>

                        <Route path='/projects/:projectId'
                               component={() => <ProjectInfo projects={this.state.projects}/>}/>

                        <Route component={NotFound404}/>
                    </Switch>
                </BrowserRouter>
                <Footer/>
            </div>
        )
    }
}

export default App;
