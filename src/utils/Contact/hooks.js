import { useMutation } from "react-query"


export const useCreateaContact = ()=>{
    return useMutation((data)=>creategetContactData(data))
}