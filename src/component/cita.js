

import React, { Component } from 'react';


const Cita = ({cita,eliminar}) => (
    <div className="media mt-3">
        <div className="media-body">
            
            <h1 className="mt-0">
                {cita.mascota}
            </h1>
            <p className="card-text"><span>Nombre del Dueño</span> {cita.propietario} </p>
            <p className="card-text"><span>Fecha</span> {cita.fecha} </p>
            <p className="card-text"><span>Hora</span> {cita.hora} </p>
            <p className="card-text"><span>Sintomas</span></p>
            <p className="card-text"><span>Sintomas</span> {cita.sintomas} </p>
            <input type="submit" onClick={ () => eliminar(cita.id)  }  className="py-3 mt-2 btn btn-success " defaultValue="Agregar nueva cita" />           
            
        </div>
     </div>
);

export default Cita;


