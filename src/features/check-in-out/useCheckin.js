import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isPending: isCheckingIn, mutate: checkin } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      (queryClient.invalidateQueries({ queryKey: ["bookings"] }), // or pass active true
        toast.success(`Booking ${data.id} successfully checked in`));
      navigate("/");
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCheckingIn, checkin };
}
