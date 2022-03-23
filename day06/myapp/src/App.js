import logo from './logo.svg';
import './App.css';
import Employee from './Employee';

const employees = [
    {
        name: 'alex',
        id: '0',
    },
];

export function App() {
    const firstEmployee = employees[0];
    const additionalInfos = {
        company: 'EPITECH',
        year: '4',
    };
    const spreadingMiddle = {...additionalInfos, ...firstEmployee};
    return (
        <div>

            <Employee {...spreadingMiddle}/>

        </div>
    );
}

export default App;
