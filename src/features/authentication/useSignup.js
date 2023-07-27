import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useSignUp() {
  const navigate = useNavigate();

  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      navigate("/login");
      toast.success("Account successfully created");
    },
    onError: () => {
      toast.error("Something went wrong!");
    },
  });

  return { signUp, isLoading };
}
