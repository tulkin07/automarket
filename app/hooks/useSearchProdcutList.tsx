import { useQuery } from "@tanstack/react-query"
import api from "../service/api"
import { useSearchParams } from "next/navigation"

const useSearchProdcutList = () => {

    const param = useSearchParams()

    const params = new URLSearchParams(param.toString())
    const minPrice = params.get("minPrice")
    const maxPrice = params.get("maxPrice")
    const maxYear = params.get("maxYear")
    const minYear = params.get("minYear")
    const fuelType = params.getAll("fuel")
    const transmission = params.getAll("transmission")
    const brands = params.getAll("brands")
    const color = params.getAll("color")
    const keyword = params.getAll("text")
    const direction = params.getAll("direction")

    const { isLoading, data } = useQuery({
        queryKey: ["product-search-list", minPrice, maxPrice, fuelType, transmission, color, minYear, maxYear,brands,keyword,direction],
        queryFn: () => api.get("/cars/search?size=50", {
            params: {
                minPrice,
                maxPrice,
                fuelType,
                transmission,
                color,
                minYear,
                maxYear,
                brands,
                keyword,
                direction,
                sortBy:"price"
            }
        }).then(res => res.data),

    })


    return { isLoading, data }
}
export default useSearchProdcutList

