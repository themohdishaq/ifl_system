import React from "react";
import CardNews from "./CardNews";
import AutorenewTwoToneIcon from "@mui/icons-material/AutorenewTwoTone";

export default function UserDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Notice Board</h1>
      <div className="flex items-center justify-center mb-6">
        <AutorenewTwoToneIcon className="text-blue-500 text-4xl cursor-pointer" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
      </div>
    </div>
  );
}
