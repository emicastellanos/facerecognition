import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imgUrl, box}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputImage' alt='' src={imgUrl} width='500px' heigh='auto'/>
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, left:box.leftCol, bottom: box.bottomRow }} >
                {/* a la clase bounding-box le estamos pasando unos margenes respecto de la imagen. Los margenes son lo que nos aleja de los bordes
                 El margen right dice que el elemento va a tener cierto distancia de su margen derecho  (AUNQUE NO SON MARGENES PER SE, es decir margin-top y eso):
                 If position: absolute; or position: fixed; - the top property sets the top edge of an element to a unit above/below the top edge of its nearest positioned ancestor.
                 If position: absolute; or position: fixed; - the left property sets the left edge of an element to a unit to the left of the left edge of its nearest positioned ancestor.
                 If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor.
                 */}
                </div>
            </div>
            

        </div>
    )


}

export default FaceRecognition;