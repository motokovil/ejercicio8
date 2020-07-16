import React from 'react';
import './css/form.css';
export default class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
            <div className='align'>
                <form >
                    <input 
                        type='text' 
                        name='name' 
                        placeholder='Nombre'
                        onChange={this.props.inputData}
                    />

                    <input
                        type='text' 
                        name='lastname' 
                        placeholder='Apellido'
                        onChange={this.props.inputData}
                    />

                    <input
                        type='email' 
                        name='email' 
                        placeholder='Correo'
                        onChange={this.props.inputData}
                    />

                    <input
                        type='password' 
                        name='password' 
                        placeholder='Contraseña'
                        onChange={this.props.inputData}
                    />

                    <input type='submit' onClick={this.props.formData}></input>
                </form>
            </div>
        )
    }
}