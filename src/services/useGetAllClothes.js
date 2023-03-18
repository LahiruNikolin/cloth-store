import useFetcher from "./useFetcher";

export default function useAllClothing() {
  const { isLoading, data, error } = useFetcher(
    "https://api.storerestapi.com/products"
  );
  // new api doesn't have a limit query param to apend to the api call, therefore i am limiting data on clientside
  return {
    isLoading,
    data: data?.data,
    error,
  };
}
