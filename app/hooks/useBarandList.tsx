import { useQuery } from "@tanstack/react-query"
import api from "../service/api"

const useBarandList = () => {

  const { isLoading, data } = useQuery({
    queryKey: ["brand-list"],
    queryFn: () => api.get("/brands").then(res => res.data),
  })

  const brands = data?.map((item: { id: string; name: string }) => ({
    ...item,
    value: item.id,
    label: item.name,
  }))

  return { isLoading, brands }
}

export default useBarandList