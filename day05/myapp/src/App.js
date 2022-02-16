import logo from './logo.svg';
import './App.css';
import Employee from './Employee';

const employees = [
    {
        name: 'alex',
        id: '0',
    },
    {
        name: 'erwan',
        id: '1',
    },
    {
        name: 'michael',
        id: '2',
    },
];

export function App() {
    return (
        <div>
            {employees.map((employee) => (
                <div key={employee.id}>
                    <Employee name={employee.name} id={employee.id} />
                </div>
            ))}
        </div>
    );
}

export default App;
