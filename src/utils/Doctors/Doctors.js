 import { ApiClient } from "../api/Api"

 export const DoctorsData = () => {
    return ApiClient.get('/DoctorsApi/')
 }
