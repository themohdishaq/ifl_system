import { useMemo, useState } from "react";
import {
  MRT_EditActionButtons,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { DialogTitle, DialogContent, DialogActions } from "@mui/material"; // Import the necessary components from Material-UI

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const Example = () => {
  const [validationErrors, setValidationErrors] = useState({});

  const getCases = async () => {
    try {
      const url =
        "http://localhost:3333/ifl_system/studentCase/student/get_all_requests_by_student";
      const response = await axios.get(url, {
        headers: {
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzMjExNGZhMjBiYmNhZjY4NTRkMThmIn0sImlhdCI6MTcxNDczNjQxNH0.Gfzbn1HF71FZm1AcOn-ZyrioiqQLK1jrECzVEUh9yI4",
        },
      });

      if (!response.data) {
        throw new Error("Error fetching student");
      }

      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const { isPending, data } = useQuery({
    queryKey: ["request_cases"],
    queryFn: getCases,
  });

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        enableEditing: false,
        size: 80,
      },
      {
        accessorKey: "title",
        header: "Title",
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.title,
          helperText: validationErrors?.title,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              title: undefined,
            }),
        },
      },
      {
        accessorKey: "description",
        header: "Description",
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.description,
          helperText: validationErrors?.description,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              description: undefined,
            }),
        },
      },
      {
        accessorKey: "status",
        header: "Status",
        editVariant: "select",
        editSelectOptions: ["Active", "Inactive"],
        muiEditTextFieldProps: {
          select: true,
          error: !!validationErrors?.status,
          helperText: validationErrors?.status,
        },
      },
    ],
    [validationErrors]
  );

  const table = useMaterialReactTable({
    columns,
    data,
    getRowId: (row) => row.id,
    muiToolbarAlertBannerProps: isPending
      ? {
          color: "error",
          children: "Error loading data",
        }
      : undefined,
    muiTableContainerProps: {
      sx: {
        minHeight: "500px",
      },
    },

    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Create New User</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          {internalEditComponents}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),

    renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Edit User</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {internalEditComponents}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
  });

  return (
    <>
      <MaterialReactTable table={table} />
    </>
  );
};

export default Example;
