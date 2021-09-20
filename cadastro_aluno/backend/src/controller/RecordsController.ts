import { getRepository } from "typeorm";
import{ Records } from '../entity/Records';
import { Request, Response } from "express";
import { Console, log } from "console";

export const getRecords = async(request: Request, response: Response) =>
{
    const record = await getRepository(Records).find()
    return response.json(record);
};

export const saveRecord = async(request: Request, response: Response) =>
{
    const record = await getRepository(Records).save(request.body)
    return response.json(record);
};

export const getRecord = async(request: Request, response: Response) =>
{
    const {id} = request.params
    const record = await getRepository(Records).findOne(id)
    return response.json(record);
};

export const updateRecord = async(request: Request, response: Response) =>
{
    const {id} = request.params
    const record = await getRepository(Records).update(id, request.body)

    if(record.affected == 1){
        const recordUpdated = await getRepository(Records).findOne(id)
        return response.json(recordUpdated);
    }
    else{
        return response.status(404).json({message: 'Cadastro não encontrado!'})
    }
};

export const deleteRecord = async(request: Request, response: Response) =>
{
    const {id} = request.params
    const record = await getRepository(Records).delete(id)

    if(record.affected == 1){
        return response.status(200).json({message: 'Cadastro deletado com sucesso!'})
    }
    else{
        return response.status(404).json({message: 'Cadastro não encontrado!'})
    }
};

export const updateStatus = async(request: Request, response:Response) =>
{
    const {id} = request.params
    const record = await getRepository(Records).update(id, {registered:false,
    })

    if(record.affected == 1){
        const recordRegistered = await getRepository(Records).findOne(id)
        return response.json(recordRegistered);
    }
    else{
        return response.status(404).json({message: 'Cadastro não encontrado!'})
    }
};