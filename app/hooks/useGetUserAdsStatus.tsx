import { useQuery } from "@tanstack/react-query"
import api from "../service/api"
import { UserAdsStatus } from "../(web)/profile/page"

const useGetUserAdsStatus = (status:UserAdsStatus) => {

  const { isLoading, data } = useQuery({
    queryKey: ["brand-list",status],
    queryFn: () => api.get(`/cars/${1}/ads/${status}`).then(res => res.data),
  })

 

  return { isLoading, data }
}

export default useGetUserAdsStatus