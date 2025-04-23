import { useMutation } from "react-query"
import {creategetContactData} from "./ContactApi"


export const useCreateaContact = ()=>{
    return useMutation((data)=>creategetContactData(data))
}