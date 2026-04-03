import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
export function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  // filter
  const filterValue = searchParams.get("status") || "all";
  const filter =
    filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" };
  //end filter
  //sortBy
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };
  //end sortBy
  //pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  //end pagination
  //query
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page], // filter is just like the dependancy array of the useEffect, it stores in the cache every single filter value
    queryFn: () => getBookings({ filter, sortBy, page }),
  });
  //end query
  //preFetching
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, bookings, error, count, page };
}
