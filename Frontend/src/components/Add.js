import {
  Button,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import axios from "axios";
import React from "react";

let dialogBoxStyle = {
  marginTop: "20px",
  display: "grid",
  gridTemplateColumns: "300px 300px 300px 300px",
  gap: "50px 70px",
};

const Add = () => {
  const [data, setData] = React.useState({
    business_code: "",
    cust_no: "",
    clear_date: "",
    business_year: "",
    doc_id: "",
    posting_date: "",
    document_create_date: "",
    due_in_date: "",
    invoice_currency: "",
    doc_type: "",
    posting_id: "",
    total_open_amount: "",
    baseline_create_date: "",
    cust_payment_terms: "",
    invoice_id: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const submitHandler = () => {
    let val =
      "business_code=" +
      data.business_code +
      "&cust_number=" +
      data.cust_no +
      "&clear_date=" +
      data.clear_date +
      "&business_year=" +
      data.business_year +
      "&doc_id=" +
      data.doc_id +
      "&posting_date=" +
      data.posting_date +
      "&document_create_date=" +
      data.document_create_date +
      "&due_in_date=" +
      data.due_in_date +
      "&invoice_currency=" +
      data.invoice_currency +
      "&doc_id=" +
      data.doc_type +
      "&posting_id=" +
      data.posting_id +
      "&total_open_amount=" +
      data.total_open_amount +
      "&baseline_create_date=" +
      data.baseline_create_date +
      "&cust_payment_terms=" +
      data.cust_payment_terms +
      "&invoice_id=" +
      data.invoice_id;
    axios.get("http://localhost:8080/HRC40490W/AddServlet?" + val).then((res) => {
      const response = res.data;
      if (response) {
        setData({
          business_code: "",
          cust_no: "",
          clear_date: "",
          business_year: "",
          doc_id: "",
          posting_date: "",
          document_create_date: "",
          due_in_date: "",
          invoice_currency: "",
          doc_type: "",
          posting_id: "",
          total_open_amount: "",
          baseline_create_date: "",
          cust_payment_terms: "",
          invoice_id: "",
        });
        setOpen(false);
      }
    });
  };
  return (
    <div>
      <div>
        <CssBaseline />
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
          sx={{ width: "155px" , color:"white"}}
        >
          Add
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth={true}
          maxWidth={"md"}
          PaperProps={{
            style: {
              backgroundColor: "#283d4a",
              color: "white",
              textAlign:"left"
            },
          }}
        >
          <DialogTitle>Add</DialogTitle>
          <DialogContent sx={{ paddingTop: "20px"}}>
            <form id="addForm">
              <Grid container rowSpacing={3} columnSpacing={4}>
                <Grid item xs={12} md={3}>
                  <TextField
                    id="outlined-basic"
                    label="Business Code"
                    variant="filled"
                    name="business_code"
                    className="addFormBGColor"
                    value={data.business_code}
                    onChange={changeHandler}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    id="outlined-basic"
                    label="Customer Number"
                    variant="filled"
                    name="cust_no"
                    className="addFormBGColor"
                    value={data.cust_no}
                    onChange={changeHandler}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    id="outlined-basic"
                    label="clear Date"
                    variant="filled"
                    name="clear_date"
                    className="addFormBGColor"
                    type="Date"
                    value={data.clear_date}
                    onChange={changeHandler}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    id="outlined-basic"
                    label="Business Year"
                    variant="filled"
                    name="business_year"
                    className="addFormBGColor"
                    value={data.business_year}
                    onChange={changeHandler}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    id="outlined-basic"
                    label="Document id"
                    variant="filled"
                    name="doc_id"
                    className="addFormBGColor"
                    value={data.doc_id}
                    onChange={changeHandler}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    id="outlined-basic"
                    label="Posting Date"
                    variant="filled"
                    type="Date"
                    name="posting_date"
                    className="addFormBGColor"
                    value={data.posting_date}
                    onChange={changeHandler}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    id="outlined-basic"
                    label="Document Create Date"
                    variant="filled"
                    type="Date"
                    name="document_create_date"
                    className="addFormBGColor"
                    value={data.document_create_date}
                    onChange={changeHandler}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    id="outlined-basic"
                    label="Due Date"
                    variant="filled"
                    type="Date"
                    name="due_in_date"
                    className="addFormBGColor"
                    value={data.due_in_date}
                    onChange={changeHandler}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    id="outlined-basic"
                    label="Invoice Currency"
                    variant="filled"
                    name="invoice_currency"
                    className="addFormBGColor"
                    value={data.invoice_currency}
                    onChange={changeHandler}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    id="outlined-basic"
                    label="Document Type"
                    variant="filled"
                    name="doc_type"
                    className="addFormBGColor"
                    value={data.doc_type}
                    onChange={changeHandler}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    id="outlined-basic"
                    label="Posting Id"
                    variant="filled"
                    name="posting_id"
                    className="addFormBGColor"
                    value={data.posting_id}
                    onChange={changeHandler}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    id="outlined-basic"
                    label="Total Open Amount"
                    variant="filled"
                    name="total_open_amount"
                    className="addFormBGColor"
                    value={data.total_open_amount}
                    onChange={changeHandler}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    id="outlined-basic"
                    label="Baseline Create Date"
                    variant="filled"
                    type="Date"
                    name="baseline_create_date"
                    className="addFormBGColor"
                    value={data.baseline_create_date}
                    onChange={changeHandler}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    id="outlined-basic"
                    label="Customer Payment Terms"
                    variant="filled"
                    name="cust_payment_terms"
                    className="addFormBGColor"
                    value={data.cust_payment_terms}
                    onChange={changeHandler}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    id="outlined-basic"
                    label="Invoice Id"
                    variant="filled"
                    name="invoice_id"
                    className="addFormBGColor"
                    value={data.invoice_id}
                    onChange={changeHandler}
                  />
                </Grid>
              </Grid>
            </form>
          </DialogContent>
          <DialogActions>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Button
                  type="submit"
                  onClick={submitHandler}
                  color="primary"
                  variant="outlined"
                  autoFocus
                  style={{ width: "100%", color:"white",width: "100%",
                  paddingLeft: 60,
                  paddingRight: 60,
                  fontSize: "18px",}}
                >
                  ADD
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  onClick={handleClose}
                  color="primary"
                  variant="outlined"
                  style={{ width: "100%" ,
                  color:"white",
                  paddingLeft: 60,
                  paddingRight: 60,
                  fontSize: "18px"}}
                >
                  CANCEL
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Add;