import {
  Logo,
  Words,
  Header as ArwesHeader,
  Highlight,
  withStyles,
} from "arwes";
import { Link } from "react-router-dom";
import Clickable from "./Clickable";
import Centered from "./Centered";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "90%",
    lineHeight: "80px",
    justifyContent: "space-between",
  },
  logo: {
    display: "inherit",
    marginTop: "15px",
  },
  brand: {
    display: "flex",
    flexDirection: "row",
  },
  nav: {
    display: "inherit",
  },
  banner: {
    display: "inherit",
    fontWeight: "bold",
    marginLeft: "10px",
    marginRight: "15px",
    fontSize: 28,
  },
  shortBanner: {
    display: "none",
    fontWeight: "bold",
    marginLeft: "10px",
    fontSize: 28,
  },
  clickable: {
    fontSize: 21,
    "& i": {
      marginRight: theme.padding / 2,
      fontSize: 24,
    },
  },
  link: {
    color: theme.color.content,
    textDecoration: "none",
  },
  button: {
    padding: [0, theme.padding / 2],
  },
  "@media (max-width: 800px)": {
    logo: {
      display: "none",
    },
    banner: {
      display: "none",
    },
    shortBanner: {
      display: "inherit",
    },
    button: {
      padding: [0, 8],
    },
    clickable: {
      fontSize: 16,
    },
  },
});

const Header = (props) => {
  const { classes, onNav, ...rest } = props;
  return (
    <ArwesHeader animate>
      <Centered className={classes.root} {...rest}>
        <div className={classes.brand}>
          <img
            src="/favicon.png"
            alt=""
            className={classes.img}
            style={{
              margin: "15px 10px 15px 0",
              height: "50px",
              width: "auto",
            }}
          />
          <Logo animate size={50} className={classes.logo} layer="header" />
          <Words animate className={classes.banner}>
            NASA Mission Control
          </Words>
          <Words animate className={classes.shortBanner}>
            NASA
          </Words>
        </div>

        <nav className={`${classes.nav}`}>
          <Clickable className={classes.clickable} onClick={onNav}>
            <Highlight className={classes.button} animate layer="header">
              <Link className={classes.link} to="/launch">
                {/* <i className="material-icons">check_circle_outline</i> */}
                Launch
              </Link>
            </Highlight>
          </Clickable>
          <Clickable className={classes.clickable} onClick={onNav}>
            <Highlight className={classes.button} animate layer="header">
              <Link className={classes.link} to="/upcoming">
                {/* <i className="material-icons">update</i> */}
                Upcoming
              </Link>
            </Highlight>
          </Clickable>
          <Clickable className={classes.clickable} onClick={onNav}>
            <Highlight className={classes.button} animate layer="header">
              <Link className={classes.link} to="/history">
                {/* <i className="material-icons">history</i> */}
                History
              </Link>
            </Highlight>
          </Clickable>
        </nav>
      </Centered>
    </ArwesHeader>
  );
};

export default withStyles(styles)(Header);
