import { useMemo, useState } from "react";
import {
  MRT_EditActionButtons,
  MaterialReactTable,
  // createRow,
  useMaterialReactTable,
} from "material-react-table";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const fakeData = [
  {
    id: "1",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Muhammad Ali",
    gender: "Male",
    class: 10,
    section: "A",
    guardianname: "Fatima Ali",
    address: "123 Main Street, Lahore",
    dateOfBirth: "1995-05-15",
    phone: "+923001234567",
    email: "muhammad.ali@example.com",
  },
  {
    id: "2",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Ayesha Khan",
    gender: "Female",
    class: 11,
    section: "B",
    guardianname: "Ahmed Khan",
    address: "456 Park Avenue, Karachi",
    dateOfBirth: "1996-07-20",
    phone: "+923331234567",
    email: "ayesha.khan@example.com",
  },
  {
    id: "3",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Hassan Ahmed",
    gender: "Male",
    class: 9,
    section: "C",
    guardianname: "Sana Ahmed",
    address: "789 Elm Street, Islamabad",
    dateOfBirth: "1997-09-10",
    phone: "+923441234567",
    email: "hassan.ahmed@example.com",
  },
  {
    id: "4",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Saima Iqbal",
    gender: "Female",
    class: 12,
    section: "A",
    guardianname: "Iqbal Khan",
    address: "567 Garden Road, Lahore",
    dateOfBirth: "1994-03-25",
    phone: "+923551234567",
    email: "saima.iqbal@example.com",
  },
  {
    id: "5",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Usman Khan",
    gender: "Male",
    class: 11,
    section: "B",
    guardianname: "Amna Khan",
    address: "890 Rose Avenue, Karachi",
    dateOfBirth: "1996-12-05",
    phone: "+923661234567",
    email: "usman.khan@example.com",
  },
  {
    id: "6",
    photo: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Nadia Qureshi",
    gender: "Female",
    class: 10,
    section: "C",
    guardianname: "Ali Qureshi",
    address: "234 Orchard Street, Islamabad",
    dateOfBirth: "1995-08-18",
    phone: "+923771234567",
    email: "nadia.qureshi@example.com",
  },
  {
    id: "7",
    photo: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Imran Khan",
    gender: "Male",
    class: 12,
    section: "A",
    guardianname: "Sara Khan",
    address: "345 Pine Avenue, Lahore",
    dateOfBirth: "1994-01-30",
    phone: "+923881234567",
    email: "imran.khan@example.com",
  },
  {
    id: "8",
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Zoya Malik",
    gender: "Female",
    class: 11,
    section: "B",
    guardianname: "Malik Ahmed",
    address: "678 Lake Road, Karachi",
    dateOfBirth: "1996-10-12",
    phone: "+923991234567",
    email: "zoya.malik@example.com",
  },
  {
    id: "9",
    photo: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Bilal Khan",
    gender: "Male",
    class: 10,
    section: "C",
    guardianname: "Khadija Khan",
    address: "456 Elm Street, Islamabad",
    dateOfBirth: "1995-07-22",
    phone: "+923331234567",
    email: "bilal.khan@example.com",
  },
  {
    id: "10",
    photo: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Maria Ahmad",
    gender: "Female",
    class: 12,
    section: "A",
    guardianname: "Ahmad Ali",
    address: "789 Oak Avenue, Lahore",
    dateOfBirth: "1994-04-10",
    phone: "+923661234567",
    email: "maria.ahmad@example.com",
  },
  {
    id: "11",
    photo: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Ali Raza",
    gender: "Male",
    class: 11,
    section: "B",
    guardianname: "Sana Raza",
    address: "890 Maple Street, Karachi",
    dateOfBirth: "1996-09-15",
    phone: "+923771234567",
    email: "ali.raza@example.com",
  },
  {
    id: "12",
    photo: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Sana Shah",
    gender: "Female",
    class: 10,
    section: "C",
    guardianname: "Shah Ahmed",
    address: "123 Pine Avenue, Islamabad",
    dateOfBirth: "1995-06-20",
    phone: "+923881234567",
    email: "sana.shah@example.com",
  },
  {
    id: "13",
    photo: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Faisal Abbas",
    gender: "Male",
    class: 12,
    section: "A",
    guardianname: "Nadia Abbas",
    address: "456 Cedar Road, Lahore",
    dateOfBirth: "1994-02-05",
    phone: "+923991234567",
    email: "faisal.abbas@example.com",
  },
  {
    id: "14",
    photo: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Saba Siddiqui",
    gender: "Female",
    class: 11,
    section: "B",
    guardianname: "Siddiqui Khan",
    address: "678 Willow Avenue, Karachi",
    dateOfBirth: "1996-11-18",
    phone: "+923331234567",
    email: "saba.siddiqui@example.com",
  },
  {
    id: "15",
    photo: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "Ahmed Malik",
    gender: "Male",
    class: 10,
    section: "C",
    guardianname: "Malik Hussain",
    address: "890 Birch Street, Islamabad",
    dateOfBirth: "1995-08-22",
    phone: "+923441234567",
    email: "ahmed.malik@example.com",
  },
  {
    id: "16",
    photo: "ksdn",
    name: "Hina Aslam",
    gender: "Female",
    class: 12,
    section: "A",
    guardianname: "Aslam Khan",
    address: "123 Cherry Avenue, Lahore",
    dateOfBirth: "1994-03-10",
    phone: "+923551234567",
    email: "hina.aslam@example.com",
  },
  {
    id: "17",
    photo: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Tariq Mahmood",
    gender: "Male",
    class: 11,
    section: "B",
    guardianname: "Mahmood Ali",
    address: "456 Pine Street, Karachi",
    dateOfBirth: "1996-12-15",
    phone: "+923661234567",
    email: "tariq.mahmood@example.com",
  },
  {
    id: "18",
    photo: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Fiza Ali",
    gender: "Female",
    class: 10,
    section: "C",
    guardianname: "Ali Hassan",
    address: "789 Elm Avenue, Islamabad",
    dateOfBirth: "1995-07-20",
    phone: "+923771234567",
    email: "fiza.ali@example.com",
  },
  {
    id: "19",
    photo: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Rizwan Ahmed",
    gender: "Male",
    class: 12,
    section: "A",
    guardianname: "Sana Ahmed",
    address: "234 Cedar Street, Lahore",
    dateOfBirth: "1994-01-30",
    phone: "+923881234567",
    email: "rizwan.ahmed@example.com",
  },
  {
    id: "20",
    photo:
      "https://media.licdn.com/dms/image/D4D03AQH6aQzX__C0NA/profile-displayphoto-shrink_800_800/0/1702018309539?e=2147483647&v=beta&t=zN7ll16J7JDdFjhj70cXCcmA11_cjMv0mF3Q1omNkhQ",
    name: "Sadia Khan",
    gender: "Female",
    class: 11,
    section: "B",
    guardianname: "Khan Ali",
    address: "567 Willow Road, Karachi",
    dateOfBirth: "1996-10-12",
    phone: "+923991234567",
    email: "sadia.khan@example.com",
  },
];

const Example = () => {
  const [validationErrors, setValidationErrors] = useState({});

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "Roll Number",
        enableEditing: false,
        size: 80,
      },
      {
        accessorKey: "photo",
        header: "Photo",
        muiEditTextFieldProps: {
          type: "text", // Change the type to text for entering URL
          required: true,
          error: !!validationErrors?.photo,
          helperText: validationErrors?.photo,
        },
        renderCell: ({ value }) => (
          <img src={value} alt="User" width="50" height="50" />
        ),
      },
      {
        accessorKey: "name",
        header: "Name",
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.name,
          helperText: validationErrors?.name,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              name: undefined,
            }),
        },
      },

      {
        accessorKey: "gender",
        header: "Gender",
        editVariant: "select",
        editSelectOptions: ["Male", "Female"],
        muiEditTextFieldProps: {
          select: true,
          error: !!validationErrors?.state,
          helperText: validationErrors?.state,
        },
      },
      {
        accessorKey: "class",
        header: "Class",
        editVariant: "select",
        editSelectOptions: [1, 2, 3, 4, 5, 6, 7, 8],
        muiEditTextFieldProps: {
          select: true,
          error: !!validationErrors?.state,
          helperText: validationErrors?.state,
        },
      },
      {
        accessorKey: "section",
        header: "Section",
        editVariant: "select",
        editSelectOptions: ["A", "B", "C"],

        muiEditTextFieldProps: {
          select: true,
          error: !!validationErrors?.state,
          helperText: validationErrors?.state,
        },
      },
      {
        accessorKey: "guardianname",
        header: "Guardian Name",
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.guardianname,
          helperText: validationErrors?.guardianname,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              guardianname: undefined,
            }),
        },
      },
      {
        accessorKey: "address",
        header: "Address",
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.address,
          helperText: validationErrors?.address,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              address: undefined,
            }),
        },
      },
      {
        accessorKey: "dateOfBirth", // Assuming this is the key for the date attribute in your data
        header: "Date of Birth",
        muiEditTextFieldProps: {
          required: true,
          type: "date", // Set type to "date" to render a date picker
          error: !!validationErrors?.dateOfBirth,
          helperText: validationErrors?.dateOfBirth,
        },
      },
      {
        accessorKey: "phone", // Assuming this is the key for the date attribute in your data
        header: "Phone",
        muiEditTextFieldProps: {
          required: true,
          type: "number",
          error: !!validationErrors?.phone,
          helperText: validationErrors?.phone,
        },
      },

      {
        accessorKey: "email",
        header: "Email",
        muiEditTextFieldProps: {
          type: "email",
          required: true,
          error: !!validationErrors?.email,
          helperText: validationErrors?.email,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              email: undefined,
            }),
        },
      },
    ],
    [validationErrors]
  );

  //call CREATE hook
  const { mutateAsync: createUser, isPending: isCreatingUser } =
    useCreateUser();
  //call READ hook
  const {
    data: fetchedUsers = [],
    isError: isLoadingUsersError,
    isFetching: isFetchingUsers,
    isLoading: isLoadingUsers,
  } = useGetUsers();
  //call UPDATE hook
  const { mutateAsync: updateUser, isPending: isUpdatingUser } =
    useUpdateUser();
  //call DELETE hook
  const { mutateAsync: deleteUser, isPending: isDeletingUser } =
    useDeleteUser();

  //CREATE action
  const handleCreateUser = async ({ values, table }) => {
    const newValidationErrors = validateUser(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await createUser(values);
    table.setCreatingRow(null); //exit creating mode
  };

  //UPDATE action
  const handleSaveUser = async ({ values, table }) => {
    const newValidationErrors = validateUser(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await updateUser(values);
    table.setEditingRow(null); //exit editing mode
  };

  //DELETE action
  const openDeleteConfirmModal = (row) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(row.original.id);
    }
  };

  const table = useMaterialReactTable({
    columns,
    data: fetchedUsers,
    createDisplayMode: "modal", //default ('row', and 'custom' are also available)
    editDisplayMode: "modal", //default ('row', 'cell', 'table', and 'custom' are also available)
    enableEditing: true,
    getRowId: (row) => row.id,
    muiToolbarAlertBannerProps: isLoadingUsersError
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
    onCreatingRowCancel: () => setValidationErrors({}),
    onCreatingRowSave: handleCreateUser,
    onEditingRowCancel: () => setValidationErrors({}),
    onEditingRowSave: handleSaveUser,
    //optionally customize modal content
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Create New User</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          {internalEditComponents} {/* or render custom edit components here */}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    //optionally customize modal content
    renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Edit User</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {internalEditComponents} {/* or render custom edit components here */}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => table.setEditingRow(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Button
        variant="contained"
        onClick={() => {
          table.setCreatingRow(true); //simplest way to open the create row modal with no default values
          //or you can pass in a row object to set default values with the `createRow` helper function
          // table.setCreatingRow(
          //   createRow(table, {
          //     //optionally pass in default values for the new row, useful for nested data or other complex scenarios
          //   }),
          // );
        }}
      >
        Create New User
      </Button>
    ),
    state: {
      isLoading: isLoadingUsers,
      isSaving: isCreatingUser || isUpdatingUser || isDeletingUser,
      showAlertBanner: isLoadingUsersError,
      showProgressBars: isFetchingUsers,
    },
  });

  return <MaterialReactTable table={table} />;
};

//CREATE hook (post new user to api)
function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newUserInfo) => {
      queryClient.setQueryData(["users"], (prevUsers) => [
        ...prevUsers,
        {
          ...newUserInfo,
          id: (Math.random() + 1).toString(36).substring(7),
        },
      ]);
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

//READ hook (get users from api)
function useGetUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      //send api request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve(fakeData);
    },
    refetchOnWindowFocus: false,
  });
}

//UPDATE hook (put user in api)
function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newUserInfo) => {
      queryClient.setQueryData(["users"], (prevUsers) =>
        prevUsers?.map((prevUser) =>
          prevUser.id === newUserInfo.id ? newUserInfo : prevUser
        )
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

//DELETE hook (delete user in api)
function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (userId) => {
      queryClient.setQueryData(["users"], (prevUsers) =>
        prevUsers?.filter((user) => user.id !== userId)
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

const queryClient = new QueryClient();

const ExampleWithProviders = () => (
  //Put this with your other react-query providers near root of your app
  <QueryClientProvider client={queryClient}>
    <Example />
  </QueryClientProvider>
);

export default ExampleWithProviders;

const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

function validateUser(user) {
  return {
    firstName: !validateRequired(user.firstName)
      ? "First Name is Required"
      : "",
    lastName: !validateRequired(user.lastName) ? "Last Name is Required" : "",
    email: !validateEmail(user.email) ? "Incorrect Email Format" : "",
  };
}
