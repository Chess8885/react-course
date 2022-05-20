import React, {useState} from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todos from "./Todos";
import Todo from "./Todo";
import store from './redux/configureStore';
import Counter from "./counter";
import {useSelector} from "react-redux";

export default function App() {
    const count = useSelector((state) => state.counter.count);
    return (
        <div>
            <h2>redux made easy</h2>
                <p>{count}</p>
            <Counter/>
        </div>
    );
}

{ /*
export default function App() {
    const [count, setCount] = useState(0);

    const addCounter = () => {
        setCount(count+1);
    }
    const removeCounter = () => {
        setCount(count-1);
    }
    return (
        <div>
            <h2>redux made easy</h2>
            <p>{count}</p>
            <button onClick={addCounter}>add count</button>
            <button onClick={removeCounter}>rem count</button>
        </div>
    );
}
 */}