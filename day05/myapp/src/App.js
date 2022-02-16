import logo from './logo.svg';
import './App.css';
import Employee from './Employee';

const employees = [
    {
        name: 'alex',
        key: '0',
    },
    {
        name: 'erwan',
        key: '1',
    },
    {
        name: 'michael',
        key: '3',
    },
];

export function App() {
    return (
        <div>
            {employees.map((employee) => (
                <Employee name={employee.name} key={employee.key} />
            ))}
        </div>
    );
}

export default App;
