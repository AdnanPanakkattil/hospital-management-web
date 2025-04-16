import { useMutation } from "react-query"
import { useCreateaAppoinmentData } from "./AppoinmentApi"


export const useCreateaAppoinment = ()=>{
    return useMutation((data) =>useCreateaAppoinmentData(data))
}