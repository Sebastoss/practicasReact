function AccesoAutorizado(props){
    return <h1>Bienvenido, {props.nombre} tienes acceso autorizado</h1>;
}

function AccesoNoAutorizado(props){
    return <h1>Hola, {props.nombre}, acceso no autorizado!</h1>;
}

export default function Acceder(props) {
    
const tieneAcceso = props.tieneAcceso;

if(tieneAcceso){
    return <AccesoAutorizado nombre={props.nombre} />;
}

return <AccesoNoAutorizado nombre={props.nombre} />;

}
