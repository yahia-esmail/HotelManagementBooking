import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { isPending: isDeletingBooking, mutate: deleteBooking } = useMutation({
    mutationFn: (bookingId) => deleteBookingApi(bookingId),
    onSuccess: (_, bookingId) => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      toast.success(`Booking ${bookingId} is successfully deleted`);
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeletingBooking, deleteBooking };
}
