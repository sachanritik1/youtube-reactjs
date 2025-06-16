import { useQuery } from "@apollo/client";

const useGetUser = (GET_USER) => {
  const { data, loading, error } = useQuery(GET_USER);
  return { data, loading, error };
};

export default useGetUser;
