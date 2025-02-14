import { useRouter } from "next/navigation";

const useUpdateSearchParams = () => {
  const router = useRouter();
  const updateSearchParams = (key: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(key, value);

    const newPath = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPath);
  };
  return updateSearchParams;
};

export default useUpdateSearchParams;
