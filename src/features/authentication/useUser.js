import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";

//get user from supabase and store it into cache
export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
