import React, {Component} from 'react';


class Register extends Component {

    constructor (){
        super();
        this.state = {
            registerEmail:'',
            registerPassword:'',
            registerName:''
        }

        //this.handleChange = this.handleChange.bind(this);
    }

    /* 
    esto estaria bueno usarlo para evitar tantos onMamboChange
    handleChange = (event) => {
        this.setState([event.target.name] = event.target.value)
    }
    */
    onEmailChange = (event)  => {
        this.setState({registerEmail: event.target.value});
    }

    onPasswordChange = (event)  => {
        this.setState({registerPassword: event.target.value});
    }

    onNameChange = (event) => {
        this.setState({registerName: event.target.value});
    }

    onSubmitSignIn = () =>{
        fetch('http://localhost:3000/register', {
            method: 'post', 
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                email:this.state.registerEmail,
                password:this.state.registerPassword,
                name:this.state.registerName,
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user){ //el metodo register devuelve el ultimo usuario agregado
                console.log('register.onSubmitSignIn',user); //este seria el usuario creado
                //usamos this.props porque estamos comunicandonos con el frontend (app.js) (esto es solo un componente que hace su trabajo y ya)
                if(user.id){//validacion para saber que la respuesta obtenida se trata de un usuario valido (tiene id)
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
                
            }
        })
    }

    render (){

        return (
            <article className="br2 ba bg-near-white dark-gray b--black-10 mv5 w-100 w-50-m w-25-l mw6  center shadow-5 white">
                <main className="pa5 black-80">
                    <div className="measure ">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0" >
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">name</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="text" name="name"  id="name" onChange={this.onNameChange} />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email_address">email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email" name="email_address"  id="email_address" onChange={this.onEmailChange}/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password" name="password"  id="password" onChange={this.onPasswordChange} />
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib"
                             type="submit" value="Register"  
                             onClick={this.onSubmitSignIn} />
                        </div>

                    </div>
                </main>
            </article>
        );

    }

}

export default Register; 