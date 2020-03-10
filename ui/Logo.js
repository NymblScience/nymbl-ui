/* eslint-disable no-unused-vars */

import React from "react";
import PropTypes from "prop-types";
import Styled from "rsg-components/Styled";
import logo from "./logo.svg";

const styles = ({ fontFamily }) => ({
  logo: {
    margin: "0 0 30px 0",
    fontFamily: fontFamily.base,
    fontSize: 16,
    fontWeight: "normal",
    display: "block",
    textAlign: "center",
    color: "#595959",
    padding: "0"
  },
  image: {
    display: "block",
    maxWidth: "200px"
  }
});

export function LogoRenderer({ classes, children }) {
  return (
    <h1 className={classes.logo}>
      <img className={classes.image} src={logo} />
    </h1>
  );
}

LogoRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
};

export default Styled(styles)(LogoRenderer);
/* eslint-enable no-unused-vars */
