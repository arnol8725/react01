import React, { Component } from 'react';
import uuid from 'uuid';


const stateInicial = {
    cita:{
        mascota:'',
    propietario:'',
    fecha:'',
    hora:'',
    sintomas:''
    },
    error: false
    

};

class Nuevacita extends Component {

    state = {...stateInicial}   
  
  constructor(props) {
    super(props);
    
  }

  handleChange = e => {
       
        this.setState({
            cita : {
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        })
       
  }
  handleSubmit = e => {
      e.preventDefault();
     

      //extraer los valores del state
      const {mascota,propietario,fecha, hora, sintomas} = this.state.cita;
      

      // validar que todos los camnpos esten llenos 
        if (mascota === '' || propietario === '' || fecha === '' || hora === '' ||  sintomas === '') {
            this.setState({
                error: true
            });
            //detener la ejecucion
         
            return;
        }

     //generar objeto con los datos 
     const nuevoCita = {...this.state.cita};
     nuevoCita.id = uuid();

     console.log(nuevoCita);

      //Agregar la cita al state de App
      this.props.llenarcita(nuevoCita);

      //Colocar el state el stateInicial
      console.log('stateInicial'+stateInicial);
      console.log(stateInicial);
      this.setState({
          ...stateInicial
      });

      

      

  }
  handleSubmits = e => {
        alert('handleSubmits');
  }

  render() {

    const {error} = this.state;

    return (
        <div className="card mt-5 py-5">
                <div className="card-body">
                        <h1 className="card-title text-center mb-5">
                            Llena el formulario  para crear  una nueva citas
                        </h1>

                        {error ? <div className="alert alert-danger mt-2 mb-2 text-center">Todos los campos son obligatorios </div>:null}

                        <form  onSubmit={this.handleSubmit}>
                                 <div className="form-group row">
                                    <label className="col-sm-4 col-lg-2 col-form-label">Nombre mascota</label>
                                    <div className="col-sm-8 col-lg-10">
                                        <input 
                                            type="input"
                                            className="form-control"
                                            placeholder="Macota"
                                            name = "mascota"
                                            onChange={this.handleChange}
                                            value  = {this.state.cita.mascota}
                                        />
                                    </div>
                                    </div>

                                    <div className="form-group row">
                                    <label className="col-sm-4 col-lg-2 col-form-label">Nombre dueño </label>
                                    <div className="col-sm-8 col-lg-10">
                                        <input 
                                            type="input"
                                            className="form-control"
                                            placeholder="Macota dueño mascota"
                                            name = "propietario"
                                            onChange={this.handleChange}
                                            value  = {this.state.cita.propietario}
                                        />
                                    </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                                        <div className="col-sm-8 col-lg-4">
                                            <input 
                                                type="date"
                                                className="form-control"
                                                name = "fecha"
                                                onChange={this.handleChange}
                                                value  = {this.state.cita.fecha}
                                            />
                                        </div>
                                        <label className="col-sm-4 col-lg-2 col-form-label">Time</label>
                                    <div className="col-sm-8 col-lg-4">
                                        <input 
                                            type="time"
                                            className="form-control"
                                            name = "hora"
                                            onChange={this.handleChange}
                                            value  = {this.state.cita.hora}
                                        />
                                    </div>
                                    </div>
                                    <div className="form-group row">
                                    <label className="col-sm-4 col-lg-2 col-form-label">Sintomas </label>
                                    <div className="col-sm-8 col-lg-10">
                                    <textarea 
                                        className="form-control"
                                        placeholder="Sintomas de la mascota"
                                        name = "sintomas"
                                        onChange={this.handleChange}
                                        value  = {this.state.cita.sintomas}
                                    >
                                    </textarea>
                                      
                                    </div>
                                    </div>

                                  

                                    
                                    <input type="submit"  className="py-3 mt-2 btn btn-success btn-block" defaultValue="Agregar nueva cita" />           
                                
                        </form>
                        

                </div>
        </div>
    );
  }
}

export default Nuevacita;
