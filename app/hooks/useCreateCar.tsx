import api from "@/app/service/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useCreateCar = () => {
  const { isPending, mutate:createCar } = useMutation({
    mutationFn: (data:any) =>
      api.post("/cars", data).then((data) => data.data),

  });
  return { createCar, isPending };
};
export default useCreateCar;
