import { ApiClient } from "../api/Api";

export const DepartmentData = () => {
    return ApiClient.get('DepartmentApi/')
}