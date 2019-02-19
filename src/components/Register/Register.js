import React from 'react';
//import './SignIn.css';
//import '';

const Register = ({onRouteChange}) => {
    return (
        <article className="br2 ba bg-near-white dark-gray b--black-10 mv5 w-100 w-50-m w-25-l mw6  center shadow-5 white">
            <main className="pa5 black-80">
                <div className="measure ">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0" >
                        <legend className="f1 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib"
                         type="submit" value="Register"  
                         onClick={() => onRouteChange('home')} />
                    </div>
                    {/* siempre que haya un form, cuando se apriete algun submit va a automaticamente agrupar y enviar esos valores, entonces lo ponemos en un div en lugar
                    de un <form> */}
                </div>
            </main>
        </article>
    );
    
}

export default Register; 