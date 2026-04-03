import { HiArrowRightEndOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { logout, isLogingOut } = useLogout();

  return (
    <ButtonIcon onClick={logout} disabled={isLogingOut}>
      {isLogingOut ? <SpinnerMini /> : <HiArrowRightEndOnRectangle />}
    </ButtonIcon>
  );
}

export default Logout;
