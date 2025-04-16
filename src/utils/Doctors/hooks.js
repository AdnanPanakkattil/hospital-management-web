import { useMutation } from "react-query"
import { creategetDoctersData } from "./DoctorsApi"


export const useCreateaDoctors = ()=>{
    return useMutation((data)=>creategetDoctersData(data))
}