import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export default function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateSetting } = useMutation({
    mutationFn: (newSetting) => updateSettingApi(newSetting), // this is the function that will be excuted behind the senses but we will implement it using updateSetting({the object})
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["settings"] });
      toast.success("The settings are successfully updated");
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateSetting };
}
