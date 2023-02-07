import Vehicule from "./Vehicule"
function ListVehicules({ vehicules }) {

    return (
        vehicules.map((vehicule,index) => <Vehicule {...vehicule} key={index}/>)
    )
}

export default ListVehicules