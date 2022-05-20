import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";


export function App() {
    const [todos, setTodos] = useState();


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => {
                const responseTodos = res.data;
                setTodos(responseTodos);
            })

        return () => {
            console.log(`component is unmounted`);
        };
    }, []);


    return (
        <div>

                <h1>Todo List</h1>

                { todos && todos.map((todo) => {
                    const { id, title, userId } = todo;
                    return (
                        <div key={id} >
                        <h5> { title } </h5>
                    <p> { userId } </p>
                        </div>
                )})}
        </div>
    );
}

export default App;
