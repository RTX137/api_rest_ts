import { Request,Response } from "express";
import dbConnect from "../config/mongo";
import { handleHttp } from "../utils/error.handle";

const getItem = ({body}: Request, res:Response) => {
    try{
        res.send(body)
    }catch(e){
        handleHttp(res, 'ERROR_GET_BLOG')
    }
}
const getItems = ({body}: Request, res:Response) => {
    try{
        res.send(body)
    }catch(e){
        handleHttp(res, 'ERROR_GET_BLOG')
    }
}

const updateItem = ({body}: Request, res:Response) => {
    try{
        res.send(body)
    }catch(e){
        handleHttp(res, 'ERROR_GET_UPDATE_BLOG')
    }
}

const postItem = ({body}: Request, res:Response) => {
    try{
        res.send(body)
    }catch(e){
        handleHttp(res, 'ERROR_GET_POST_BLOG')
    }
}

const deleteItem = ({body}: Request, res:Response) => {
    try{
        res.send(body) 
    }catch(e){
        handleHttp(res, 'ERROR_GET_DELETE_BLOG')
    }
}

export {getItem, getItems ,postItem, updateItem, deleteItem}
