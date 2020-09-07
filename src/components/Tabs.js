import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "components/TabPanel";
import Graph1 from "components/Graph1";
import Graph2 from "components/Graph2";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [yAxisValueTab1, setYAxisValueTab1] = useState(null);
  const [yAxisValueTab2, setYAxisValueTab2] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            label={
              yAxisValueTab1 !== null
                ? `Current Y-Axis Value: ${yAxisValueTab1.toFixed(2)}`
                : "Active"
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              yAxisValueTab2 !== null
                ? `Current Y-Axis Value: ${yAxisValueTab2.toFixed(2)}`
                : "Active - Dashed line"
            }
            {...a11yProps(1)}
          />
          <Tab disabled label="Disabled" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Graph1
            getYAxisValue={(yAxisValueTab1) =>
              setYAxisValueTab1(yAxisValueTab1)
            }
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Graph2
            getYAxisValue={(yAxisValueTab2) =>
              setYAxisValueTab2(yAxisValueTab2)
            }
          />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Disabled
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
