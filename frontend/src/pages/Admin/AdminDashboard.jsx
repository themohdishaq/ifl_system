import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function AdminDashboard() {
  const getRequestedCases = async ({ cases: sampleCases }) => {
    try {
      const url =
        "http://localhost:3333/ifl_system/adminCase/admin/get-all-requested-cases";
      const response = await axios.get(url, {
        headers: {
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzM2IyMzllZjNkYjc0NTQ2ODVhZTgwIn0sImlhdCI6MTcxNDg4OTM3MX0.HIytg1MT-f_TVj025gurI-vkV2GiUM43I-ZSDv4NRno",
        },
      });
      if (!response.data) {
        throw new Error("Error fetching requested cases");
      }
      return response.data || [];
    } catch (error) {
      console.log(error);
      return {};
    }
  };
  const { data: cases } = useQuery({
    queryKey: ["cases"],
    queryFn: getRequestedCases,
  });

  return <div>{cases && console.log(cases)}</div>;
}
