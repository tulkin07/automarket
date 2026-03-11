import { useQuery } from "@tanstack/react-query"
import api from "../service/api"

const useProdcutDetails = ({ id }) => {
    const { isLoading, data } = useQuery({
        queryKey: ["product-details"],
        queryFn: () => api.get(`/cars/get/${id}`).then(res => res.data),
        enabled: !!id,
        retry: 2

    })


    return { isLoading, data }
}
export default useProdcutDetails