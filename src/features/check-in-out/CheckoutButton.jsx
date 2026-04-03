import { useQueryClient } from "@tanstack/react-query";
import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();
  const queryClient = useQueryClient();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() =>
        checkout(bookingId, {
          onSettled: () => queryClient.invalidateQueries(),
        })
      }
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
