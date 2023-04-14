import React, {useState} from 'react';
import html2canvas from 'html2canvas';
import Select from 'react-select';

import './styles/imgmeme.css';

const Imgmeme = () => {

  const [textomeme, setTextomeme] = useState("");
  const [imgMeme, setImgMeme] = useState(null);

  const options = [
    { value: 6, label: 'Futurama' },
    { value: 7, label: 'Bob esponja' },
    { value: 8, label: 'Señora' },
    { value: 9, label: 'Calamardo' },
  ];
    
  const textmeme = (ev) =>{
    setTextomeme(ev.target.value); 
    //console.log(ev.target.value);
  }

  // const seleccionarImg = (ev) => {
  //   setImgMeme(ev.target.value); 
  //   //console.log(ev.target.value);
  //   ocultarInput();
  // }

  const seleccionarImg = imgMeme => {
    setImgMeme(imgMeme.value);
    console.log(`Opción seleccionada:`, imgMeme);
    ocultarInput();
  };

  const ocultarInput = ()=>{
    const ocultar = document.querySelectorAll(".ocultar");
    if(ocultar[0] !== null){
      ocultar.forEach((element) => {
        element.classList.remove("ocultar");
      })          
    }
  }


  const descarga = (ev) => {
    html2canvas(document.getElementById('exportar')).then(function(canvas) {
        let img = canvas.toDataURL("image/jpeg", 0.75);
        let link = document.createElement("a");
        link.download = "memepropio.jpg";
        link.href = img;
        link.click();
    }); 
  }

  return (
    <div>

        <h1 className='pt-4 pb-4 m-0 bg-dark bg-gradient text-uppercase text-white'>¡Genera tu propio meme!</h1>

        <h2 className='pt-2 pb-2 bg-secondary bg-gradient text-bold fw-bold text-white'>Elige la imagen para tu meme</h2>
        

       {/* 
       --- Select Anterior a usar React-Select ---

       <select onChange={seleccionarImg} className="form-select form-select-lg mb-3 w-75 m-auto" aria-label="Default select example">
            <option>Selecciona una imagen</option>
            {options.map((option) =>(
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
        </select> */}

        <Select
        className='w-75 m-auto'
        value={imgMeme}
        onChange={seleccionarImg}
        options={options}
        isSearchable
        placeholder="Busca una imagen..."
        />
        
          
        
        <div className='ocultar'>
        <h2 className='pt-2 pb-2 mt-2 bg-secondary bg-gradient text-bold fw-bold text-white'>Escribe una frase</h2>
        <input onChange={textmeme} className="form-control w-75 m-auto" type="text" placeholder="Pone tu frase" name="meme" value={textomeme} />

        </div>

        <div className='ocultar'>
        
          <figure id='exportar' className='mb-1 m-auto'>

            <p className='parrafo_superior position-absolute top-10'>{textomeme}</p>
            {imgMeme !== null ? (
            <img id='imgAltoAncho' src={`../memesImg/${imgMeme}.webp`} alt="Meme" className='figure-img mt-3 d-block m-auto w-100' />
            ) : (<p>Espera que se cargue la imagen</p>)} 

          </figure>

        </div>

        <button onClick={descarga} type="button" className='ocultar btn btn-info btn-lg bg-gradient text-white mt-2 mb-2'>Descargar meme</button>

    </div>
  )
}

export default Imgmeme;