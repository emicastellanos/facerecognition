import React, {Component} from 'react';
//import './SignIn.css';
//import '';

//1 - generé ese signin buscando alguno "tachyons"
//2 - quiero que el sign in este adentro de una tarjeta: tachyons card (necesitamos solos los limites para el article que envuelve todo, no el contenido)
//  - tambien le borro la gilada que no vamos a usar: Forgot your password?, Remeber me ...

//


class SignIn extends Component {

    constructor(){
        super();
        this.state = {
            signInEmail:'',
            signInPassword:'',
        }
    }

    onEmailChange = (event)  => {
        this.setState({signInEmail: event.target.value});
    }

    onPasswordChange = (event)  => {
        this.setState({signInPassword: event.target.value});
    }

    
    onSubmitSignIn = () =>{
        fetch('http://localhost:3000/signin', {
            method: 'post', 
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                email:this.state.signInEmail,
                password:this.state.signInPassword,
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('daa',data)
            if (data.id){
                console.log('llego succed', data);
                this.props.onRouteChange('home');
                this.props.loadUser(data);
            }else{
                this.props.onRouteChange('register');
            }
        })
        .catch(err => console.log('error',err))
        //this.props.onRouteChange('register'))
        
    }

    render () {
        const {onRouteChange} = this.props;

        return (
            <article className="br2 ba bg-near-white dark-gray b--black-10 mv5 w-100 w-50-m w-25-l mw6  center shadow-5 white">
                <main className="pa5 black-80">
                    <div className="measure ">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0" >
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                 type="email" name="email-address"  id="email-address" onChange={this.onEmailChange} />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                 type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
                            </div>
                        </fieldset> 
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib"
                             type="submit" value="Sign in"  
                             onClick={this.onSubmitSignIn} />
                        </div>
                        <div className="lh-copy mt3">
                            <p className="f5 link dim black db pointer" onClick={() => onRouteChange('register')} >Register</p>
                        </div>
                    </div>
                </main>
            </article>
        );

    }
    
}

export default SignIn; 