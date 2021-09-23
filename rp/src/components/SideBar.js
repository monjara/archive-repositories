import { makeStyles, Tab, Tabs } from "@material-ui/core";

export default function SideBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Tabs
        orientation={"vertical"}
      >
        <Tab label="Item One"/>
        <Tab label="Item Two"/>
        <Tab label="Item Three"/>
        <Tab label="Item Four"/>
        <Tab label="Item Five"/>
        <Tab label="Item Six"/>
        <Tab label="Item Seven"/>
      </Tabs>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#FBDBD0",
    display: 'flex',
    height: window.innerHeight,
    width: window.innerWidth / 7.2,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

