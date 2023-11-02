import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";

export const useRute = (from, to, deppartDate) => {
  return useQuery({
    queryFn: async () => {
      const response = await axiosInstance.get(
        `/searchrute?from=${from}&to=${to}&deppart_at=${deppartDate}`
      );

      return response
    },
  });
};
