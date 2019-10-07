import React from 'react';
import Cita from './cita';

const ListaCitas= ({citas,eliminar}) => {

    const mensajes =  Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra las citas aqui';

        return (
            <div className="card mt-2 py-5" >
                <div className="card-body">
                    <h5 className="card-title text-center">{mensajes}</h5>
                    <div className="lista-citas" >
                        {
                            citas.map(cita => (
                                <Cita 
                                    key={cita.id}
                                    cita={cita}
                                    eliminar= {eliminar}
                                />
                        ))}
                    </div>
                </div>
             </div>
    
        
   
        )};

export default ListaCitas;




