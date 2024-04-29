import axios from 'axios'

export const axiosInstance = async (method: string, endpoint: string, payload: any) => {
    try {
        const response = await axios({
            method,
            url: endpoint,
            data: payload
        })
        return response.data
    } catch (error) {
        return error
    }
}
