import React, {Component} from 'react';
import Header from "./componentes/header";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header
                    titulo = {'Administrador de Pacientes de Veterinaria'}
                />
            </div>
        );
    }
}

export default App;
