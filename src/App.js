import React, {Component} from 'react';
import Header from "./componentes/Header";
import AgregarCita from "./componentes/AgregarCita";
import ListaCitas from "./componentes/ListaCitas";

class App extends Component {

    state = {
        citas: []
    };

    componentDidMount() {
        const citasLS = localStorage.getItem('citas')
        if(citasLS) {
            this.setState({
                citas: JSON.parse(citasLS)
            })
        }
    }

    componentDidUpdate() {
        localStorage.setItem(
            'citas',
            JSON.stringify(this.state.citas)
        )
    }

    crearCita = (nuevaCita) => {
        // copia de nuestro array citas de arriba si al comienzo de nuestro array añadimos nuevaCita, añadiría la cita al ppcio
        const citas = [...this.state.citas, nuevaCita];

        console.log(citas);

        // reescribir la propiedad del state
        this.setState({
            citas
        })
    };

    borrarCita = id => {

        console.log(id);
        // Obtener copia del state
        const citasActuales = [...this.state.citas];

        // Borrar el elemento del state
        const citas = citasActuales.filter(cita => cita.id !== id);

        // Actualizar el state
        this.setState({
            citas
        })
    };

    render() {
        return (
            <div className="container">
                <Header
                    titulo={'Administrador de Pacientes de Veterinaria'}
                />
                <div className="row">
                    <div className="col-md-6">
                        <AgregarCita
                            crearCita={this.crearCita}
                        />
                    </div>
                    <div className="col-md-6">
                        <ListaCitas
                            citas={this.state.citas}
                            borrarCita={this.borrarCita}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
