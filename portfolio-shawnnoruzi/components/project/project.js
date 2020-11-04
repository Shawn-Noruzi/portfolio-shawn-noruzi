import React from "react";
import "./project.scss";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { red } from "@material-ui/core/colors";

//if phone = true as prop change css
const useStyles = makeStyles({
  buttonSite: {
    background: "#06B6B6",
    width: "300px",
    margin: "10px",
    "&:hover": {
      backgroundColor: "#00FFFF",
      color: "white",
    },
  },
  buttonGit: {
    color: "#00FFFF",
    borderColor: "#00FFFF",
    width: "300px",
    margin: "10px",
    "&:hover": {
      backgroundColor: "#00FFFF",
      color: "white",
    },
  },
  projectContainer: {
    display: "flex",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "20px",
  },
  buttonContainer: {
    margin: `0 auto`,
    display: `flex`,
    flexDirection: `column`,
  },
  projectImage: {
    width: "500px",
  },
  projectImagePhone: {
    width: "300px",
  },
  title: {
    color: "#fff",
    fontFamily: "monospace",
    textAlign: "center",
    fontSize: "32px",
    lineHeight: "40px",
    marginTop: "40px",
    marginBottom: "24px",
  },
  titlePhone: {
    color: "#fff",
    fontFamily: "monospace",
    textAlign: "center",
    fontSize: "32px",
    lineHeight: "40px",
    marginTop: "110px",
    marginBottom: "24px",
  },
  body: {
    color: "#fff",
    fontFamily: "monospace",
    textAlign: "center",
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "8px",
    width: "420px",
  },
  ["@media (max-width: 920px)"]: {
    projectContainer: {
      display: "flex",
      flexDirection: "column",
    },
    title: {
      color: "#fff",
      fontFamily: "monospace",
      textAlign: "center",
      fontSize: "32px",
      lineHeight: "40px",
      marginBottom: "24px",
    },
    body: {
      color: "#fff",
      fontFamily: "monospace",
      textAlign: "center",
      fontSize: "16px",
      lineHeight: "24px",
      marginBottom: "8px",
      width: "900px",
    },
    title: {
      color: "#fff",
      fontFamily: "monospace",
      textAlign: "center",
      fontSize: "32px",
      lineHeight: "40px",
      marginTop: "40px",
      marginBottom: "24px",

    },
    titlePhone: {
      color: "#fff",
      fontFamily: "monospace",
      textAlign: "center",
      fontSize: "32px",
      lineHeight: "40px",
      marginTop: "50px",
      marginBottom: "24px",
    },
    body: {
      color: "#fff",
      fontFamily: "monospace",
      textAlign: "center",
      fontSize: "16px",
      lineHeight: "24px",
      marginBottom: "8px",
      width: '300px',
      margin: '10px',
      marginBottom: '45px'
    },
    projectImage: {
      width: "300px",
      margin: "0 auto",
    },
    projectImagePhone: {
      width: "150px",
      margin: `0 auto`,
    },
  },
});

export default function Project({
  src,
  alt = "project",
  title,
  description,
  phone,
}) {
  const classes = useStyles();

  return (
    <div className={classes.projectContainer}>
      <img
        alt={alt}
        src={src}
        className={classes.projectImage}
      />
      <div className={classes.contentContainer}>
        <p className={classes.title}>{title}</p>
        <p className={classes.body}>{description}</p>
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.buttonSite}
          >
            View Site
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            className={classes.buttonGit}
          >
            Github
          </Button>
        </div>
      </div>
    </div>
  );
}
