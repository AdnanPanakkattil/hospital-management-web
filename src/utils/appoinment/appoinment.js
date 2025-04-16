import { ApiClient } from "../api/Api"

export const AppoinmentData = () => {
    return ApiClient.get('AppoinmentApi/')
}