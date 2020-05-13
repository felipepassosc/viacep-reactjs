import React, { Component } from 'react';
import api from '../services/api'
// import { Container } from './styles';

class Viacep extends Component {
    state = {
        cep: ''
    }

    apiViacep = async () => {

        const response = await api.get(`/ws/01001000/json/`)
        console.log(response.data)
        this.setState({
            cep: response.data
        })
    }

    componentDidMount() {
        this.apiViacep()
    }

    render() {
        const { cep } = this.state;
        return (
            <>
                <h5>Vagas Frontend</h5>
                {cep.map(repo => (
                    <p>{repo.cep}</p>
                    ))}
            </>
        )
    }
}

export default Viacep;