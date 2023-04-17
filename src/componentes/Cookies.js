import Swal from 'sweetalert2'
/*import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)*/

const Cookies = () => {

    Swal.fire({
        title: 'Bienvenido al generador de memes',
        width: 450,
        padding: '1em',
        color: '#716add',
        confirmButtonText: 'Aceptar',
        backdrop: `
          rgba(0,0,123,0.4)
          url("../images/nyan-arceus.gif")
          right top
          no-repeat
        `
      })


}

export default Cookies
