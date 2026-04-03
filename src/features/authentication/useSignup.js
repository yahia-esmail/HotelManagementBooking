import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isPending: isSigningUp } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(`New account has been created`);
      navigate("/", { replace: true });
    },
    onError: (err) => toast.error(err.message),
  });
  return { signup, isSigningUp };
}
