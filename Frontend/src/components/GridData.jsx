import React from "react";

import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Delete from "./Delete";
import "../css/style.css";
import { Button } from "@mui/material";
import refresh from "../assests/refresh.jpeg";
import Add from "./Add";
import { TextField } from "@mui/material";
import Edit from "./Edit";

import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";


export default class GridData extends React.Component {
  state = {
    dataset: [],
    columns: [
      { field: "sl_no", headerName: `Sl\nno`, width: 50 },
      { field: "business_code", headerName: "Business\nCode", width: 115 },
      { field: "cust_number", headerName: "Customer\nNumber", width: 145 },
      { field: "clear_date", headerName: "Clear\nDate", width: 115 },
      { field: "buisness_year", headerName: "Business\nYear", width: 115 },
      { field: "doc_id", headerName: "Document\nId", width: 115 },
      { field: "posting_date", headerName: "Posting\nDate", width: 115 },
      {
        field: "document_create_date",
        headerName: "Document\nCreate\nDate",
        width: 170,
      },
      { field: "due_in_date", headerName: "Due\nDate", width: 105 },
      {
        field: "invoice_currency",
        headerName: "Invoice\nCurrency",
        width: 130,
      },
      { field: "document_type", headerName: "Document\nType", width: 120 },
      { field: "posting_id", headerName: "Posting\nId", width: 100 },
      {
        field: "total_open_amount",
        headerName: "Total\nOpen\nAmount",
        width: 130,
      },
      {
        field: "baseline_create_date",
        headerName: "Baseline\nCreate\nDate",
        width: 130,
      },
      {
        field: "cust_payment_terms",
        headerName: "Customer\nPayment\nterms",
        width: 120,
      },
      { field: "invoice_id", headerName: "Invoice\nId", width: 120 },
    ],
    pageSize: 10,
    selectionModel: [],
    del: false,
    deleteDisabledState: true,
    selectedData: { sl_no: "", invoice_currency: "", cust_payment_terms: "" },
    searchCustomer: "",
    open: false,
    customerNumberValue: "",
    businessYearValue: "",
    documentIdValue: "",
    invoiceIdValue: "",
  };

  componentDidMount() {
    axios.get("http://localhost:8080/HRC40490W/FetchServlet").then((res) => {
      const dataset = res.data;
      this.setState({ dataset: dataset });
    });
  }

  render() {
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      minWidth: "45%",
      minHeight: "20%",
      bgcolor: "#283d4a",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    };

    const handleOpen = () => this.setState({ open: true });
    const handleClose = () => this.setState({ open: false });

    const clearInput = () => {
      this.setState({
        customerNumberValue: "",
        businessYearValue: "",
        documentIdValue: "",
        invoiceIdValue: "",
      });
    };

    const handleSubmit = () => {
      axios
        .post("http://localhost:8080/HRC40490W/Advance", null, {
          params: {
            Cust_number: this.state.customerNumberValue,
            Buisness_year: this.state.businessYearValue,
            Doc_id: this.state.documentIdValue,
            Invoice_id: this.state.invoiceIdValue,
          },
        })
        .then((response) => {
          console.log(response.data[0]);

          this.setState({ dataset: response.data })
        })
        .catch((err) => console.log(err));
    };

    const handleSearchCustomerID = async (e) => {
      if (e.key == "Enter") {
        let dataset = await axios.get(
          "http://localhost:8080/HRC40490W/SearchCustomer?customer_id=" +
            this.state.searchCustomer
        );
        this.setState({ ...this.state, dataset: dataset.data });
      }
    };

    const advanceSearchHandler = (e) => {
      this.setState({ dataset: e });
    };

    const handleSearchCustomerChange = (e) => {
      let value = e.target.value;
      this.setState({ ...this.state, searchCustomer: value });
    };
    const selectionHandler = () => {
      if (this.state.selectionModel.length == 1) {
        this.setState({
          selectedData: {
            sl_no: this.state.dataset[this.state.selectionModel[0] - 1].sl_no,
            invoice_currency:
              this.state.dataset[this.state.selectionModel[0] - 1]
                .invoice_currency,
            cust_payment_terms:
              this.state.dataset[this.state.selectionModel[0] - 1]
                .cust_payment_terms,
          },
        });
        console.log(this.state.selectedData);
      }
    };
    const handleClickRefresh = () => {
      this.componentDidMount();
    };

    return (
      <div>
        {/* <div class="logo-flex">
          <div class="logo-item">
            <img
              src={require("../assests/abc.png")}
              width="290px"
              height="52 px"
            />
          </div>
          <div class="logo-item">
            <img
              src="https://www.buurst.com/wp-content/uploads/2021/02/highradius-White-Transparent-1.png"
              height="60%"
              width="60%"
            ></img>
          </div>
        </div> */}

        <div className="GridHeader">
          <div class="predict-box">
            <button
              class="predict-txt"
              onClick="checkDelete()"
              id="predict-popup"
            >
              <a class="predict-btn" href="#">
                PREDICT
              </a>
            </button>
          </div>
          <div class="analytics-box">
            <button
              class="analytics-txt"
              onClick="checkEdit()"
              id="analytics-popup"
            >
              <a class="analytics-btn" href="#">
                ANALYTICS VIEW
              </a>
            </button>
          </div>

          <div class="AdvanceSearch">
            <div>
              <Button
                style={{ minWidth: "160px" , color:"white" }}
                variant="outlined"
                size="medium"
                onClick={handleOpen}
              >
                Advance Search
              </Button>
              <Modal
                open={this.state.open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    style={{ color: "White" , textAlign:"left"}}
                  >
                    Advance Search
                  </Typography>
                  <br></br>
                  <Grid container rowSpacing={1}>
                    <Grid
                      item
                      md={6}
                      xs={12}
                      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
                    >
                      <TextField
                        value={this.state.documentIdValue}
                        onChange={(e) => {
                          this.setState({ documentIdValue: e.target.value });
                        }}
                        className="addFormBGColor"
                        style={{ width: "96%" }}
                        id="filled-basic"
                        label="Document ID"
                        variant="filled"
                        size="small"
                      />
                    </Grid>

                    <Grid
                      item
                      md={6}
                      xs={12}
                      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
                    >
                      <TextField
                        value={this.state.invoiceIdValue}
                        onChange={(e) =>
                          this.setState({ invoiceIdValue: e.target.value })
                        }
                        className="addFormBGColor"
                        style={{ width: "96%" }}
                        id="filled-basic"
                        label="Invoice ID"
                        variant="filled"
                        size="small"
                      />
                    </Grid>

                    <Grid
                      item
                      md={6}
                      xs={12}
                      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
                    >
                      <TextField
                        value={this.state.customerNumberValue}
                        onChange={(e) =>
                          this.setState({ customerNumberValue: e.target.value })
                        }
                        className="addFormBGColor"
                        style={{ width: "96%" }}
                        id="filled-basic"
                        label="Customer Number"
                        variant="filled"
                        size="small"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
                    >
                      <TextField
                        value={this.state.businessYearValue}
                        onChange={(e) =>
                          this.setState({ businessYearValue: e.target.value })
                        }
                        className="addFormBGColor"
                        style={{ width: "96%" }}
                        id="filled-basic"
                        label="Business Year"
                        variant="filled"
                        size="small"
                      />
                    </Grid>
                  </Grid>
                  <br></br>

                  <Button
                    onClick={() => {
                      handleSubmit();
                      handleClose();
                      clearInput();
                    }}
                    style={{ minWidth: "50%",color:"white" }}
                    variant="outlined"
                    size="medium"
                  >
                    Search
                  </Button>

                  <Button
                    onClick={() => {
                      handleClose();
                      clearInput();
                    }}
                    style={{ minWidth: "50%" ,color:"white" }}
                    variant="outlined"
                    size="medium"
                  >
                    Cancel
                  </Button>
                </Box>
              </Modal>
            </div>
          </div>

          <div class="GridPanelRefreshButton-root">
            <Button
              className="GridPanelRefreshButton"
              variant="outlined"
              startIcon={<img className="GridPanelRefreshIcon" src={refresh} />}
              alt="Refresh"
              title="Refresh"
              onClick={handleClickRefresh}
            />
          </div>
          <div>
            <TextField
              id="add"
              type={"number"}
              name={"text"}
              value={this.state.searchCustomer}
              label="Search Customer Id"
              variant="filled"
              onKeyDown={handleSearchCustomerID}
              onChange={handleSearchCustomerChange}
            />
          </div>
          <div class="add-box">
            <Add />
          </div>
          <div class="Edit-box">
            <Edit
              selected={this.state.selectionModel}
              rows={this.state.dataset}
            />
            </div>
            <div class="Delete-box">
            <Delete
              selectedData={this.state.selectedData}
              selectionModel={this.state.selectionModel}
            />
            
          </div>
        </div>
        <div className="sectionBody">
          <DataGrid
            className="mainDataGrid"
            rows={this.state.dataset}
            getRowId={(row) => row.sl_no}
            columns={this.state.columns}
            pageSize={this.state.pageSize}
            onPageSizeChange={(newPageSize) => {
              this.setState({ pageSize: newPageSize });
            }}
            rowsPerPageOptions={[10, 25, 50]}
            checkboxSelection
            selectionModel={this.state.selectionModel}
            onSelectionModelChange={(newSelectionModel) => {
              this.setState({ selectionModel: newSelectionModel });
            }}
            onStateChange={() => {
              if (this.state.selectionModel.length == 1) {
                this.setState({ deleteDisabledState: false });
                selectionHandler();
              } else if (this.state.selectionModel.length > 1) {
                this.setState({ deleteDisabledState: false });
              } else {
                this.setState({ deleteDisabledState: true });
              }
            }}
            disableSelectionOnClick
          />
        </div>
      </div>
    );
  }
}
