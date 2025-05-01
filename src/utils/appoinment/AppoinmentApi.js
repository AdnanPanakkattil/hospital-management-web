import { ApiClient } from "../api/api"


export const getAppoinmentData = () => {
    return ApiClient.get('AppoinmentApi/')
}

export const creategetAppoinmentData = (data)=>{
    return ApiClient.post('AppoinmentApi/',data)
}