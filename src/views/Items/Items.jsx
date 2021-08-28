import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CommonNav from "../../components/common/CommonNav";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function Items() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CommonNav title="Items" />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <h1>Items</h1>
        </Container>
      </main>
    </div>
  );
}

export default Items;
