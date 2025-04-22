import { ApiClient } from "../api/Api";

export const getDepartmentData = () => {
    return ApiClient.get('DepartmentApi/')
}