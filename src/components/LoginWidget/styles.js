import { makeStyles } from "@material-ui/core/styles";

export const useWidgetStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(10),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));