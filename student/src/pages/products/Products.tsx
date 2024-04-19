import { useState } from "react";
import "./Products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "Institution",
    type: "string",
    headerName: "Institution",
    width: 250,
  },
  {
    field: "Date",
    type: "string",
    headerName: "Date",
    width: 150,
  },
  {
    field: "Fee",
    type: "string",
    headerName: "Fee",
    width: 200,
  },
  {
    field: "DonorName",
    headerName: "DonorName",
    type: "string",
    width: 200,
  },
  {
    field: "Lastdate",
    headerName: "Lastdate",
    width: 200,
    type: "string",
  },
  {
    field: "Status",
    headerName: "Status",
    width: 150,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allproducts"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/products").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="products">
      <div className="info">
        <h1>Fee details</h1>
        <button onClick={() => setOpen(true)}>Add Monthly Fee</button>
      </div>
      <DataTable slug="fee details" columns={columns} rows={products} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="products" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="Fee Details" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
