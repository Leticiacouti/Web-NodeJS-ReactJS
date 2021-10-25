import React, { useState , useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import moment from 'moment';
import './index.css';

interface IRecord{
    id: number;
    name: string;
    ra: string;
    dt_birth: Date;
    address: string;
    registered: boolean;
    age: number;
}

const Records: React.FC = () => {
    
    const [records, setRecords] = useState<IRecord[]>([])
    const history = useHistory()

    useEffect(() => {
        loadRecords()
    }, [])

    async function loadRecords() {
        const response = await api.get<[]>('/Records')
        console.log(response);
        setRecords(response.data);
    }

    function formatDate(date: Date){
        return moment(date).format('DD/MM/YYYY')
    }

    function newRecord(){
        history.push('/alunos_cadastro')
    }

    function editRecord(id: number){
        history.push(`/alunos_cadastro/${id}`)
    }

    function viewRecord(id: number){
        history.push(`/record/${id}`);
    }

    async function finishedRegistered(id: number){
        await api.patch(`/registered/${id}`);
        loadRecords();
    }

    async function deleteRecord(id: number){
        await api.delete(`/record/${id}`);
        loadRecords();
    }

    return(
        <div className="container">
            <br />
            <div className="record-header">
                <h1>Cadastros</h1>
                <Button variant="dark" size="sm" onClick={newRecord}>Novo Cadastro</Button>
            </div>
            <br />
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>RA</th>
                    <th>Data de Nascimento</th>
                    <th>Endereço</th>
                    <th>Matriculado</th>
                    <th>Idade</th>
                    <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map(record => (
                            <tr key={record.id}>
                                <td>{record.id}</td>
                                <td>{record.name}</td>
                                <td>{record.ra}</td>
                                <td>{formatDate(record.dt_birth)}</td>
                                <td>{record.address}</td>
                                <td>{record.registered ? "Matriculado(a)" : "Desmatriculado(a)"}</td>
                                <td>{record.age}</td>
                                <td>
                                    <Button size="sm" variant="primary" onClick={() => editRecord(record.id)}>Editar</Button>{' '}
                                    <Button size="sm" variant="success" onClick={() => finishedRegistered(record.id)}>Desmatricular</Button>{' '}
                                    <Button size="sm" variant="warning" onClick={() => viewRecord(record.id)}>Visualizar</Button>{' '}
                                    <Button size="sm" variant="danger" onClick={() => deleteRecord(record.id)}>Remover</Button>{' '}
                                </td>
                            </tr>    
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default Records;