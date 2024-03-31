import React from "react";
import StudentTable from "./StudentTable";

export default function StudentData() {
  return (
    <div className="  mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Student Data</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4">
          <StudentTable />
        </div>
      </div>
    </div>
  );
}
