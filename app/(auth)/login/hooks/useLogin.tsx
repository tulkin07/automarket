import api from "@/app/service/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useLogin = () => {
  const { isPending, mutate } = useMutation({
    mutationFn: (data: { phone: string; password: string }) =>
      api.post("/auth/login", data).then((data) => data.data),
    onSuccess: (data) => {
      localStorage.setItem("automarketToken", data?.token);
      window.location.href = "/";
    },
    onError: (error) => {
      // alert("Error");
      toast(error?.message,{type:"error"});
    },
  });
  return { mutate, isPending };
};
export default useLogin;
