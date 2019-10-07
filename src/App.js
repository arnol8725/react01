import React,{Component} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './component/header';
import Nuevacita from './component/nuevacita';
import ListaCitas from './component/listaCitas';

class App extends Component{
    state = {
      cita:[]
    }

    //Cuando la aplicacion carga completamenete
    componentWillMount(){
        const citasLS = JSON.parse(localStorage.getItem('citas'));

        if(citasLS){
          this.setState({
            cita : citasLS
          });
        }
        
       
    }
    //cuenado eliminamos o agregamos un a nueva <i class
    componentDidUpdate(){
      console.log('Entro componentDidUpdate');
      localStorage.setItem('citas',JSON.stringify(this.state.cita));
    }

    //Llenar state al padre  
    llenarcita = (cita) => {
     
      const citas= [...this.state.cita,cita];

          this.setState({
              cita : citas
          });

          console.log(this.state.cita);
    }
    eliminarCita = (id) => {
      const citas= [...this.state.cita];
          let citass = citas.filter( x => x.id != id);
          this.setState({
            cita : citass
          });
          
    }

    render(){
      //esctrar el valor del stare 

     

      return (
           <div className="container">
              <Header titulo='Administrador Pacientes Veterinaria'/>
              <div className="row">
                <div className="col-md-10 mx-auto">
                    <Nuevacita llenarcita={this.llenarcita}/>
                </div>
                <div className="col-md-10  mt-5 mx-auto">
                   <ListaCitas citas={this.state.cita} eliminar={this.eliminarCita}/>
                </div>
              </div>
              
           </div>
      );
    }

}

export default App;
