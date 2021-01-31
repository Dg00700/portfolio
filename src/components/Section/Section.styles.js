import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  bg: {
    background: "rgb(255, 191, 0)",
    padding: "50px 5%",
    borderTop: "1px solid rgba(0, 0, 0, 0.13)",
    borderBottom: "1px solid rgba(0, 0, 0, 0.13)",
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)"
  },
  noBg: {
    background: "rgb(255, 255, 204)",
    padding: "50px 5%"
  }
});


