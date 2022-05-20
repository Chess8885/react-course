import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import { getUser } from "./redux/ducks/user";
import "./styles.css";
import axios from "axios";

export default function App() {
/*    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const user = useSelector((state) => state.user.user);*/

    const [user, setUser] = useState(undefined);

    useEffect(() => {
        axios.get(`http://localhost:8081/user`).then((res) => {
            const responseUser = res.data;
            setUser(responseUser);
        })
    }, []);

    const count = useSelector((state) => state.counter.count);
    console.log(count);
    const voters = [
        "Anthony Sistilli ",
        "Bob Smith",
        "Stephanie Foo",
        "Kevin Ma"
    ];
    return (
        <div className="App">
            {user && <h1> Hello, {user.firstName} </h1>}
            <h1>Redux made easy</h1>
            <h2> Total Votes: {count}</h2>
            {voters.map((voter) => (
                <Counter name={voter} />
            ))}
        </div>
    );
}
