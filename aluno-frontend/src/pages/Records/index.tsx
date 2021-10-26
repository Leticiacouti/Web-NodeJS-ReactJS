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
        const response = await api.get<any>('/Records')
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
        history.push(`/cadastros/${id}`);
    }

    async function finishedRegistered(id: number){
        await api.patch(`/updateStatus/${id}`);
        loadRecords();
    }

    async function deleteRecord(id: number){
        await api.delete(`/Record/${id}`);
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
                        records.map(records => (
                            <tr key={records.id}>
                                <td>{records.id}</td>
                                <td>{records.name}</td>
                                <td>{records.ra}</td>
                                <td>{formatDate(records.dt_birth)}</td>
                                <td>{records.address}</td>
                                <td>{records.registered ? "Matriculado(a)" : "Desmatriculado(a)"}</td>
                                <td>{records.age}</td>
                                <td>
                                    <Button size="sm" variant="primary" onClick={() => editRecord(records.id)}>Editar</Button>{' '}
                                    <Button size="sm" variant="success" onClick={() => finishedRegistered(records.id)}>Desmatricular</Button>{' '}
                                    <Button size="sm" variant="warning" onClick={() => viewRecord(records.id)}>Visualizar</Button>{' '}
                                    <Button size="sm" variant="danger" onClick={() => deleteRecord(records.id)}>Remover</Button>{' '}
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