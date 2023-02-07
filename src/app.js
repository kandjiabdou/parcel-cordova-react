import { useEffect,useState } from "react";
import ListVehicules from "./features/vehicule/ListVehicules";
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function Welcome2({ name, children }) {
    return name == 'Sara' ? <h1>{children}</h1> : <h1 onClick={() => alert(`${name}`)}>Hello, {name}</h1>;
}

function ListNumbers() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
        <li key={number}>{number}</li>
    );

    return listItems;
}

function App() {
    //var [date, setDate] = useState(new Date().toLocaleTimeString());
    /*
    const [nbRoue, setNbRoue] = useState(4);
    const changeNbRoue = () => setNbRoue(nbRoue + 1);
    */
   const vehicules = [
        {roue : 4, nbPassager : 2},
        {roue : 3, nbPassager : 3},
        {roue : 2, nbPassager : 1}
   ]
    return (
        <div style={{width : "300px", margin : 'auto', marginTop : '20px'}}>
            <ListVehicules vehicules={vehicules}/>
        </div>
    )
}

export default App;