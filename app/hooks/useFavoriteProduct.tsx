import api from "@/app/service/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useFavoriteCar = () => {
  const { isPending, mutate } = useMutation({
    mutationFn: (data:any) =>
      api.post(`/favorites/${data?.id}`, data).then((data) => data.data),

  });
  return { mutate, isPending };
};
export default useFavoriteCar;
