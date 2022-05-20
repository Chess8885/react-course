import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todos from "./Todos";
import Todo from "./Todo";

export default function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" children={<Todos />} />
                    <Route path="/todo/:id" children={<Todo />} />
                </Switch>
            </Router>
        </div>
    );
}
// You can think of these components as "pages"
// in your app.

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}
