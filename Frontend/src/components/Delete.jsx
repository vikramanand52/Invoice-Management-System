import React from "react";
import { Button } from "@mui/material";
import { Dialog } from "@mui/material";
import axios from "axios";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, DialogContent, Grid, TextField } from "@mui/material";

export default function Buttons(props) {
  const [deleteDisabledState, setDisableState] = React.useState(true);
  const [del, setDel] = React.useState(false);
  const handleClickDelete = () => {
    setDel(true);
  };
  const handleCloseDelete = () => {
    setDel(false);
  };
  const [data, setData] = React.useState(props.selected);

  const submitHandlerDelete = async (e) => {
    e.preventDefault();
    let val = props.selectionModel;
    console.log(val);
    let data = val.map((e, id) => {
      if (id == 0) {
        return "sl_no=" + e;
      } else {
        return "&sl_no=" + e;
      }
    });

    let response = await axios.get(
      "http://localhost:8080/HRC40490W/DeleteServlet?" + data.join("")
    );
    if (response) {
      setData([]);
      handleCloseDelete();
    }
  };

  return (
    <>
      <CssBaseline />
      <Button
        variant="outlined"
        onClick={handleClickDelete}
        disabled={false}
        // style={{ width: 10 + "vw", height: 6 + "vh" }}
        sx={{ width: "200px" , color:"white", marginTop:"10px"}}
      >
        DELETE
      </Button>
      <Dialog open={del} maxWidth="sm" onClose={handleCloseDelete}
        PaperProps={{
          style: {
            backgroundColor: "#283d4a",
            color: "white",
            textAlign:"left"
          },
        }}>
        <DialogTitle textAlign="center">Delete Records ?</DialogTitle>
        <DialogContentText 
        style={{color:"white", width:"100%"}}>
          Are you sure you want to delete these record[s] ?
        </DialogContentText>

        <DialogActions>
          <Button
            className="DeleteDialogFooterButtons"
            onClick={handleCloseDelete}
            variant="outlined"
            color="primary" style = {{width: "100%", color:"white"}}
          >
            Cancel
          </Button>
          <Button
            className="DeleteDialogFooterButtons"
            onClick={submitHandlerDelete}
            variant="outlined"
            color="primary" style = {{width: "100%", color:"white"}}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}