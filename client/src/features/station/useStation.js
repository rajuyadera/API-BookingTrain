import { axiosInstance } from "../../lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useStation = () => {
  return useQuery({
    queryFn: async() => {
      const response = await axiosInstance.get("/station")
      
      return response
    },
  })
};
