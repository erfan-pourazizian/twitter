import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1b2730",
    width: "18%",
    padding: "1.5rem 1rem",
    overflow: "hidden !important",
    marginRight: "1rem",
    borderRadius: "0.8rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  hashTagTitle: {
    fontSize: "18px !important",
    fontWeight: "600 !important",
    marginBottom: "1.5rem",
  },
  hashtag: {
    textAlign: "initial",
  },
  hashTagParent: {
    marginBottom: "0.5rem !important",
    padding: "0.15rem !important",
    width: "100%",
    borderRadius: "6px !important",
    transition: "0.3s",
    "&:hover": {
      background: "#AEA5A570",
    },
  },
  count: {
    fontSize: "0.8rem",
    color: "#586672",
    direction: "ltr",
  },
  more: {
    marginRight: 'auto',
    height:'18px',
    width: "18px",
    placeSelf: 'center'
  }
}));

export default useStyles;
