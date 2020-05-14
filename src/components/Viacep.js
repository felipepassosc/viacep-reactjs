import React, { Component } from 'react';
import api from '../services/api'
// import { Container } from './styles';

class Viacep extends Component {
    state = {
        cep: []
    }

    apiViacep = async () => {
        const cep = ['13206105']

        const response = await api.get(`/ws/${cep}/json/`)
        console.log(response.data)
        this.setState({
            cep: response.data
        })
    }

    handleInputChange = e => {
        this.setState({

        })
    }

    componentDidMount() {
        this.apiViacep()
    }

    render() {
        const { cep } = this.state;
        return (
            <>
                <h1>Viacep - React</h1>
                <p>{cep.cep}</p>
                <h3>{cep.logradouro}</h3>
                <h3>{cep.bairro}</h3>
                <h3>{cep.localidade}</h3>
                <h3>{cep.uf}</h3>
            </>
        )
    }
}

export default Viacep;