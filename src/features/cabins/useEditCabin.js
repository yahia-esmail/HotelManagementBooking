import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useEditCabin() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id), // this is the function that will be excuted behind the senses but we will implement it using editCabin({the object})
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      toast.success("The Cabin is succussfully edited");
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editCabin };
}
