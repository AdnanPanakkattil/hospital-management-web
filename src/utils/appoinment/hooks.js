import { useMutation } from "react-query"
import { creategetappoimentData } from "./appoimentDataApi"


export const useCreateappoinment = ()=>{
    return useMutation((data)=>creategetappoimentData(data))
}