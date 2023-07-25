import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { login as loginAPI } from "../../services/apiAuth";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginAPI,
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Logged in successfully!");
      navigate("/");
    },
  });

  return { login, isLoading };
}
