function AccesoAutorizado(props){
    return (
            <>
                <h1>Bienvenidos, {props.nombre} tienes acceso autorizado ahora mismo</h1>
                <p>Rama Develop</p>
            </>
    );
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
