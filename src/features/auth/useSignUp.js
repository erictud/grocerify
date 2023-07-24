import { useMutation } from "react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignUp() {
  const { isLoading, mutate: signup } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      toast.success("User created successfully!");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { signup, isLoading };
}
