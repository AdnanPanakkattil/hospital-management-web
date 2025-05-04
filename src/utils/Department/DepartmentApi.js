import { ApiClient } from "../api/api"

export const getDepartmentData = () => {
    return ApiClient.get('DepartmentApi/')
}