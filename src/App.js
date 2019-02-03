import React, {Component} from 'react';
import Header from "./componentes/Header";
import AgregarCita from "./componentes/AgregarCita";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header
                    titulo={'Administrador de Pacientes de Veterinaria'}
                />
                <div className="row">
                    <div className="col-md-6">
                        <AgregarCita/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
