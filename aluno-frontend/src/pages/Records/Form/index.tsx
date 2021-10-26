import React, { useState, ChangeEvent, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import api from '../../../services/api';
import './index.css';
import { useHistory, useParams } from 'react-router-dom';

interface IRecord{
    name: string;
    ra: string;
    dt_birth: Date;
    address: string;
    age: number;
}

const Records: React.FC = () => {
    
    const history = useHistory()
    const { id } = useParams<{ id: string }>()

    const [model, setModel] = useState<IRecord>({
        name: "",
        ra: "",
        dt_birth: new Date(),
        address: "",
        age: 0o0
    })

    useEffect(() => {
        console.log(id)
        if (id !== undefined) {
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

        if(id !== undefined) {
            const response = await api.put(`/Record/${id}`, model)
        }
        else{
            const response = await api.post('/saveRecord', model)
        }
        back()
    }

    function back(){
        history.goBack()
    }

    async function findRecord(id: string){
        const response = await api.get<any>(`Record/${id}`)
        console.log(response)
        setModel({
            name: response.data.name,
            ra: response.data.ra,
            dt_birth: response.data.dt_birth,
            address: response.data.address,
            age: response.data.age
        });
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
                        <Form.Label>RA</Form.Label>
                        <Form.Control type="text" name="ra" value={model.ra} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Data de Nascimento</Form.Label>
                        <Form.Control type="date" name="dt_birth" value={model.dt_birth} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control type="text" name="address" value={model.address} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Idade</Form.Label>
                        <Form.Control type="number" name="age" value={model.age} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                    </Form.Group>

                    <Button variant="dark" type="submit">Salvar</Button>
                </Form>
            </div>
        </div>
    );
}

export default Records;