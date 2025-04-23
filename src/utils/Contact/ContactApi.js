import { ApiClient } from "../api/Api";

export const getContactData = () => {
    return ApiClient.get('ContactApi/')
}