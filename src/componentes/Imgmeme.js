import React, {useState} from 'react';
import html2canvas from 'html2canvas';

import './styles/imgmeme.css';

const Imgmeme = () => {


    const [textomeme, setTextomeme] = useState("");
    const [imgMeme, setImgMeme] = useState("");
    
    const textmeme = (ev) =>{
      setTextomeme(ev.target.value); 
      console.log(ev.target.value);
    }
    
    const seleccionarImg = (ev) => {
      setImgMeme(ev.target.value); 
      console.log(ev.target.value);
    }


    const descarga = (ev) => {
      html2canvas(document.getElementById('exportar')).then(function(canvas) {
          /*document.body.appendChild(canvas);*/
          

          let img = canvas.toDataURL("memesImg/png");
          let link = document.createElement("a");
          link.download = "memepropio.png";
          link.href = img;
          link.click();
      }); 
    }

  return (
    <div>
        <h1 className='mt-5 mb-3'>Edita tu propio meme</h1>
        
        <h2 className='mt-2 mb-3'>Escribi tu frase</h2>
        <input onChange={textmeme} className="form-control w-75 m-auto" type="text" placeholder="Pone tu frase" name="meme" value={textomeme} />

        <h2 className='mt-2 mb-3'>Elegi la imagen para tu meme</h2>

        <select onChange={seleccionarImg} className="form-select form-select-lg mb-3 w-75 m-auto" aria-label="Default select example">
            <option>Selecciona una imagen</option>
            <option value={6}>Futurama</option>
            <option value={7}>Bob Esponja</option>
            <option value={8}>Señora</option>
            <option value={9}>Calamardo</option>
        </select>

        <div>
          
        <figure id='exportar' className='mb-1 m-auto'>
       
        
          <p className='parrafo_superior position-absolute top-10'>{textomeme}</p>
          <img id='imgAltoAncho' src={`../memesImg/${imgMeme}.png`} alt="Meme" className='figure-img mt-3 d-block m-auto w-100' />
        </figure>
        </div>

        <button onClick={descarga} type="button" className='btn btn-primary mt-2 mb-2'>Descargar meme</button>



    </div>
  )
}

export default Imgmeme;