import { useQuery } from "@tanstack/react-query"
import api from "../service/api"

const useSearchProdcutList = ()=>{
    const {isLoading,data} = useQuery({
        queryKey:["product-search-list"],
        queryFn:()=>api.get("/cars/all/search").then(res=>res.data),
        
    })
    

    return {isLoading,data}
}
export default useSearchProdcutList

