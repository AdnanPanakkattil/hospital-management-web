import { ApiClient } from "../api/Api"

export const appoinmentData = () => {
    return ApiClient.get('/appoimentApi/')
}
