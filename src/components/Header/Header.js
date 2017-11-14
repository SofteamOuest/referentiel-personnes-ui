import React from "react";
import { AppBar } from "material-ui";
import AddIcon from "material-ui/svg-icons/content/add";
import IconButton from "material-ui/IconButton";
import { withRouter } from "react-router-dom";

const styles = {
  title: {
    cursor: "pointer"
  }
};

const Header = ({ history }) => (
  <AppBar
    title={<span style={styles.title}>Personnes | SOFTEAM DIGITAL</span>}
    onTitleTouchTap={() => history.push("/")}
    iconElementLeft={<div />}
    iconElementRight={
      //<Link to="/add">
      <IconButton>
        <AddIcon />
      </IconButton>
      //</Link>
    }
    onRightIconButtonTouchTap={() => history.push("/add")}
  />
);

export default withRouter(Header);
