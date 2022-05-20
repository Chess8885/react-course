import logo from './logo.svg';
import './App.css';
import Employee from './Employee.js';

const data = [
    {
        name: 'alex',
        surname: 'ohayon',
        age: '22',
        location: 'hubsy coffee',
    },
    {
        name: 'julien',
        surname: 'rooroo',
        age: '28',
        location: 'hubsy coffee',
    },
    {
        name: 'bicheur',
        surname: 'katia',
        age: '42',
        location: 'hubsy coffee',
    },
];

function App() {
    const { name, surname, age, location } = data;
    return (
        <div>
            <Employee name="toto" surname="titi" age="42" location="ny" />

            {data.map((employee) => (
                <p>{employee.name}</p>
            ))}

            {data.map((employee) => {
                return <Employee {...employee} />;
            })}
        </div>
    );
}

export default App;
