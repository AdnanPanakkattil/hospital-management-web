 import { ApiClient } from "../api/Api"

 export const getDoctorsData = () => {
    return ApiClient.get('/DoctorsApi/')
 }
