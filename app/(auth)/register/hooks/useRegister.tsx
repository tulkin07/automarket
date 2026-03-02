import api from "@/app/service/api";
import { useMutation } from "@tanstack/react-query";
const useRegister = () => {
  const { isPending, mutate } = useMutation({
    mutationFn: (data: { phone: string; password: string; fullName: string }) =>
      api.post("/auth/register", data).then((data) => data.data),
    onSuccess: (data) => {
      localStorage.setItem("automarketToken", data?.token);
      window.location.href = "/login";
    },
    onError: () => {
      alert("Error");
    },
  });
  return { mutate, isPending };
};
export default useRegister;
