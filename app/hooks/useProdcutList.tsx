import { useQuery } from "@tanstack/react-query"
import api from "../service/api"

const useProductList = ()=>{
    const {isLoading,data} = useQuery({
        queryKey:["product-list"],
        queryFn:()=>api.get("/cars/approved?page=0&size=12").then(res=>res.data),
        
    })
    

    return {isLoading,data}
}
export default useProductList

