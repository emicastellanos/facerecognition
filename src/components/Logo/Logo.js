import React from 'react';
import Tilt from 'react-tilt';
import brain from './icons8-brain-52.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>{/* mt es margin top en 0 */}
            
            <Tilt className="Tilt br2 shadow-2 " options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            {/* le agregamos un poco de tychons: br2  border radio 2 shadow-2 es el sombreado*/}
                <div className="Tilt-inner pa3"> {/*padding of 3 */}
                    <img style={{paddingTop: '5px'}}  alt='logo' src={brain}>
                    </img>
                 </div>
            </Tilt>
        </div>
    )


}

export default Logo;