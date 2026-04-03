import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useCreateCabin() {
  const queryClient = useQueryClient();
  const {
    isPending: isCreating,
    mutate: createCabin /* the name with wich we use the function */,
  } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      toast.success("New cabin successfully added");
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createCabin };
}
