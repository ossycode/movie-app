import { useMutation } from "@tanstack/react-query";
import { updateUserPassword } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function usePasswordUpdate() {
  //   const queryClient = useQueryClient();
  const { mutate: updatePassword, isLoading: isUpdating } = useMutation({
    mutationFn: updateUserPassword,
    onSuccess: () => {
      toast.success("Password successfully updated");
    },
    onError: () =>
      toast.error("Something went wrong, could be incorrect credentials!"),
  });

  return { updatePassword, isUpdating };
}
