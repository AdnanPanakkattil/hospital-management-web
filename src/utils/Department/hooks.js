import { useMutation } from "react-query"
import { creategetDepartmentData } from "./DepartmentApi"

export const useCreateaDepartment = ()=>{
    return useMutation((data)=>creategetDepartmentData(data ))
}