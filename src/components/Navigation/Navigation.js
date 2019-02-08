import React from 'react'


const Navigation = () => {
    return (
        <nav style ={{display: 'flex', justifyContent: 'flex-end'}}>
            <p className='f3 link dim black underline pa3 pointer'>Sign out</p>
            {/* pa3 es padding de 3, f3 tamaño letra, dim es que se puede clickear, black el color, pointer para for when hover*, underline es que esta subrayado*/}
        </nav>
    )


}

export default Navigation;