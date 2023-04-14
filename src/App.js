import './App.css';
// import Usuario from './componentes/Usuario';
//import Acceder from './componentes/Acceder';
import Imgmeme from './componentes/Imgmeme';
import Cookies from './componentes/Cookies';
function App() {
  return (
    <div className="App">
      
    {/* <Usuario></Usuario>
    <Usuario nombre="Sebastian" edad="37" cargo="Alumno" localidad="CABA" />
    <Usuario nombre="Carlos Antonio" edad="76" cargo="Profesor" localidad="Pacheco" />
    <Usuario nombre="Oscar" edad="52" cargo="Chofer" localidad="Ramos Mejia" />
    <Usuario nombre="Marta" />
    
    <Acceder nombre="Juan Carlos" tieneAcceso={true} />
    */}
    <Cookies />
    <Imgmeme />


    </div>
  );
}

export default App;
