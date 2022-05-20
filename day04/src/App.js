import logo from './logo.svg';
import './App.css';

const employee = {
    id: '1',
    name: 'alex',
    address: {
        street: '12 rue bibiiii',
        city: 'paris',
        last_locations: {
            location_0: 'reaumur',
            location_1: 'rambuteau',
            location_2: 'parmentier',
        },
    },
};

export function App() {
    const { id, name, address } = employee;
    const { street, city, last_locations } = address; //destructring object in object
    const { location_0, location_1, location_2 } = last_locations;
    return (
        <div>
            {name}
            {street}
            {location_0}
        </div>
    );
}

export default App;
