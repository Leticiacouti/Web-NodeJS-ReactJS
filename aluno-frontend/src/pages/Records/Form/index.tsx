import React, { useState, ChangeEvent, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import api from '../../../services/api';
import './index.css';
import { useHistory, useParams } from 'react-router-dom';

interface IRecord{
    name: string;
    address: string;
}

const Records: React.FC = () => {
    
    const history = useHistory()
    const { id } = useParams<{ id: string }>()

    const [model, setModel] = useState<IRecord>({
        name: '',
        address: ''
    })

    useEffect(() => {
        console.log(id)
        if (id != undefined) {
            findRecord(id)
        }
    }, [id])

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()

        if(id != undefined) {
            const response = await api.put(`/records/${id}`, model)
        }
        else{
            const response = await api.post('/records', model)
        }
        back()
    }

    function back(){
        history.goBack()
    }

    async function findRecord(id: string){
        const response = await api.get(`records/${id}`)
        console.log(response)
/*         setModel({
            name: response.data["name"],
            address: response.data["address"]
        }) */
    }

    return(
        <div className="container">
            <br/>
            <div className="record-header">
                <h1>Novo Cadastro</h1>
                <Button variant="dark" size="sm" onClick={back}>Voltar</Button>
            </div>
            <br/>
            <div className="container">
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" name="name" value={model.name} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control type="text" name="address" value={model.address} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                    </Form.Group>

                    <Button variant="dark" type="submit">Salvar</Button>
                </Form>
            </div>
        </div>
    );
}

export default Records;