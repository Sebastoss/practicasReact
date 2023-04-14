import Swal from 'sweetalert2'
/*import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)*/

const Cookies = () => {

    Swal.fire({
        title: 'Bienvenido al generador de imágenes',
        width: 600,
        padding: '3em',
        color: '#716add',
        backdrop: `
          rgba(0,0,123,0.4)
          url("../images/nyan-arceus.gif")
          right top
          no-repeat
        `
      })


}

export default Cookies
