import { useQuery } from "@tanstack/react-query"
import api from "../service/api"

const useBarandOfModelList = (brandId:string|null) => {

  const { isLoading:IsLoadingModles, data:models } = useQuery({
    queryKey: ["model-list",brandId],
    queryFn: () => api.get(`/models/brand/${brandId}`).then(res => res.data),
    enabled:!!brandId
  })
  return { IsLoadingModles, models }
}

export default useBarandOfModelList