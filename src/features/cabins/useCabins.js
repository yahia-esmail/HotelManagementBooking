import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export default function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"], //when we use reactquery again with that key the same data will be read from the cache
    queryFn: getCabins, // responsible for quering (fetching the data from the api) , needs to return a promise
  });
  return { isLoading, cabins, error };
}
