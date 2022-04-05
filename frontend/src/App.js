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
import Login from "./components/Login"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'projects': [],
            'todo': []
        };
    }

    componentDidMount() {
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

    render() {
        return (
            <div>
                <BrowserRouter>
                    <NavMenu/>
                    <Switch>
                        <Route exact path='/' component={() => <UserList users={this.state.users}/>}/>
                        <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects}/>}/>
                        <Route exact path='/todo' component={() => <TodoList tasks={this.state.todo}/>}/>
                        <Route exact path='/login' component={() => <Login/>}/>

                        <Route path='/projects/:projectId' component={() => <ProjectInfo projects={this.state.projects}/>}/>

                        <Route component={() => <NotFound404/>}/>
                    </Switch>

                </BrowserRouter>
                <Footer/>
            </div>
        )
    }
}

export default App;
