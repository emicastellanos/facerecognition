import React from 'react'


const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn){
        return(
            <nav style ={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signout')}
                className='f3 link dim black underline pa3 pointer'>Sign out</p>
                {/* pa3 es padding de 3, f3 tamaño letra, dim es que se puede clickear, black el color, pointer para for when hover*, underline es que esta subrayado*/}
            </nav>
        )
        
    } else {
        return(
            <nav style ={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign in</p>
            <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
            {/* pa3 es padding de 3, f3 tamaño letra, dim es que se puede clickear, black el color, pointer para for when hover*, underline es que esta subrayado*/}
        </nav>
        )
        
    } 
}

export default Navigation; 