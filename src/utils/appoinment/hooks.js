import { useMutation } from "react-query"
import { creategetApooinmentData } from "./AppoinmentApi"

export const useCreateAppoinment = ()=>{
    return useMutation((data)=>creategetApooinmentData(data))
}