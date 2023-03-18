import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useFetcher = (url) => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    isLoading,
    data,
    error,
  };
};

export default useFetcher;
