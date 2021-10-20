import React, { useState , useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import api from '../../services/api';
import moment from 'moment';

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


    useEffect(() => {
        loadRecords()
    }, [])

    async function loadRecords() {
        const response = await api.get('/Records')
        console.log(response);
        setRecords(response.data)
    }

    function formatDate(date: Date){
        return moment(date).format('DD/MM/YYYY')
    }

    return(
        <div className="container">
            <br />
            <h1>Página de Cadastros</h1>
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
                            <td>{record.registered ? "Matriculado" : "Pendente"}</td>
                            <td>{record.age}</td>
                            <td>
                            <Button size="sm" variant="primary">Editar</Button>{' '}
                            <Button size="sm" variant="success">Matricular</Button>{' '}
                            <Button size="sm" variant="warning">Visualizar</Button>{' '}
                            <Button size="sm" variant="danger">Remover</Button>{' '}
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