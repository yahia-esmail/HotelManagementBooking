import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("Cabin is successfully deleted");
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteCabin };
}
