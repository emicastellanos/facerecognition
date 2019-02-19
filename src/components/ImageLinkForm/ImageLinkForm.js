import React from 'react'
import './ImageLinkForm.css'


const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
/* podria definirlo como props.onInputChange pero de esta forma ya lo traigo desarmado de las props */
    return (
        <div>
            <p className='f3' >
             {'This magic brain will detect faces in your pictures perrito!'}
            </p>
        
            <div className='center'> {/*esa clase center la creamos en App.css */}
                <div className='form center pa4 br3 shadow-5 wl'> {/*si no esta el center, se coloca cada elemento uno debajo del otro */}
                    <input type='text' className='f4 pa2 w-70 center' onChange={onInputChange} />{/*size of 4 (f), padding of 2,w-70 agarra el 70% del ancho(with) */}
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit} >Detect</button>
                    {/* with of 30%, grow when its hover  */}
                </div>
            </div>
        </div>
    );

}

export default ImageLinkForm;