import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import "./TableStyle.css";
import axios from "axios";

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

export default function EditModal(props) {
  const [open, setOpen] = React.useState(false);
  const [invoiceCurrencyValue, setInvoiceCurrency] = React.useState();
  const [customerPaymentTermsValue, setCustomerPaymentTerms] = React.useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const selected = props.selected;
  const rows = props.rows;

  let indexValue = selected[0];
  let invoiceCurrency = "";
  let customerPaymentTerms = "";

  var index = -1;
  var val = indexValue;
  var filteredObj = rows.find(function (item, i) {
    if (item.sl_no === val) {
      index = i;
      return i;
    }
  });

  console.log("index", index, filteredObj);

  try {
    invoiceCurrency = rows[index].invoice_currency;
    customerPaymentTerms = rows[index].cust_payment_terms;
  } catch (err) {
    console.log("Waiting for Data...");
  }

  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/HRC40490W/EditServlet?", null, {
        params: {
          Sl_no: indexValue,
          Invoice_currency: invoiceCurrencyValue,
          Cust_payment_terms: customerPaymentTermsValue,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Button
        style={{ minWidth: "160px" , color:"white"}}
        variant="outlined"
        size="medium"
        onClick={handleOpen}
        disabled={selected.length == 1 ? false : true}
      >
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ color: "white" , textAlign:"left" }}
          >
            Edit
          </Typography>
          <br></br>
          <Grid container rowSpacing={1}>
            <Grid
              item
              md={6}
              xs={12}
              sx={{ "& > :not(style)": { m: 1, width: "25ch" , color:"white"} }}
            >
              <TextField
                value={invoiceCurrencyValue}
                onChange={(e) => setInvoiceCurrency(e.target.value)}
                defaultValue={invoiceCurrency}
                className="addFormBGColor"
                style={{ width: "96%" }}
                id="filled-basic"
                label="Invoice Currency"
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
                value={customerPaymentTermsValue}
                onChange={(e) => setCustomerPaymentTerms(e.target.value)}
                defaultValue={customerPaymentTerms}
                contentEditable="true"
                className="addFormBGColor"
                style={{ width: "96%" }}
                id="filled-basic"
                label="Customer Payment Terms"
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
            }}
            style={{ minWidth: "50%" }}
            variant="outlined"
            size="medium"
            sx={{ width: "200px" , color:"white"}}
          >
            Edit
          </Button>

          <Button
            onClick={() => {
              handleClose();
            }}
            style={{ minWidth: "50%" , color:"white"}}
            variant="outlined"
            size="medium"
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
