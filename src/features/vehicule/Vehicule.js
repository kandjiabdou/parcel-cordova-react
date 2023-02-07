function Vehicule({roue, nbPassager}) {
    if(roue < 2) {
        throw new Error(`Il ne peut pas y avoir moins de 2 roues à un véhicule`)
    }

    return (
        <div style={{ display : 'flex', flexDirection : 'column', border : '1px solid black', marginBottom : '20px'}}>
            <label>Nombre de roues :</label>
            <span>{roue}</span>
            <label>Nombre de passagers : </label>
            <span>{nbPassager}</span>
        </div>
    )
}

export default Vehicule;