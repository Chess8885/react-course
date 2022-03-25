import './App.css';
import {useEffect, useState} from "react";

export function App() {

    useEffect(() => {
        console.log(`component is mounted`);
        return () => {
            console.log(`component is unmounted`);
        };
    });

    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div>

            <p> Please log in to continue.</p>

            <button onClick={() => setLoggedIn(!loggedIn)}>
                {loggedIn ? "Log out." : "Log In"}
            </button>

            {loggedIn ? (
                <h1>welcome !</h1>
            ) : (

                <h1>please log in to continue</h1>
            )}

        </div>
    );
}

export default App;
