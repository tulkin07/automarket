import { useQuery } from "@tanstack/react-query"
import api from "../service/api"
import { useSearchParams } from "next/navigation"

const useProductList = () => {
    const param = useSearchParams()

    const params = new URLSearchParams(param.toString())
    const size = params.get("size")
    const { isLoading, data } = useQuery({
        queryKey: ["product-list", size],
        queryFn: () => api.get("/cars/approved?size=" + (size || 12)).then(res => res.data),

    })


    return { isLoading, data }
}
export default useProductList

