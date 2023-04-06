import './styles/usuario.css';

export default function Usuario(props) {
  return (
    <div>
        {/*
        <h3>Nombre: {props.nombre}</h3>
        <p>Edad: {props.edad}</p>
        <p>Localidad: {props.localidad}</p>
        
        */}

        <div className="card mb-3" style={{width : "18rem"}}>
            <div className="card-body ">
                <h5 className="card-title">Nombre: {props.nombre}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Edad: {props.edad}</h6>
                <p style={{backgroundColor : "red"}} className="card-text">Localidad: {props.localidad}</p>
            </div>
        </div>

    </div>
  )
}
